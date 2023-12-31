function NavLink({ label, href, activeId, id }) {
  return (
    <a
      className={`${
        activeId == id ? "opacity-100" : "opacity-50 hover:opacity-100"
      }`}
      href={href}
    >
      {label}
    </a>
  );
}

export default NavLink;
