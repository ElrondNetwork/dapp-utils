import { Trimmed } from 'components/Trim/Trimmed';
import { useContext } from 'components/Trim/context';
import { Untrimmed } from 'components/Trim/Untrimmed';

export const useComponent = () => {
  const {overflow} = useContext()

  return overflow ? Trimmed : Untrimmed
}
