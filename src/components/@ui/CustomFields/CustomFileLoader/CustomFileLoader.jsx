import React, { useState } from "react";
import { Badge, Grid, IconButton, Typography } from "@mui/material";
import { Box, alpha, darken } from "@mui/system";
import { FileUploader } from "react-drag-drop-files";
import { CloseIcon } from "../../../../assets/icons";

// const fileTypes = ["JPG", "PNG", "GIF"];

const FilePreview = ({ file }) => {
  if (file.type.startsWith('image/')) {
    return <Badge
      badgeContent={<IconButton sx={(theme) => ({
        bgcolor: theme.palette.primary.contrastText,
        '&:hover': {
          bgcolor: darken(theme.palette.primary.contrastText, 0.05),
        },
      })}>
        <CloseIcon />
      </IconButton>}
    >
      <Box sx={(theme) => ({
        borderRadius: theme.shape.borderRadiusSm,
        bgcolor: theme.palette.info.main,
        backgroundImage: `url(${URL.createObjectURL(file)})`,
        width: 96,
        height: 96,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      })}
      />
    </Badge>
  } else if (file.type.startsWith('audio/')) {
    return <audio controls src={URL.createObjectURL(file)} />;
  } else if (file.type.startsWith('video/')) {
    return <video controls src={URL.createObjectURL(file)} />;
  } else {
    return <div>Неизвестный тип файла: {file.name}</div>;
  }
};


function CustomFileLoader() {
  const [files, setFiles] = useState(null);
  const [values, setValues] = useState([]);
  console.log({ files, values });

  function encodeFile(file) {
    const reader = new FileReader();

    // eslint-disable-next-line func-names
    reader.onload = function () {
      const encodedData = btoa(reader.result); // Закодировать в Base64
      setValues((prev) => ([
        ...prev,
        { name: file.name, base64: encodedData },
      ]));
    };

    reader.readAsBinaryString(file);
  }

  const handleChange = (file) => {
    setFiles(Array.from(file));
    Array.from(file).map((item) => encodeFile(item));
  };

  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name='file'
        // types={fileTypes}
        multiple
        label='Перетащите сюда файлы или выберите на устройстве'
        hoverTitle=' '
        classes='drop_area'
        children={
          <Box sx={(theme) => ({
            border: `2px ${theme.palette.info.light} dashed`,
            borderRadius: theme.shape.borderRadiusSm,
            p: 3,
            userSelect: 'none',
            cursor: 'pointer',
          })}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Typography variant="body2">Перетащите сюда файлы или</Typography>
              <Typography variant="subtitle2">выберите на устройстве</Typography>
            </Grid>
          </Box >
        }
      />
      < Grid
        container
        gap={2}
        marginTop={3}
        marginBottom={3}
      >
        {
          files ? files.map((file) => (
            <FilePreview key={`${file.name}${file.lastModified}`} file={file} />
          )) : null}
      </Grid >
    </>
  );
}

export default CustomFileLoader;