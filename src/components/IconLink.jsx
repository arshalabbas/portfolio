const IconLink = ({ iconURL, href }) => {
  return (
    <a href={href}>
      <img
        src={iconURL}
        alt="social-icon"
        className="w-10 h-10 opacity-60 hover:opacity-100 to-reveal from-r"
      />
    </a>
  );
};

export default IconLink;
