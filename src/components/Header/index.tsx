import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  MobileContainer,
  InnerGrid,
  CloseButton,
  Background,
} from "./style";

import { NavLinks } from "~/components/NavLinks";
import { Links } from "../Links";
import { Hamburger } from "./Hamburger";

export function Header() {
  console.count("counter");

  const [isExpanded, setExpanded] = useState(false);
  const router = useRouter();

  let activeRoute: string = "";
  let activePath: string = "";

  Links.map((link) => {
    if (router.pathname == link.activePath) {
      activeRoute = link.activeRoute;
      activePath = link.activePath;
    }
  });

  const menuExpanded = () => {
    return (
      <>
        <CloseButton
          className="p-3 text-primary"
          onClick={() => setExpanded(false)}
          visible={isExpanded}
        >
          ×
        </CloseButton>
        <NavLinks activeRoute={activeRoute} setExpanded={setExpanded} />
      </>
    );
  };

  const menuClosed = () => {
    return (
      <>
        <Hamburger func={setExpanded} />
        <Link href={activePath}>
          <a>
            <span className="text-primary">{activeRoute}</span>
          </a>
        </Link>
      </>
    );
  };

  return (
    <>
      <MobileContainer expanded={isExpanded}>
        <Background
          className="bg-white bg-opacity-60 dark:bg-gray-900"
          key="1"
        />
        {isExpanded ? menuExpanded() : menuClosed()}
      </MobileContainer>
      <Container>
        <InnerGrid>
          <NavLinks activeRoute={activeRoute} setExpanded={setExpanded} />
        </InnerGrid>
        <Background
          className="bg-white bg-opacity-60 dark:bg-gray-900"
          key="2"
        />
      </Container>
    </>
  );
}
