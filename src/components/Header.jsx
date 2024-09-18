import { NavLink } from "react-router-dom";
import Button from "./common/Button";

const Header = () => {
  return (
    <div className="sticky top-0 bg-whiteClr z-50">
      <nav className="p-5 mx-auto flex justify-between items-center  md:w-full lg:w-[80%] ">
        <div>
          <h3>
            <img src="/assets/imgs/pizza.png" alt="" />
          </h3>
        </div>

        <div>
          <ul className=" list-none flex gap-[50px]  ">
            <li>
              <NavLink className="hover:text-primaryClr ">Restaurants</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primaryClr ">Recipes</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primaryClr ">About</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primaryClr ">Page</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <h4 className="font-[500]">Login</h4>
          <Button text={"Sign Up"} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
