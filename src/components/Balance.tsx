import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = (): JSX.Element => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .reduce((accumulator, current) => accumulator + current.amount, 0)
    .toFixed(2);
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </Fragment>
  );
};
