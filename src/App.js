import React, { useState } from "react";
import  Category from './Category';
import Menu from './Menu';
import items from './data';

const allCategories= ['all',...new Set(items.map((item)=>item.category) )];


function App() {
  const [menuItems,SetmenuItems]=useState(items);
  const [categories,SetCategories]=useState([allCategories]);

  const filterItems =(category) =>
  {
    const newItems=items.filter((item) => item.category === category)
    SetmenuItems(newItems);
  }
  return (
    <main>
      <section className='menu section'>
       <div className='title'>
         <h2>Our Menu</h2>
         <div className='underline'></div>
       </div>
       <Category categories={categories} filterItems={filterItems } />
       <Menu  items={menuItems}/> 
      </section>
    </main>
  );
}

export default App;
