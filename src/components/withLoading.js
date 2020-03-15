import React, { useState } from "react";

import Loading from "../common/components/Loading/Loading";

const withLoading = WrappedComponent => ({ ...restProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading />}
      <WrappedComponent
        {...restProps}
        setIsLoading={setIsLoading}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </>
  );
};

export default withLoading;
