// MainNav.js
import React, { useState, useEffect } from 'react'
import CategoryList from './CategoryList.jsx'
import TabsComponentMobile from './mobile/TabsComponentMobile.jsx'

  // Definir estilos en una variable
  const customStyles = `
    #subwrapper {
      position:absolute;            
      width: 0px;
      height: 100vh;      
      transition: width 0.4s;      
    }

    #subwrapper.active {
      width: 100%;
    }
    #subwrapper:not(.active):hover {
      width: 0px;  // Restablecer el ancho al salir del modo de menú y al hacer hover
    }
  `;


const MainNav = ({ jsonData }) => {
  useEffect(() => {    
  // alert(JSON.stringify(jsonData))
  }, []);

  const [selectedGender, setSelectedGender] = useState('hombre');
  const [menuModeActive, setMenuModeActive] = useState(false);

  const handleGenderChange = (gender, event) => {
   setSelectedGender(gender);
   // Resetea el modo de menú al cambiar de género
   setMenuModeActive(false);
 };
 const handleCategoryClick = (categoryId) => {
   console.log('Category clicked: ' + categoryId);
   setSelectedCategory((prevSelected) => (prevSelected === categoryId ? null : categoryId));
   setSelectedSubcategory(null);
   activateMenuMode(); // Activa el menú cuando se hace clic en la categoría
 };


const handleWrapperMouseLeave = () => {     
  // Desactivar MenuMode al salir del contenedor
  setMenuModeActive(false);
  // Restablecer el ancho del subwrapper al tamaño original
  document.getElementById('subwrapper').style.width = '0px';
  // Revertir cambios de estilo al salir de MenuMode
  document.getElementById('subcategories').style.opacity = '0';
  document.getElementById('subsubcategories').style.opacity = '0';
  document.getElementById('wrapper').style.pointerEvents = 'none';
 };

 const handleWrapperMouseEnter = () => {
  // Activar MenuMode al entrar en el contenedor
  setMenuModeActive(true);
  // Ajustar el ancho del subwrapper y las opacidades al entrar en MenuMode
  document.getElementById('subwrapper').style.width = '100%';
  document.getElementById('subcategories').style.opacity = '1';
  document.getElementById('subsubcategories').style.opacity = '1';
  document.getElementById('wrapper').style.pointerEvents = 'auto';
 };

  return (
   <div
   id="wrapper"
   class="relative md:min-w-[850px] md:max-w-[850px] pointer-events-auto  min-h-[50vh]"
   onMouseLeave={handleWrapperMouseLeave}
   onMouseEnter={handleWrapperMouseEnter}
 >
     <style>{customStyles}</style>
     <div
        id="subwrapper"
        class={`bg-transparent md:bg-primary  md:dark:bg-secondary z-[-1]  transition-transform transform-growth `}       
      ></div>
      {/* button hombre mujer */}    

      <div  class='md:hidden  min-w-[100vw]  text-secondary dark:text-primary bg-primary dark:bg-secondary/80 '>
      <TabsComponentMobile  />
        </div>                 
      
   
       <section class="md:flex hidden flex-row gap-2 pl-10 pt-8  items-center justify-start pointer-events-auto">
       <a onClick={(e) => handleGenderChange('mujer',e)} href="mujer"  class="text-start ">
            <h5
               id="drawer-label"
               class=" activate_menu_mode inline-flex items-center  text-xs font-semibold text-secondary dark:text-primary uppercase "
            >
               Mujer
            </h5>
         </a>
         <p class="font-extralight text-xl self-end pt-2">|</p>
         <a onClick={(e) => handleGenderChange('hombre',e)} href="hombre"  class=" text-start ">
            <h5
               id="drawer-label"
               class="activate_menu_mode inline-flex items-center  text-xs font-semibold text-secondary dark:text-primary uppercase "
            >
               Hombre
            </h5>
         </a>     
      </section>  
     
      <div  class="mt-8 hidden md:flex pl-10 flex-row">         
        <CategoryList categories={jsonData[selectedGender]} />      
      </div>
    </div>
 
  );
};

export default MainNav;
