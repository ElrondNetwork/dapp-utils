import * as React from 'react';
import { useText } from 'components/Trim/hooks/useText';
import { useClassName } from 'components/Trim/hooks/useClassName';

export const Right = () => <span className="right">
  <span className={`${useClassName()?.right} ${useClassName()?.all}`}>
    {String(useText()).substring(Math.ceil(useText().length / 2))}
  </span>
</span>
