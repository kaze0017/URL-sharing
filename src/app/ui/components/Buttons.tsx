import { link } from "fs";
import Link from "next/link";

interface NavButtonProps {
  link: string;
  children: React.ReactNode;
}

// btn class
const btnClass = "button";

const NavButton: React.FC<NavButtonProps> = ({ children, ...props }) => {
  return (
    <Link href={props.link} className={btnClass}>
      {children}
    </Link>
  );
};

export default NavButton;
