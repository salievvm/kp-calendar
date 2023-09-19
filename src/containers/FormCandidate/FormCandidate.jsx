import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import useApp from './hooks/useApp';
import CustomTypography from '../../components/@ui/CustomTypography';
import CustomCard from '../../components/@ui/CustomCard';
import { CustomAlertInfo } from '../../components/@ui/CustomAlert';

import CustomPageHeader from '../../components/@ui/CustomPageHeader/CustomPageHeader';
import FormCandidateSectionList from './FormCandidateSectionList';
import { CustomFileLoader, CustomRadioGroup } from '../../components/@ui/CustomFields';

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
      <CustomCard margin={'24px 0 24px 0'}>
        <CustomTypography />
      </CustomCard>

    </Grid>
  )
};

export default FormCandidate;