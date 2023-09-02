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
      <Typography>Анкета кандидата</Typography>
      <Typography>Заполните, пожалуйста, анкету, отвечая на все вопросы полно и не оставляя пустых строчек</Typography>
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