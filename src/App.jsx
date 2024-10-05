import { Route, Routes } from 'react-router-dom';
import { StyledProvider } from './contexts/StyledContext';
import { ThemeProvider } from './contexts/ThemeContext';

// import components
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <StyledProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </StyledProvider>
  );
}

export default App;
