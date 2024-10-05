import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useLocalStorage } from './useLocalStorage';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themeValue, setThemeValue] = useLocalStorage('theme');

  useEffect(() => {
    setTheme(!themeValue ? 'light' : themeValue);
  }, [setTheme, themeValue]);

  const toggleTheme = () => {
    setThemeValue((t) => (t === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
