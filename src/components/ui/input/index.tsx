import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import * as Styled from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: InputProps) {
  return <Styled.Input {...rest} />;
}

export function TextArea({ ...rest }: TextAreaProps) {
  return <Styled.TextArea {...rest}></Styled.TextArea>;
}
