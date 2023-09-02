import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import useApp from './hooks/useApp';
import CustomTypography from '../../components/@ui/CustomTypography';
import CustomCard from '../../components/@ui/CustomCard';

const FormCandidate = () => {
  const {
    handleMakeLoading,
  } = useApp();

  return (
    <Grid container direction="column">
      <Grid
        container
        direction="column"
        gap={2}
        alignItems="center"
        textAlign="center"
        margin="48px 0 48px 0"
      >
        <Typography variant="h1">Анкета кандидата</Typography>
        <Typography maxWidth="497px" variant="subtitle1">Заполните, пожалуйста, анкету, отвечая на все вопросы полно и не оставляя пустых строчек</Typography>
      </Grid>
      <CustomCard>
        <Typography variant="h3">Ваши персональные данные надежно защищены!</Typography>
        <Typography variant="body1">В первую очередь благодаря безопасному протоколу HTTPS, который работает абсолютно на всех сервисах НАО «Красная поляна»</Typography>
      </CustomCard>

      <Grid
        container
        direction="column"
        gap={2}
        alignItems="center"
      >
        <CustomTypography />
        <Button
          onClick={handleMakeLoading}
        >Сделать загрузку</Button>
      </Grid>
    </Grid>
  )
};

export default FormCandidate;