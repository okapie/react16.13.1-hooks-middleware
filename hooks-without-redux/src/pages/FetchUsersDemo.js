import React, { useState, useEffect } from "react";
import { useUsersDemo } from "../hooks/";

export default () => {
  const [shouldFetch, setShouldFetch] = useState(true);

  const users = useUsersDemo(shouldFetch);
  useEffect(() => {
    setShouldFetch(!!(Array.isArray(users) && users.length > 0));
  }, [users]);

  return (
    <React.Fragment>
      <h1># Fetch Users Demo</h1>
      {users.map((user, index) => (
        <div key={`user-${index}`}>
          <p>名前:{user.name}</p>
          <p>表示名:{user.screen_name}</p>
          <p>プロフィール:{user.bio}</p>
        </div>
      ))}
    </React.Fragment>
  );
}
