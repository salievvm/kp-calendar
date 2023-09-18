import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';

import { fromDateToStr, fromStrToDate, useWindowSize } from './hooks';
import KPDatePicker from "../../../KPDatePicker";
import CustomTextField from '../CustomTextField';

const CustomDate = ({
	label,
	value,
	onChange,
	theme,
	required,
}) => {
	const size = useWindowSize();

	// const [dateIn, setDateIn] = useState(fromDateToStr(value))
	const [dateIn, setDateIn] = useState(value); // format 28.08.2023
	const [rangeDatePickerOpen, setRangeDatePickerOpen] = useState(false);

	const toggleRangeDatePicker = () => setRangeDatePickerOpen(!rangeDatePickerOpen);
	const closeDateRangePicker = () => setRangeDatePickerOpen(false);

	const setDatesRange = (date) => {
		setDateIn(fromDateToStr(date));
		onChange(fromDateToStr(date));
		closeDateRangePicker();
	}

	const rangeMounthNumber = size.width < 768 ? 1 : 2;

	return (
		<>
			<CustomTextField
				required={required}
				label={label}
				theme={theme}
				onClick={toggleRangeDatePicker}
				value={dateIn}
				autoComplete={false}
			/>
			{rangeDatePickerOpen && <KPDatePicker
				setDates={setDatesRange}
				startDate={fromStrToDate(dateIn)}
				close={closeDateRangePicker}
				monthsShown={rangeMounthNumber}
				range={false}
			/>}
		</>
	);
};

export default CustomDate;

CustomDate.propTypes = {
	label: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
	theme: PropTypes.oneOf(['base', 'filled']).isRequired,
	required: PropTypes.bool,
};

CustomDate.defaultProps = {
	label: '',
	value: '',
	required: false,
	onChange: () => { },
};