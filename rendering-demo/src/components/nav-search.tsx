"use client";
import { useState } from "react";

export const NavSearch = () => {
  const [search, setSearch] = useState("");

  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};

// by default this is a server components so we can not use hooks etc
