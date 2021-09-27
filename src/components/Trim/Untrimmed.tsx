import React from 'react'
import { useContext } from 'components/Trim/context';
import { useClassName } from 'components/Trim/hooks/useClassName';

export const Untrimmed = () => <span className={useClassName()?.all}>
  {useContext().props.text}
</span>
