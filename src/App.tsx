import { ThemeProvider } from 'styled-components';
import { dark } from './styles/theme/dark';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
