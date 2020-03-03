import React from "react";

import Loading from "./Loading/Loading";

const withLoading = WrappedComponent => ({ data, ...restProps }) => {
  return data && data.data ? (
    <WrappedComponent {...restProps} data={data.data} />
  ) : (
    <Loading />
  );
};

export default withLoading;
