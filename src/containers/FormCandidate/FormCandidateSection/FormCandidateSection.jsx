import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';

import { SECTION_TYPES } from '../../../consts';

import FormCandidateField from '../FormCandidateField';
import SectionProvider from './SectionProvider';

const FormCandidateSection = ({
  sectionType,
  sectionCode,
  schema,
}) => {
  return (
    <React.Fragment>
      <Typography variant="h2">{schema[sectionCode].section}</Typography>
      <SectionProvider theme={sectionType}>
        <Grid container spacing={2}>
          {Object.keys(schema[sectionCode].items).map((fieldCode) => {
            const field = schema[sectionCode].items[fieldCode];
            return (
              <Grid item xs={field.col} key={fieldCode}>
                <FormCandidateField
                  field={field}
                  fieldCode={fieldCode}
                  sectionCode={sectionCode}
                />
              </Grid>
            )
          })}
        </Grid>
      </SectionProvider>
    </React.Fragment>
  );
};

export default FormCandidateSection;

const sectionTypes = Object.keys(SECTION_TYPES);

FormCandidateSection.propTypes = {
  sectionType: PropTypes.oneOf(sectionTypes).isRequired,
  sectionCode: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
};
