import React from 'react'
import useDebounce from 'helpers/useDebounce';
import { Properties } from 'components/Trim/properties';

export const Context = React.createContext({})

export const useContext: any = () => React.useContext(Context)

export const useValue = (props: Properties) => {
  const [debounce, setDebounce] = React.useState(0);
  const [overflow, setOverflow] = React.useState(false);
  const trimRef = React.useRef(document.createElement("span"));
  const hiddenTextRef = React.useRef(document.createElement("span"));
  const debounceTracker = useDebounce(debounce, 100);

  return { props, debounce, setDebounce, overflow, setOverflow, trimRef, hiddenTextRef, debounceTracker }
}
