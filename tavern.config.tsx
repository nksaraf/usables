import React from "react";
import { Package, EntryPoint } from "tavern";

export default function App() {
  return (
    <Package name="usables" version="0.0.7">
      <EntryPoint name="useAuth" />
      <EntryPoint name="useReducerWithEffects" />
      <EntryPoint name="useValueRef" />
    </Package>
  );
}
