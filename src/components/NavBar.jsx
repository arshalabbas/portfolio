import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav className="bs-container w-full sticky bottom-0 bg-white py-1 rounded-t-lg">
      <ul className="flex w-full justify-evenly">
        <li>
          <NavLink active label={"Home"} href={"#home"} />
        </li>
        <li>
          <NavLink label={"About"} href={"#about"} />
        </li>
        <li>
          <NavLink label={"Skills"} href={"#skills"} />
        </li>
        <li>
          <NavLink label={"Contact"} href={"#contact"} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
