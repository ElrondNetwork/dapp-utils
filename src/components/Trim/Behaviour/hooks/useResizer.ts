import { useEffect } from 'react';
import { useListener } from 'components/Trim/Behaviour/hooks/useListener';

export const useResizer = () => {
  const listener = useListener()

  useEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [listener])
}
