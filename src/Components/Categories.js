import React, { useState } from "react";

const Categories = ({categories,filterMenus}) => {
  const [mainCategorie,setMainCategorie] = useState('all')

  return (
    <div className="btn-container">
      {
        categories.map((categorie,index) => (
      <button
        type="button"
        // highlight class  for highlight main category
        className={categorie === mainCategorie ? 'filter-btn highlight' : 'filter-btn'}
        key={index}
        onClick={()=>{
          setMainCategorie(categorie)
          filterMenus(categorie)
        }}
      >
        {categorie}
      </button>
        ))
      }
      
    </div>
  );
};

export default Categories;
