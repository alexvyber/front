import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
