//
import Alert from './Alert';
import Container from './Container';
import Paper from './Paper';
import TextField from './TextField';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Alert(theme),
    Container(theme),
    Paper(theme),
    TextField(theme),
  );
};
