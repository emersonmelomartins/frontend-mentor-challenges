import { ChangeEvent } from "react";
import { Switch } from "../Switch";
import { HeaderContainer, HeaderContent } from "./styles";

interface IHeaderProps {
  onToggleTheme(theme: string): void;
}

export function Header({ onToggleTheme }: IHeaderProps) {
  function handleChangeTheme(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    onToggleTheme(checked ? "light" : "dark");
  }

  return (
    <HeaderContainer>
      <HeaderContent>
      <div>
        <h1>Social Media Dashboard</h1>
        <strong>Total followers: 23,004</strong>
      </div>

      <Switch onChange={(event) => handleChangeTheme(event)} />

      </HeaderContent>
    </HeaderContainer>
  );
}
