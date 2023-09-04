import React from 'react';
import PropTypes from 'prop-types';

import { FIELD_TYPES, TEXT_FIELD_VARIANTS } from '../../../consts';
import CustomTextField from '../../../components/@ui/CustomTextField';
import CustomSwitch from '../../../components/@ui/CustomSwitch';

import useApp from '../hooks/useApp';

import { SectionThemeContext } from '../FormCandidateSection/SectionProvider';

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
    value,
    title,
    code,
    type,
    col,
    required,
  } = field;

  const fieldTheme = React.useContext(SectionThemeContext);
  const textFieldVariant = TEXT_FIELD_VARIANTS[fieldTheme];

  switch (type) {
    case radio:
      return <CustomSwitch
        required={required}
        label={title}
        value={value}
        onChange={onChange}
      />

    default:
      return <CustomTextField
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        variant={textFieldVariant}
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