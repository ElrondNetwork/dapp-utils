import * as React from 'react';
import { useContext } from 'components/Trim/context';
import { useText } from 'components/Trim/hooks/useText';

export const Layout = ({children}: any) => {
  const {hiddenTextRef, trimRef, overflow, props} = useContext()

  return <span ref={trimRef} className={`trim ${overflow ? 'overflow' : ''}`} data-testid={props.dataTestId}>
    <span ref={hiddenTextRef} className="hidden-text-ref">{useText()}</span>
    {children}
  </span>;
}
