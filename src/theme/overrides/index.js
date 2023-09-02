//
import Alert from './Alert';
import Container from './Container';
import Paper from './Paper';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Alert(theme),
    Container(theme),
    Paper(theme),
  );
}
