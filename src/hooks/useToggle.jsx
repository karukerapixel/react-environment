import { useState } from 'react';

export const useToggle = (initValue = Boolean) => {
  const [state, setState] = useState(initValue);
  const toggle = () => setState(!state);

  return [state, toggle];
};
