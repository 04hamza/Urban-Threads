import React from "react";

const Memo=()=>{
   return(
    <div>
       <div>
            {Array.from({ length: 100 }, (_, i) => (
                <div key={i}>{i}</div>
            ))}
        </div>
    </div>
   )
}
export default Memo