import { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";

import DatePicker from "./containers/DatePicker/DatePicker";
import FormCandidate from './containers/FormCandidate';
import AppLoading from './containers/AppLoading/AppLoading';
import ThemeProvider from './theme';

registerLocale("ru", ru);

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				{/* <DatePicker /> */}
				<FormCandidate />
				<AppLoading />
			</div>
		</ThemeProvider>
	);
}

export default App;
