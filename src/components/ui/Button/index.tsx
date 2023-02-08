import { ReactNode, ButtonHTMLAttributes } from "react";
import * as Styled from "./style";

import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <Styled.Button disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#FFF" size={16} />
      ) : (
        <Styled.ButtonText>{children}</Styled.ButtonText>
      )}
    </Styled.Button>
  );
}
