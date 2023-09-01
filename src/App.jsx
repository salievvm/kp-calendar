import { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";

import DatePicker from "./containers/DatePicker/DatePicker";

registerLocale("ru", ru);

function App() {
	return (
		<div className="App">
			<DatePicker />
		</div>
	);
}

export default App;
