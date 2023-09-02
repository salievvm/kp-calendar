import React from 'react';

import { Button, Typography } from '@mui/material';
import useApp from './hooks/useApp';

const FormCandidate = () => {
  const {
    handleMakeLoading,
  } = useApp();

  return (
    <>
      <Typography>Анкета кандидата</Typography>
      <Typography>Заполните, пожалуйста, анкету, отвечая на все вопросы полно и не оставляя пустых строчек</Typography>
      <Button
        onClick={handleMakeLoading}
      >
        Сделать загрузку
      </Button>
    </>
  )
};

export default FormCandidate;