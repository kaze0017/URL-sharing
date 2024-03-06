import { link } from "fs";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavButtonProps {
  link: string;
  toggledCollapse: boolean | true;
  children: React.ReactNode;
  icon?: IconType;
}

const NavButton: React.FC<NavButtonProps> = ({
  children,
  icon,
  link,
  toggledCollapse,
}) => {
  // btn class
  const btnClass = toggledCollapse ? "w-14 button " : "w-52 button ";
  const btnTextClass = toggledCollapse
    ? "w-14 transition-500 delay-1000"
    : "w-52 transition-500 delay-1000";
  const key = toggledCollapse ? "collapsed" : "expanded";

  return (
    <Link href={link} className={btnClass} key={key}>
      <p className="animate-scale">
        {toggledCollapse ? icon && icon({}) : children}
      </p>
    </Link>
  );
};

export default NavButton;
