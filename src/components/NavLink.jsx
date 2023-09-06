function NavLink({ label, href, active }) {
  return (
    <a
      className={`${active ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      href={href}
    >
      {label}
    </a>
  );
}

export default NavLink;
