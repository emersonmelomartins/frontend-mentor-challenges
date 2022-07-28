import { ReactNode } from "react";
import { Header } from "../../components/Header";

interface IPublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: IPublicLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
