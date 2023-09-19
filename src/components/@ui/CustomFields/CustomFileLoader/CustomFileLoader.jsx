import React, { useState } from "react";
import { Badge, Grid, IconButton, Typography } from "@mui/material";
import { Box, alpha, darken } from "@mui/system";
import { FileUploader } from "react-drag-drop-files";
import { CloseIcon, DOCIcon, FileIcon, PDFIcon, XLSIcon } from "../../../../assets/icons";

// const fileTypes = ["JPG", "PNG", "GIF"];

const FileImagePreview = ({ file }) => {
  return (
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
  );
};

const Icon = ({ type }) => {
  if (type.includes('word'))
    return <DOCIcon />
  if (type.includes('spreadsheet'))
    return <XLSIcon />
  if (type.includes('pdf'))
    return <PDFIcon />

  return <FileIcon />
}

const FileDocPreview = ({ file }) => {
  const { name: label, type } = file;
  const SLICE_ON = 24;

  const displayLabel = React.useMemo(() => {
    console.log({ label });
    return label && label.length > SLICE_ON ? (
      `${label.slice(0, SLICE_ON / 2)}...${label.slice((label.length - SLICE_ON / 2), label.length)}`
    ) : label;
  }, [label]);

  return (
    <Box sx={(theme) => ({
      borderRadius: theme.shape.borderRadiusSm,
      bgcolor: theme.palette.info.main,
      // backgroundImage: `url(${URL.createObjectURL(file)})`,
      width: 96,
      height: 96,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      wordBreak: 'break-all',
      p: 1,
    })}
    >
      <Grid
        container
        gap={1}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Icon type={type} />
        <Typography variant="caption">{displayLabel}</Typography>
      </Grid>
    </Box>
  );
};

const FilePreview = ({ file, index, onRemove }) => {
  const handleRemove = () => {
    onRemove(index);
  }
  return (<Badge
    badgeContent={<IconButton
      onClick={handleRemove}
      sx={(theme) => ({
        bgcolor: theme.palette.primary.contrastText,
        '&:hover': {
          bgcolor: darken(theme.palette.primary.contrastText, 0.05),
        },
      })}>
      <CloseIcon />
    </IconButton>}
  >
    {file.type.startsWith('image/') ? (
      <FileImagePreview file={file} />
    ) : (
      <FileDocPreview file={file} />
    )}
  </Badge>
  )
  if (file.type.startsWith('image/')) {
    return
  } else if (file.type.startsWith('audio/')) {
    return <audio controls src={URL.createObjectURL(file)} />;
  } else if (file.type.startsWith('video/')) {
    return <video controls src={URL.createObjectURL(file)} />;
  }
};

const FileDropArea = () => {
  return (
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
  );
};

function CustomFileLoader({
  onChange,
  defaultValues,
}) {
  const [files, setFiles] = useState(null);
  const [values, setValues] = useState([]);
  const [hasChanged, setHasChanged] = React.useState(false);

  console.log({ files, values });

  function encodeFile(file, index) {
    const reader = new FileReader();

    // eslint-disable-next-line func-names
    reader.onload = function () {
      const encodedData = btoa(reader.result); // Закодировать в Base64
      setValues((prev) => {
        if (!index) {
          return ([
            { name: file.name, base64: encodedData }
          ])
        } else {
          return [
            ...prev,
            { name: file.name, base64: encodedData },
          ]
        }
      });
    };

    reader.readAsBinaryString(file);
  }

  const handleChange = (file) => {
    setFiles(Array.from(file));
    Array.from(file).map((item) => encodeFile(item));
    setHasChanged(true);
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => {
      const find = prev.find((item, i) => i === index);
      if (find) return prev.filter((item, i) => i !== index);
      return prev.concat(index);
    });
  }

  React.useEffect(() => {
    if (hasChanged && files) {
      files.map((item, index) => encodeFile(item, index));
    }
  }, [files, hasChanged]);

  React.useEffect(() => {
    if (onChange && hasChanged && values !== defaultValues) {
      onChange(values);
    }
  }, [onChange, values, hasChanged, defaultValues]);

  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name='file'
        // types={fileTypes}
        multiple
        hoverTitle=' '
        classes='drop_area'
        children={<FileDropArea />}
      />
      < Grid
        container
        gap={2}
        marginTop={3}
        marginBottom={3}
      >
        {
          files ? files.map((file, index) => (
            <FilePreview
              key={`${file.name}${file.lastModified}`}
              file={file}
              index={index}
              onRemove={handleRemoveFile}
            />
          )) : null}
      </Grid >
    </>
  );
}

export default CustomFileLoader;