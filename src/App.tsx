import { ThemeProvider } from 'styled-components';
import { dark } from './styles/theme/dark';
import { GlobalStyle } from './styles/globalStyles';
import { Header } from './components/Header';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
