import { useResizer } from 'components/Trim/Behaviour/hooks/useResizer';
import { useOverflow } from 'components/Trim/Behaviour/hooks/useOverflow';

export const Behaviour: any = () => {
  useResizer()
  useOverflow()

  return ''
}
