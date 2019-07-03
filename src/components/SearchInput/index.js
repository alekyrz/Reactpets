import React, { useState } from 'react';


function SearchInput(props){
  const[state, setState] = useState('')
    return (
      <input
        value={state}
        onChange={event => setState(event.target.value)}
        {...props}
      />
    )

}

export default SearchInput;
