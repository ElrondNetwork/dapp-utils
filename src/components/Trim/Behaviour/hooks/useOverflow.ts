import { useEffect } from 'react';
import { useContext } from 'components/Trim/context';

export const useOverflow = () => {
  const {trimRef, hiddenTextRef, setOverflow, debounceTracker} = useContext()

  useEffect(() => {
    if (trimRef.current && hiddenTextRef.current) {
      const diff = hiddenTextRef.current.offsetWidth - trimRef.current.offsetWidth;

      setOverflow(diff > 1);
    }
  }, [debounceTracker]);
}
