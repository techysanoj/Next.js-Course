// "use client"

import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

// import { useState } from "react";

export const Navbar = () => {
  console.log(`Navbar rendered`);
  // const [search, setSearch] = useState("") // we can not use useState because it is server component
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
