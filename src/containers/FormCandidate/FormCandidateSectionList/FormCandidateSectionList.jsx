import React from 'react';

import { Button, Grid } from '@mui/material';

import FormCandidateSection from '../FormCandidateSection';
import useApp from '../hooks/useApp';


const FormCandidateSectionList = ({
  schema,
}) => {
  const {
    handleSendForm,
  } = useApp();

  return (
    <Grid container direction="column" gap={2}>
      {schema ? Object.keys(schema).map((key) => {
        return (
          <FormCandidateSection
            key={key}
            sectionCode={key}
            schema={schema}
          />
        )
      }) : null}
      <Button
        variant="contained"
        onClick={handleSendForm}
      >Отправить анкету</Button>
    </Grid>
  );
};

export default FormCandidateSectionList;