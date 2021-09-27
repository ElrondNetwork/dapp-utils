import * as React from 'react';
import { Left } from 'components/Trim/Trimmed/Left';
import { Right } from 'components/Trim/Trimmed/Right';
import { Ellipsis } from 'components/Trim/Trimmed/Ellipsis';

export const Trimmed = () => <React.Fragment>
  <Left/>
  <Ellipsis/>
  <Right/>
</React.Fragment>
