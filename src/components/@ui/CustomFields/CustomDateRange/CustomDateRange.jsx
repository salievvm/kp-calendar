import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';

import KPDatePicker from "../../../KPDatePicker";
import CustomTextField from '../CustomTextField';
import { useWindowSize, fromDateToStr, fromStrToDate } from '../CustomDate/hooks';
import { CalendarIcon } from '../../../../assets/icons';

const CustomDateRange = ({
	label,
  value,
  onChange,
  theme,
  required,
}) => {
  const size = useWindowSize()
	const [dateIn, setDateIn] = useState(value[0] || ''); // fromDateToStr(new Date())
	const [dateOut, setDateOut] = useState(value[1] || ''); //fromDateToStr(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1))
	const [rangeDatePickerOpen, setRangeDatePickerOpen] = useState(false);

	const toggleRangeDatePicker = () => setRangeDatePickerOpen(!rangeDatePickerOpen);
	const closeDateRangePicker = () => setRangeDatePickerOpen(false);

	const setDatesRange = (start, end) => {
		if (dateIn && dateOut) {
			setDateOut(undefined);
		}
		setDateIn(fromDateToStr(start));
		if (end) {
			setDateOut(fromDateToStr(end));
			onChange([fromDateToStr(start), fromDateToStr(end)])
			closeDateRangePicker();
		}
	}

	const rangeMounthNumber = size.width < 768 ? 1 : 2;

	return (
		<>
      <CustomTextField
        required={required}
        label={label}
        theme={theme}
        onClick={toggleRangeDatePicker}
        value={dateIn && dateOut ? `${dateIn} - ${dateOut}` : ''}
				autoComplete={false}
				icon={<CalendarIcon />}
      />
			{rangeDatePickerOpen && <KPDatePicker
				setDates={setDatesRange}
				startDate={fromStrToDate(dateIn)}
				endDate={fromStrToDate(dateOut)}
				close={closeDateRangePicker}
				monthsShown={rangeMounthNumber}
			/>}
		</>
	);
};

export default CustomDateRange;

CustomDateRange.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['base', 'filled']).isRequired,
  required: PropTypes.bool,
};

CustomDateRange.defaultProps = {
  label: '',
  value: [],
  required: false,
  onChange: () => { },
};
