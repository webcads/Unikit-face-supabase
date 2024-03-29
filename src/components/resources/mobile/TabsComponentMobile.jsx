// TabsComponentMobile.jsx
import React, { useState, useEffect } from 'react';
import CategoryListMobile from './CategoryListMobile.jsx'
import jsonData from '../../../config/MenuNav.json'

const TabsComponentMobile = () => {
  const [activeTab, setActiveTab] = useState('mujer');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [currentMenu, setCurrentMenu] = useState('category');  
  const [selectedCategory, setSelectedCategory] = useState(null);  
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);    
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(null);      

  useEffect(() => {
    const storedGender = localStorage.getItem('selectedGender');
    if (storedGender) {
      setActiveTab(storedGender);
    } else {
      localStorage.setItem('selectedGender', 'mujer');
    }
  }, []);

  const handleGoBack = () => {
    switch (currentMenu) {
      case 'subsubcategory':
        setSelectedSubcategory(selectedSubcategory)   
        setCurrentMenu('subcategory');    
                      
        break;
      case 'subcategory':
        setCurrentMenu('category');       
        setSelectedCategory(selectedCategory)          
        break;
      default:
        break;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    switch (tab) {
      case 'mujer':
        window.location.href = '/mujer';
        break;
      case 'hombre':
        window.location.href = '/hombre';
        break;
      case 'home':
        window.location.href = '/';
        break;
      default:
        break;
    }

    localStorage.setItem('selectedGender', tab);     
    setCurrentMenu(tab === 'home' ? 'category' : tab);
  };

  const tabContents = {
    mujer: "mujer selected..",
    hombre: "men selected...",
    home: "home selected...",
  };

  useEffect(() => {
    // Este efecto se ejecutará cada vez que currentMenu o selectedTitle cambien
    console.log(`Current Menu: ${currentMenu}, Selected Title: ${selectedTitle}`);    
  }, [currentMenu, selectedTitle]);

  return (
    <div className="  ">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
          {currentMenu === 'subcategory' || currentMenu === 'subsubcategory' ? (
            <>
              <li key="goBack" className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-secondary/40 dark:text-white/50 dark:border-white/30 border-silver`}
                  type="button"
                  onClick={handleGoBack}
                >
                  Go back
                </button>
              </li>
              <li key="title" className="me-2" role="presentation">
                <span className="inline-block p-4 border-b-2 rounded-t-lg text-secondary/40 dark:text-white/50 dark:border-white/30">
                  {selectedTitle}
                </span>
              </li>
              <li key="home" className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'home' ? 'text-secondary/40 dark:text-white/50 dark:border-white/30 border-silver' : ''}`}
                  type="button"
                  onClick={() => handleTabClick('home')}
                >
                  Home
                </button>
              </li>
            </>
          ) : (
            ['mujer', 'hombre', 'home'].map((tab) => (
              <li key={tab} className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === tab ? 'text-secondary/40 dark:text-white/50 dark:border-white/30 border-silver' : ''}`}
                  id={`${tab}-tab`}
                  data-tabs-target={`#${tab}`}
                  type="button"
                  role="tab"
                  aria-controls={tab}
                  aria-selected={activeTab === tab}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <div id="default-tab-content">
        {Object.entries(tabContents).map(([tabId, content]) => (
          <div
            key={tabId}
            className={`p-0 rounded-lg ${activeTab === tabId ? 'block' : 'hidden'}`}
            id={tabId}
            role="tabpanel"
            aria-labelledby={`${tabId}-tab`}
          >
            <div className="dark:bg-secondary/0 p-0 min-w-full min-h-[100vh]">
              {/* Menu Category List */}
              <div className="mt-8 flex md:hidden pl-10 flex-row">
                <CategoryListMobile
                  categories={jsonData[activeTab]}
                  setSelectedTitle={setSelectedTitle}
                  currentMenu={currentMenu}
                  setCurrentMenu={setCurrentMenu}    
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  setSelectedSubcategory={setSelectedSubcategory}
                  selectedSubSubcategory={selectedSubSubcategory}
                  setSelectedSubSubcategory={setSelectedSubSubcategory}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponentMobile;