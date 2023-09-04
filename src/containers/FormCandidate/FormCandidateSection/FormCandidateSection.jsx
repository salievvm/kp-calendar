import React from 'react';

import { Typography } from '@mui/material';
import FormCandidateField from '../FormCandidateField';

const FormCandidateSection = ({
  sectionCode,
  schema,
}) => {
  return (
    <React.Fragment>
      <Typography variant="h2">{schema[sectionCode].section}</Typography>
      {Object.keys(schema[sectionCode].items).map((fieldCode) => {
        const field = schema[sectionCode].items[fieldCode];
        return (
          <FormCandidateField
            field={field}
            key={fieldCode}
            fieldCode={fieldCode}
            sectionCode={sectionCode}
          />
        )
      })}
    </React.Fragment>
  );
};

export default FormCandidateSection;