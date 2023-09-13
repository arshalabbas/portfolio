import NavLink from "./NavLink";

function NavBar({ activeSection }) {
  return (
    <nav className="bs-container w-full sticky bottom-0 bg-white py-1 rounded-t-lg">
      <ul className="flex w-full justify-evenly">
        <li>
          <NavLink
            label={"Home"}
            href={"#home"}
            activeId={activeSection}
            id="home"
          />
        </li>
        <li>
          <NavLink
            label={"About"}
            href={"#about"}
            activeId={activeSection}
            id="about"
          />
        </li>
        <li>
          <NavLink
            label={"Skills"}
            href={"#skills"}
            activeId={activeSection}
            id="skills"
          />
        </li>
        <li>
          <NavLink
            label={"Contact"}
            href={"#contact"}
            activeId={activeSection}
            id="contact"
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
