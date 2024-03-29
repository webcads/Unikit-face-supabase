//CategoryList.jsx
import React, { useEffect, useState } from 'react';
const customStyles = `

`;

const CategoryList = ({ categories }) => {
  useEffect(() => {
    // alert(JSON.stringify(categories));
  }, [categories]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [menuModeActive, setMenuModeActive] = useState(false);

  const handleCategoryClick = (categoryId) => {
    console.log('Category clicked: ' + categoryId);
    setSelectedCategory((prevSelected) => (prevSelected === categoryId ? null : categoryId));
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    console.log('Subcategory clicked: ' + subcategoryId);
    setSelectedSubcategory((prevSelected) => (prevSelected === subcategoryId ? null : subcategoryId));
  };

  const activateMenuMode = () => {
    setMenuModeActive(true);
    // Cambiar el estado de MenuMode a activo
    document.getElementById('subwrapper').style.width = '100%'; // Ajusta el valor según sea necesario
    document.getElementById('subcategories').style.opacity = '1';
    document.getElementById('subsubcategories').style.opacity = '1';
    document.getElementById('wrapper').style.pointerEvents = 'auto';   
  };

  const deactivateMenuMode = () => {
   // Cambiar el estado de MenuMode a desactivo
   setMenuModeActive(false);
   // Restaurar la opacidad a 0 cuando MenuMode está desactivado
   document.getElementById('subcategories').style.opacity = '0';
   document.getElementById('subsubcategories').style.opacity = '0';
   document.getElementById('wrapper').style.pointerEvents = 'none';   
  };

  // const MenuMode = () => {
  //   // Cambiar la opacidad de subcategories y subsubcategories de 0 a 1
  //   document.getElementById('subcategories').style.opacity = '1';
  //   document.getElementById('subsubcategories').style.opacity = '1';
  // };

  return (
    <div id="cont-uls" className={` min-w-[700px] min-h-[100vh] flex flex-row ${menuModeActive ? '' : 'inactive'}`}>
      {/* Categories */}
       <ul id='category' className={`hidden ${menuModeActive ? '' : 'inactive'}`} style={{ padding: '0px', minWidth: '200px', overflowX: 'visible', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>
              <div onClick={() => handleCategoryClick(category.id)}>
                <p className={`w-fit pointer-events-auto ${menuModeActive ? 'activate_menu_mode' : ''}`} onMouseEnter={activateMenuMode}>
                  {category.label}
                </p>                
              </div>
            </li>
          ))}
      </ul>

      {/* Subcategories */}
      {selectedCategory && (
        <ul id='subcategories' className={`${menuModeActive ? 'opacity-1' : 'opacity-0'}`} style={{ padding: '10px', minWidth: '200px', overflowX: 'visible' }}>
          {categories
            ?.find((category) => category.id === selectedCategory)
            ?.subcategories?.map((subcategory) => (
              <li key={subcategory.id}>
                <p className={`w-fit  ${menuModeActive ? 'activate_menu_mode' : ''}`}
                  style={{ textTransform: 'capitalize' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubcategoryClick(subcategory.id);
                  }}
                >
                  {subcategory.label}
                </p>
              </li>
            ))}
        </ul>
      )}

      {/* Subsubcategories */}
      {selectedSubcategory && (
        <ul id='subsubcategories' className={` ${menuModeActive ? 'opacity-1' : 'opacity-0'}`} style={{ padding: '10px', minWidth: '200px', overflowX: 'visible' }}>
          {categories
            ?.find(
              (category) =>
                category.subcategories?.some((sub) => sub.id === selectedSubcategory)
            )
            ?.subcategories?.find((sub) => sub.id === selectedSubcategory)
            ?.subSubcategories?.map((subsubcategory) => (
              <li key={subsubcategory.id}>
                <p className={`w-fit  ${menuModeActive ? 'activate_menu_mode' : ''}`} style={{ textTransform: 'capitalize' }}>{subsubcategory.label}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
