import { ChangeEventHandler } from "react";
import { SwitchContainer } from "./styles";

interface ISwitchProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Switch({ onChange }: ISwitchProps) {
  return (
    <SwitchContainer>
      <input type="checkbox" onChange={onChange} />
      <span className="slider round"></span>
    </SwitchContainer>
  );
}
