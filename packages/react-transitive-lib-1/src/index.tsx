 import React from "react";
 console.log("[LIB 1] Working React Call: React.version", React.version);
 console.log("[LIB 1] Broken React Call: React.createElement")
 console.log(React.createElement);
 
 export const ComponentLib1 = () => {
   return <div></div>;
 };
 