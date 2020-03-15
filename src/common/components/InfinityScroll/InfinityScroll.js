import { useEffect } from "react";
import { debounce } from "lodash";

import { DEFAULT_LOADING_TIME } from "../../../utils/constants/defaults";

const InfinityScroll = ({ loadData, children }) => {
  const debounceTime = 100;
  const handleScroll = debounce(() => {
    const windowScrollHeight =
      window.innerHeight + document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight - 10;
    if (windowScrollHeight <= offsetHeight) return;
    loadData();
  }, debounceTime);

  useEffect(() => {
    setTimeout(loadData, DEFAULT_LOADING_TIME);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, loadData]);

  return children;
};

export default InfinityScroll;
