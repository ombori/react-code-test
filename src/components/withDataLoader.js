import React from "react";

import useFetch from "../utils/useFetch";
import { generateUrl } from "../utils/urlMaker";

const withDataLoader = WrappedComponent => () => {
  const data = useFetch(generateUrl("users"));

  return <WrappedComponent data={data} />;
};

export default withDataLoader;
