import React from "react";

export function useValueRef(value: any) {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}
