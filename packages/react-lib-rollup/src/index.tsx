import { ComponentLib1 } from "react-transitive-lib-1";
import { ComponentLib2 } from "react-transitive-lib-2";
import React, { useEffect } from "react";

import * as React2 from "react";

console.log("Main lib");

function someFunction() {
  console.log(React2);
  console.log(ComponentLib1);
  console.log(ComponentLib2);
  console.log(useEffect);
}

export function hello() {
  someFunction();
}

export function SomeComponent() {
  return <div>Rollup</div>;
}
