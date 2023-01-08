import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        {/* Title */}
        <h1>gifExpertApp</h1>

        {/* Search */}
        <AddCategory
          onNewCategory={value => onAddCategory(value)}
        />

        {/* Gifs list*/}
        { 
          categories.map( category => (
              <GifGrid key={ category } 
              category= { category }/>
          ))
        }
    </>
  )
}
