import React from "react";

export default function Page(props) {
  return <div className="page p-10  min-h-screen">{props.children}</div>;
}
