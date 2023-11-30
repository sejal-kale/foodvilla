import React from 'react'
import { useRouteError } from 'react-router';

const Error = () => {
    const err=useRouteError();
  return (
    <div>
      <h1>Opsss!!</h1>
      <h2>Something Went Wrong !</h2>
      <h2>{err.status + " "+ err.statusText}</h2>
    </div>
  )
}

export default Error;
