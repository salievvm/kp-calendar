import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';

import { SECTION_TYPES } from '../../../consts';

import FormCandidateField from '../FormCandidateField';
import SectionProvider from './SectionProvider';
import { InfoIcon } from '../../../assets/icons';
import { CustomInformer } from '../../../components/@ui/CustomTypography';

const FormCandidateSection = ({
  sectionType,
  sectionCode,
  schema,
}) => {
  const {
    section,
    info,
    subtitle,
    items,
  } = schema[sectionCode];
  return (
    <React.Fragment>
      {section ? (
        <Grid item xs={12}>
          <Typography variant="h2">{section}</Typography>
        </Grid>
      ) : null}
      {info ? (
        <Grid item xs={12}>
          <CustomInformer>{info}</CustomInformer>
        </Grid>
      ) : null}
      <SectionProvider theme={sectionType}>
        <Grid container spacing={2}>
          {subtitle ? (
            <Grid item xs={12}>
              <Typography variant="h3">{subtitle}</Typography>
            </Grid>
          ) : null}
          {Object.keys(items).map((fieldCode) => {
            const field = items[fieldCode];
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
