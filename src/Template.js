import { useState } from "react";

function Template ({weeks}) {
 

let totalWeeks = 5200;
let template = []
let GrayBox  =  <div className="w-2 h-2 bg-gray-300 m-0.5" />;
let RedBox = <div className="w-2 h-2 bg-red-800 m-0.5" />;

for (let i = 0; i < totalWeeks; i++) {
  if (weeks && i < weeks) {
    template.push(RedBox);
  } else {
    template.push(GrayBox);
  }
}
  return (

    <div className="flex flex-wrap w-1/2" >
    {template}
  </div>
  
  );
}
export default Template