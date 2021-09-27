import { useCallback } from 'react';
import { useContext } from 'components/Trim/context';

export const useListener = () => {
  const {setDebounce, debounce} = useContext()

  return useCallback(() => {
    setDebounce(debounce + 1);
  }, [debounce, setDebounce]);
}
