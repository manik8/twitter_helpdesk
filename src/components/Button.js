import React from "react";

export const Button = (props) => {
  const { text } = props;
  return <button className="btn">{text}</button>;
};
