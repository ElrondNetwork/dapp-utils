import * as React from 'react';
import { useClassName } from 'components/Trim/hooks/useClassName';

export const Ellipsis = () => <span className={`ellipsis ${useClassName()?.ellipsis} ${useClassName()?.all}`}>
  ...
</span>
