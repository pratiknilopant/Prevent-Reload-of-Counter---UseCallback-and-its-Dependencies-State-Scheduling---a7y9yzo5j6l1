import React, { useCallback } from 'react';

function CounterButton({ increment }) {
     const incrementAction = useCallback(() => {
          increment();
     }, [increment]);
     
     /*DO NOT EDIT THIS LINE */ console.log("CounterButton rendered!"); //DO NOT edit this line 

     

     return (
          <button onClick={increment}>
               Increment
          </button>
     );

}

export default CounterButton;
