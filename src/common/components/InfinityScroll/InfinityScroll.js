import { useEffect } from "react";
import { debounce } from "lodash";

const InfinityScroll = ({ loadData, children }) => {
  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      document.documentElement.offsetHeight - 10
    )
      return;
    loadData();
  }, 100);

  useEffect(() => {
    setTimeout(loadData, 3000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, loadData]);

  return children;
};

export default InfinityScroll;
