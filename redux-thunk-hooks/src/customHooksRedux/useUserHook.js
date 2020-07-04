import { useEffect } from "react";
import { useSelector } from "react-redux";
import useActions from "./useActions";
import { load } from "./user";

export const useUserHook = () => {
  const users = useSelector(state => state.user.users);
  const [loadUser] = useActions([load]);

  useEffect(() => {
    loadUser()
  }, [users]);

  return users;
};
