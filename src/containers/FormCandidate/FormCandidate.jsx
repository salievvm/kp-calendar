import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import useApp from './hooks/useApp';
import CustomTypography from '../../components/@ui/CustomTypography';

const FormCandidate = () => {
  const {
    handleMakeLoading,
  } = useApp();

  return (
    <Grid
      container
      direction="column"
      gap={1}
    >
      <Typography variant="h1">Анкета кандидата</Typography>
      <Typography variant="subtitle1">Заполните, пожалуйста, анкету, отвечая на все вопросы полно и не оставляя пустых строчек</Typography>
      <Button
        onClick={handleMakeLoading}
      >
        Сделать загрузку
      </Button>
      <CustomTypography />
    </Grid>
  )
};

export default FormCandidate;