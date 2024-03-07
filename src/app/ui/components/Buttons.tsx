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
  const btnClass = toggledCollapse
    ? "w-14 button transition-500"
    : "w-52 button transition-500";

  const btnTextClass = `btn-text animate-scale transition-500
       ${toggledCollapse ? "text-xl" : null}`;


  const key = toggledCollapse ? "collapsed" : "expanded";

  return (
    <Link href={link} className={btnClass} key={key}>
      <p className={btnTextClass}>
        {toggledCollapse ? icon && icon({}) : children}
      </p>
    </Link>
  );
};

export default NavButton;
