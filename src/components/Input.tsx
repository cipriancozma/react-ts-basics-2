import { InputProps } from "../types";

export default function Input({ id, type, label }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </p>
  );
}
