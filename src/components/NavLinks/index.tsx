import Link from "next/link";
import { NewLabel } from "./style";
import { Links } from "~/components/Links";

interface Props {
  activeRoute: string;
  setExpanded: any;
}

export function NavLinks({ activeRoute, setExpanded }: Props) {
  return (
    <>
      {Links.map((link) => {
        return (
          <NewLabel
            key={link.activeRoute}
            isActive={activeRoute == link.activeRoute}
          >
            <Link href={link.href}>
              <a onClick={() => setExpanded(false)}>{link.title}</a>
            </Link>
          </NewLabel>
        );
      })}
    </>
  );
}
