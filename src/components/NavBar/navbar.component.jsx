const Navbar = (props) => {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default Navbar;
