import React from 'react';
import PropTypes from 'prop-types';

import { FIELD_TYPES } from '../../../consts';
import CustomTextField from '../../../components/@ui/CustomTextField';
import useApp from '../hooks/useApp';

const {
  text,
  textarea,
  radio,
  radioGroup,
  phone,
  email,
  date,
} = FIELD_TYPES;

const DisplayField = ({
  field,
  onChange,
}) => {
  const {
    title,
    code,
    type,
    col,
    required,
  } = field;

  switch (type) {
    case text:
      return <CustomTextField
        label={field.title}
        value={field.value}
        onChange={onChange}
      />

    default:
      return <CustomTextField
        label={field.title}
        value={field.value}
        onChange={onChange}
      />
  }
}

const FormCandidateField = ({
  field,
  fieldCode,
  sectionCode,
}) => {
  const {
    handleFieldChange,
  } = useApp();

  const handleDisplayFieldChange = (value) => {
    handleFieldChange(sectionCode, fieldCode, value)
  }

  return (
    <DisplayField
      field={field}
      onChange={handleDisplayFieldChange}
    />
  );
};

FormCandidateField.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(FIELD_TYPES)).isRequired,
    col: PropTypes.number,
    required: PropTypes.bool,
  }),
};
DisplayField.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(FIELD_TYPES)).isRequired,
    col: PropTypes.number,
    required: PropTypes.bool,
  }),
};

export default FormCandidateField;