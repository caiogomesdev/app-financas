import Cadastro from './src/views/cadastro';
import { ThemeProvider } from 'styled-components';
import { THEME } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Cadastro />
    </ThemeProvider>
  );
}

