import { cn } from "../utils";
import { IoMdClose } from "react-icons/io";

function Menu({ children, openMenu, closeMenu }) {
  return (
    <div className={cn(`menu -top-full bg-white md:bg-transparent `, openMenu && `top-0`)}>
      <button className="absolute top-5 right-5 p-1 md:hidden" onClick={closeMenu}>
        <IoMdClose className="size-6"/>
      </button>
      {children}
    </div>
  );
}

export default Menu;