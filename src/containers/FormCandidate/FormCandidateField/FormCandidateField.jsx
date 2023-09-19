import React from 'react';
import PropTypes from 'prop-types';

import { FIELD_TYPES, TEXT_FIELD_THEMES } from '../../../consts';
import {
  CustomTextField,
  CustomSwitch,
  CustomPhone,
  CustomDateRange,
  CustomDate,
  CustomRadioGroup,
} from '../../../components/@ui/CustomFields';

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
  dateMulti,
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
    options,
  } = field;

  const fieldTheme = React.useContext(SectionThemeContext);
  const textFieldTheme = TEXT_FIELD_THEMES[fieldTheme];

  switch (type) {
    case radio:
      return <CustomSwitch
        required={required}
        label={title}
        value={value}
        onChange={onChange}
      />
    case phone:
      return <CustomPhone
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
      />
    case date:
      return <CustomDate
        required
        label={title}
        theme={textFieldTheme}
        onChange={onChange}
        value={value}
      />
    case dateMulti:
      return <CustomDateRange
        required
        label={title}
        theme={textFieldTheme}
        onChange={onChange}
        value={value}
      />
    case radioGroup:
      return <CustomRadioGroup
        options={options}
        value={value}
        onChange={onChange}
      />

    default:
      return <CustomTextField
        required={required}
        label={title}
        value={value}
        onChange={onChange}
        theme={textFieldTheme}
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