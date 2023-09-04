import React from 'react';

import CustomTextField from '../../../components/@ui/CustomTextField';
import useApp from '../hooks/useApp';

const FormCandidateField = ({
  field,
  fieldCode,
  sectionCode,
}) => {
  const {
    handleFieldChange,
  } = useApp();

  return (
    <CustomTextField
      key={fieldCode}
      label={field.title}
      value={field.value}
      onChange={(value) => handleFieldChange(sectionCode, fieldCode, value)}
    />
  );
};

export default FormCandidateField;