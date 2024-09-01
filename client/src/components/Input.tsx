import React, { ChangeEventHandler } from "react";

export default function Input({
  textValue,
  setNumber,
  type,
}: {
  textValue: string;
  setNumber: ChangeEventHandler<HTMLInputElement>;
  type: string;
}) {
  return <input type="number" onChange={setNumber} placeholder="First"></input>;
}
