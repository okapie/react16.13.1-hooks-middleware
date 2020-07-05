import React, { useState } from "react";
import "../App.css";
import { LifecycleDemo } from "../hooks/";

export default () => {
  const [random, setRandom] = useState(Math.random());
  const [immutable, setImmutable] = useState(2);

  const [mountedAtRandom, setMountedAtRandom] = useState(true);
  const [mountedImmutably, setMountedImmutably] = useState(true);

  const reRenderAtRandom = () => setRandom(Math.random());
  const reRenderImmutably = () => setImmutable(2);

  const toggle1 = () => setMountedAtRandom(!mountedAtRandom);
  const toggle2 = () => setMountedImmutably(!mountedImmutably);

  return (
    <React.Fragment>
      <h1># Lifecycle Demo</h1>
      <React.Fragment>
        <button onClick={reRenderAtRandom}>Re-render (random value)</button>
        <button onClick={toggle1}>Show/Hide LifecycleDemo</button>
        {mountedAtRandom && <LifecycleDemo value={random || -1} />}
      </React.Fragment>
      <hr />
      <React.Fragment>
        <button onClick={reRenderImmutably}>Re-render (immutable value)</button>
        <button onClick={toggle2}>Show/Hide LifecycleDemo</button>
        {mountedImmutably && <LifecycleDemo value={immutable || -1} />}
      </React.Fragment>
      <hr />
    </React.Fragment>
  );
}
