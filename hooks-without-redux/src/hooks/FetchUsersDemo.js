import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useActions from "../redux/modules/action/";
import { load } from "../redux/modules/reducer";

export default (shouldFetch) => {
  const [loadUser] = useActions([load]);

  useEffect(() => {
    if (shouldFetch) loadUser();
  }, [shouldFetch]);

  return useSelector(state => state.users.users);
};
