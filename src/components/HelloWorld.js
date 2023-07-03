import React from 'react'

function HelloWorld({age, name}) {
    const headline = "Big Titles Are Awesome.";

  return (
    <div>
        <div>
        
        <h1>
          Hello, {name}!
        </h1>   
           today you are {age} years old
           there is more...
        </div>   
    </div>
   
  )
}

export default HelloWorld