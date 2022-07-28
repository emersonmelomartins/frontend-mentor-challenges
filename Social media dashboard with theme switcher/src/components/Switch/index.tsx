import { ChangeEventHandler } from "react";
import { SwitchContainer } from "./styles";

interface ISwitchProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Switch({ onChange }: ISwitchProps) {
  return (
    <SwitchContainer htmlFor="switch">
      <input id="switch" name="switch" type="checkbox" onChange={onChange} aria-label="Toggle theme" />
      <span className="slider round"></span>
    </SwitchContainer>
  );
}
