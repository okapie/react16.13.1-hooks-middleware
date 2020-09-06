import React from "react";
import useFetch from "../hooks/useFetch";
import request from "../hooks/request";

export default () => {
  const { fetching, fetched, data, error } = useFetch(request);

  if (fetching || !fetched) {
    return <React.Fragment>Now fetching.</React.Fragment>
  }

  if (!data) {
    return <React.Fragment>No data.</React.Fragment>
  }

  if (error) {
    return <React.Fragment>Error occurred.</React.Fragment>
  }

  return (
    <React.Fragment>
      <h1># Fetch Users Demo</h1>
      {data.map((user, index) => (
        <div key={`user-${index}`}>
          <p>名前:{user.name}</p>
          <p>表示名:{user.screen_name}</p>
          <p>プロフィール:{user.bio}</p>
        </div>
      ))}
    </React.Fragment>
  );
}
