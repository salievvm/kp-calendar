import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import useApp from './hooks/useApp';
import CustomTypography from '../../components/@ui/CustomTypography';
import CustomCard from '../../components/@ui/CustomCard';
import { CustomAlertInfo } from '../../components/@ui/CustomAlert';

import CustomPageHeader from '../../components/@ui/CustomPageHeader/CustomPageHeader';
import FormCandidateSectionList from './FormCandidateSectionList';
import { CustomRadioGroup } from '../../components/@ui/CustomFields';

const FormCandidate = () => {
  const {
    schema,
    title,
    subtitle,
    alertTitle,
    alertSubtitle,
    handleMakeLoading,
  } = useApp();

  return (
    <Grid container direction="column">
      <CustomPageHeader
        title={title}
        subtitle={subtitle}
      />
      <CustomCard>
        <CustomRadioGroup
          options={[
            { id: 'A', label: 'A' },
            { id: 'B', label: 'B' },
            { id: 'C', label: 'C' },
            { id: 'D', label: 'D' },
            { id: 'E', label: 'E' },
          ]}
        />
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
        <Button
          onClick={handleMakeLoading}
        >Сделать загрузку</Button>
      </CustomCard>

    </Grid>
  )
};

export default FormCandidate;