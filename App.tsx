import Login from './src/views/login';
import { ThemeProvider } from 'styled-components';
import { THEME } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Login />
    </ThemeProvider>
  );
}

