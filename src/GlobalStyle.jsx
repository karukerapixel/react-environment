import { createGlobalStyle } from 'styled-components';
import { useTheme } from './hooks/useTheme';

const GlobalStyleComponent = createGlobalStyle`
  body {
    background-color: white;
  }
    
  * {
    font-size; 16px;
    font-family: sans-serif;
    list-style-type: none;
    text-decoration: none;
    color: black;
    object-fit: cover;
    padding: 0;
    margin:0;
  }
  
  #root, main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GlobalStyle = () => {
  const { theme } = useTheme();
  return <GlobalStyleComponent mode={theme} />;
};
