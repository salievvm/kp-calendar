import React from 'react';

import { Button, Grid } from '@mui/material';

import FormCandidateSection from '../FormCandidateSection';
import useApp from '../hooks/useApp';
import { SECTION_TYPES } from '../../../consts';


const FormCandidateSectionList = ({
  schema,
}) => {
  const {
    handleSendForm,
  } = useApp();

  return (
    <Grid container direction="column" gap={2}>
      {schema ? Object.keys(schema).map((key) => {
        const sectionType = schema[key].type || SECTION_TYPES.base;
        return (
          <FormCandidateSection
            key={key}
            sectionType={sectionType}
            sectionCode={key}
            schema={schema}
          />
        )
      }) : null}
      <Button
        size='large'
        variant="contained"
        onClick={handleSendForm}
      >Отправить анкету</Button>
    </Grid>
  );
};

export default FormCandidateSectionList;