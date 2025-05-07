// import React from 'react'
// import { useState } from 'react';

// const Content = () => {

//   const [name, setName] = useState('first');

//   function NameChange(){
//     const names = ['first', 'second', 'third'];
//     const int = Math.floor(Math.random()*3);
//     setName (names[int])
//   }

//   function namee(){
//     return console.log('visit parthiban.in')
//   }

//   const [count, setCount] = useState(99);
//   // const [name, setName] = useState();

//   function incrementFunction(){
//         setCount(precount => precount + 1)
//   }
//   function decrementFunction(){
//         setCount(precount => precount - 1)
//   }
    
//   return (
//     <main>
//      <p>This is my {name} React</p>
//      <button onClick={NameChange}>Submit</button><br />
//      <button onClick={decrementFunction}>-</button>
//      <span>{count}</span>
//      <button onClick={incrementFunction}>+</button><br />
//     </main>
//   )
// }


// export default Content;


import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState(
    [
      {
        id:1,
        checked: true,
        item: 'practice Coding'
      },
      {
        id:1,
        checked: true,
        item: 'play chess'
      },
      {
        id:1,
        checked: true,
        item: 'learn about AI'
      }
    ]);
            
         const numbers = [-1,1,2,3,4,5]
         const itemss = numbers.filter(n=> n>=0).map(n=>({number:n}))
         console.log(itemss)
 
  return (
    <main>
     <ul>
      {items.map((item) => (
        <li>
          <input type = "checkbox"
          checked = {item.checked}/>
          <label>{item.item}</label>
          <button>Delete</button>
        </li>
      ))}
     </ul>
    </main>
  )
}
export default Content;