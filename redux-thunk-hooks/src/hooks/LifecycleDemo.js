import { useEffect } from "react";

export default ({ value }) => {
  useEffect(() => {
    console.log("render!", value);
    return () => console.log("unmounting...", value);
  }, [value]);

  return "I'm a lifecycle demo.";
}
