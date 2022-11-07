import React from "react";

function CategoryFilter({cat, categories, setCat}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => 
      <button
      onClick = {(e) => {
      if (e.target.value === cat) {
        e.target.className = "selected"
      }
      
        setCat(e.target.value)
      }}
      value = {cat}
      key = {cat}
      > {cat}
      </button>
      )}
    </div>
  );
}

export default CategoryFilter;
