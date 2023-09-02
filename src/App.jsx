import { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";

import DatePicker from "./containers/DatePicker/DatePicker";
import FormCandidate from './containers/FormCandidate';
import AppLoading from './containers/AppLoading/AppLoading';

registerLocale("ru", ru);

function App() {
	return (
		<div className="App">
			<DatePicker />
			<FormCandidate />
			<AppLoading />
		</div>
	);
}

export default App;
