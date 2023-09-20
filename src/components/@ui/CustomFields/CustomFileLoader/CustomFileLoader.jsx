import React, { useState } from "react";
import { Badge, Grid, IconButton, Typography } from "@mui/material";
import { Box, darken } from "@mui/system";
import { FileUploader } from "react-drag-drop-files";
import { CloseIcon, DOCIcon, FileIcon, PDFIcon, XLSIcon } from "../../../../assets/icons";
import CustomAlertDialog from "../../CustomAlertDialog/CustomAlertDialog";

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
  // if (file.type.startsWith('image/')) {
  //   return
  // } else if (file.type.startsWith('audio/')) {
  //   return <audio controls src={URL.createObjectURL(file)} />;
  // } else if (file.type.startsWith('video/')) {
  //   return <video controls src={URL.createObjectURL(file)} />;
  // }
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
  const [files, setFiles] = useState([]);

  async function encodeFilesToBase64(fileList) {
    const promises = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const promise = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result.split(',')[1]; // отсекаем data:application/...;base64,
          resolve({
            name: file.name,
            type: file.type,
            size: file.size,
            base64: base64String
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      promises.push(promise);
    }
    
    return Promise.all(promises);
  }
  

  const handleChange = async (file) => {
    setFiles(Array.from(file));
    const encodedFiles = await encodeFilesToBase64(file);
    console.log({ encodedFiles });
    onChange(encodedFiles);
  };

  const handleRemoveFile = async (index) => {
    let newFiles = files;
    newFiles.splice(index, 1);

    setFiles(newFiles);
    const encodedFiles = await encodeFilesToBase64(newFiles);
    console.log({ encodedFiles });
    onChange(encodedFiles);
  }

  const [alertOpen, setAlertOpen] = React.useState(true);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  }

  return (
    <>
      <CustomAlertDialog
        open={alertOpen}
        onClose={handleCloseAlert}
        title='Вы пытаетесь загрузить файлы более 20 мб'
        description='Попробуйте уменьшить размер файлов путем сжатия или оптимизации. Информация не точная, а может даже не актуальная.'
      />
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
        marginTop={files && files.length ? 3 : 0}
        marginBottom={files && files.length ? 1 : 0}
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