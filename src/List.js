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