import React from 'react';
import { Grid } from '@mui/material';

import FormCandidateSectionList from './FormCandidateSectionList';
import CustomTypography from '../../components/@ui/CustomTypography';
import CustomCard from '../../components/@ui/CustomCard';
import { CustomAlertInfo } from '../../components/@ui/CustomAlert';

import CustomPageHeader from '../../components/@ui/CustomPageHeader/CustomPageHeader';

import useApp from './hooks/useApp';
import AppError from '../AppError';

const FormCandidate = () => {
  const {
    schema,
    title,
    subtitle,
    alertTitle,
    alertSubtitle,
  } = useApp();

  return (
    <Grid container direction="column">
      <CustomPageHeader
        title={title}
        subtitle={subtitle}
      />
      <CustomCard>
        <CustomAlertInfo
          title={alertTitle}
          subtitle={alertSubtitle}
        />
        <FormCandidateSectionList
          schema={schema}
        />
      </CustomCard>
      <AppError />
      <CustomCard margin={'24px 0 24px 0'}>
        <CustomTypography />
      </CustomCard>
    </Grid>
  )
};

export default FormCandidate;