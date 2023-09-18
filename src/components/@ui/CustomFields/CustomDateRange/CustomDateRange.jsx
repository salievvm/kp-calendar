import React from 'react';
import { useState } from "react";

import { useWindowSize } from './hooks';
import KPDatePicker from "../../../KPDatePicker";
import CustomTextField from '../CustomTextField';

// helpers
const addZeroToDate = (str) => {
	if (`${str}`.length === 1) return `0${str}`
	return str
}
const fromStrToDate = (str) => {
	if (!str) return str
	const dateStr = str.split('.')
	return new Date(dateStr[2], dateStr[1] - 1, dateStr[0])
}
const fromDateToStr = (date) => {
	return `${addZeroToDate(date.getDate())}.${addZeroToDate(date.getMonth() + 1)}.${date.getFullYear()}`
}

const CustomDateRange = () => {
  const size = useWindowSize()
	const [dateIn, setDateIn] = useState(fromDateToStr(new Date()))
	const [dateOut, setDateOut] = useState(fromDateToStr(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)))
	const [rangeDatePickerOpen, setRangeDatePickerOpen] = useState(false)

	const toggleRangeDatePicker = () => setRangeDatePickerOpen(!rangeDatePickerOpen)
	const closeDateRangePicker = () => setRangeDatePickerOpen(false)

	const setDatesRange = (start, end) => {
		if (dateIn && dateOut) {
			setDateOut(undefined)
		}
		setDateIn(fromDateToStr(start))
		if (end) {
			setDateOut(fromDateToStr(end))
			closeDateRangePicker()
		}
	}

	const rangeMounthNumber = size.width < 768 ? 1 : 2;

	return (
		<>
      <CustomTextField
        required
        label="Дата выдачи"
        theme="base"
        onClick={toggleRangeDatePicker}
        value={`${dateIn} - ${dateOut}`}
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