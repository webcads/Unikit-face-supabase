//CategoryListMobile.jsx
import React, { useEffect, useState } from 'react';

const CategoryListMobile = ({ categories, setSelectedTitle, currentMenu, setCurrentMenu, selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory, selectedSubSubcategory, setSelectedSubSubcategory }) => {
  const [selectedTitle] = useState('');    
  


  const handleCategoryClick = (categoryId, categoryTitle) => {     
    // setSelectedCategory((prevSelected) => (prevSelected === categoryId ? null : categoryId));  
    setSelectedCategory(categoryId);  
    setSelectedSubcategory(null)   
    setSelectedTitle(categoryTitle);      
    setCurrentMenu('subcategory');  
  
  };

  const handleSubcategoryClick = (subcategoryId, subcategoryTitle) => {
    // setSelectedSubcategory((prevSelected) => (prevSelected === subcategoryId ? null : subcategoryId));   
    setSelectedSubcategory(subcategoryId);  
    setSelectedSubSubcategory(null);             
    setSelectedTitle(subcategoryTitle);
    setCurrentMenu('subsubcategory');           
  };

  const handleSubsubcategoryClick = (subsubcategoryId, subsubcategoryTitle) => {
    setSelectedTitle(subsubcategoryTitle);
    setCurrentMenu('subsubcategory');    
   
  };


  useEffect(() => {
  
  }, [selectedCategory, selectedTitle]);

  useEffect(() => {
   
  }, [selectedSubcategory, selectedTitle]);

  useEffect(() => {
   
  }, [selectedSubSubcategory, selectedTitle]);




  return (
    <div id="cont-uls" className={`min-w-[700px] min-h-[100vh] flex flex-row `}>
      {/* Categories */}
      <ul id='category' className={`category-list ${currentMenu === 'category' ? 'flex-col' : 'hidden'}`}>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>
              <div onClick={() => handleCategoryClick(category.id, category.label)}>
                <p className={`w-fit pointer-events-auto `}>
                  {category.label}
                </p>
              </div>
            </li>
          ))}
      </ul>

      {/* Subcategories */}
    
        <ul id='subcategories' className={`${currentMenu === 'subcategory' ? 'flex-col' : 'hidden'}`}>
          {categories
            ?.find((category) => category.id === selectedCategory)
            ?.subcategories?.map((subcategory) => (
              <li key={subcategory.id}>
                <div onClick={() => handleSubcategoryClick(subcategory.id, subcategory.label)}>
                  <p className={`w-fit`}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {subcategory.label}
                  </p>
                </div>
              </li>
            ))}
        </ul>      

      {/* Subsubcategories */}
      {selectedSubcategory && (
      <ul id='subsubcategories' className={`${currentMenu === 'subsubcategory' ? 'flex-col' : 'hidden'}`}>
          {categories
            ?.find(
              (category) =>
                category.subcategories?.some((sub) => sub.id === selectedSubcategory)
            )
            ?.subcategories?.find((sub) => sub.id === selectedSubcategory)
            ?.subSubcategories?.map((subsubcategory) => (
              <li key={subsubcategory.id}>
                <div onClick={() => handleSubsubcategoryClick(subsubcategory.id, subsubcategory.label)}>
                  <p className={`w-fit`} style={{ textTransform: 'capitalize' }}>
                    {subsubcategory.label}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryListMobile;
