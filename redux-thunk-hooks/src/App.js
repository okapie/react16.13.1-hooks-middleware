import React, { useState } from "react";
import "./App.css";
import LifecycleDemo from "./hooks";
import { useLocalHistory } from "./customHooks/";
import { useUserHook } from "./customHooksRedux/useUserHook";

export default () => {
  const [random, setRandom] = useState(Math.random());
  const [immutable, setImmutable] = useState(2);

  const [mountedAtRandom, setMountedAtRandom] = useState(true);
  const [mountedImmutably, setMountedImmutably] = useState(true);

  const reRenderAtRandom = () => setRandom(Math.random());
  const reRenderImmutably = () => setImmutable(2);

  const toggle1 = () => setMountedAtRandom(!mountedAtRandom);
  const toggle2 = () => setMountedImmutably(!mountedImmutably);

  const topPage = 1;
  const lastPage = 4;

  const [currentPage, Top, Next, Back, Last, Reset] = useLocalHistory(
    topPage,
    lastPage
  );

  const users = useUserHook();

  return (
    <React.Fragment>
      <h1># Hooks Sample</h1>
      <React.Fragment>
        <button onClick={reRenderAtRandom}>Re-render (random value)</button>
        <button onClick={toggle1}>Show/Hide LifecycleDemo</button>
        {mountedAtRandom && <LifecycleDemo value={random} />}
      </React.Fragment>
      <hr />
      <React.Fragment>
        <button onClick={reRenderImmutably}>Re-render (immutable value)</button>
        <button onClick={toggle2}>Show/Hide LifecycleDemo</button>
        {mountedImmutably && <LifecycleDemo value={immutable} />}
      </React.Fragment>
      <hr />
      <h1># Custom Hooks Sample</h1>
      <React.Fragment>
        <div>Current Page: {currentPage}</div>
        <button onClick={Top}>Top</button>
        <button onClick={Next}>Next</button>
        <button onClick={Back}>Back</button>
        <button onClick={Last}>Last</button>
        <button onClick={Reset}>Reset</button>
      </React.Fragment>
      <hr />
      <h1># Custom Hooks Redux Sample</h1>
      <ul>
      {users.map(({ _id, name, screen_name }) => (
        <li key={`user-${_id}`}>
          <div>Name: {name}</div>
          <div>Screen Name: {screen_name}</div>
        </li>
      ))}
      </ul>
    </React.Fragment>
  );
}
