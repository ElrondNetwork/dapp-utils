import * as React from 'react';
import { useText } from 'components/Trim/hooks/useText';
import { useClassName } from 'components/Trim/hooks/useClassName';

export const Left = () => <span className="left">
  <span className={`${useClassName()?.left} ${useClassName()?.all}`}>
    {String(useText()).substring(0, Math.floor(useText().length / 2))}
  </span>
</span>
