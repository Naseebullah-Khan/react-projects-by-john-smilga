import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading } = useGlobalContext();

  if (loading) return <section className="loading"></section>;

  return <h2>stories component</h2>;
};

export default Stories;
