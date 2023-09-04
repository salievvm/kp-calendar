import React from 'react';
import PropTypes from 'prop-types';

import { SECTION_TYPES } from '../../../consts';
import CustomCard from '../../../components/@ui/CustomCard/CustomCard';

const {
  base,
  filled,
} = SECTION_TYPES;

export const SectionThemeContext = React.createContext(base);

const SectionProvider = ({
  type,
  children,
}) => {

  return (
    <SectionThemeContext.Provider value={type}>
      {type === filled ? (
        <CustomCard padding={24} variant={type}>
          {children}
        </CustomCard>
      ) : children}
    </SectionThemeContext.Provider>
  );
};

SectionProvider.propTypes = {
  type: PropTypes.oneOf(Object.keys(SECTION_TYPES)).isRequired,
  children: PropTypes.any.isRequired,
};

export default SectionProvider;