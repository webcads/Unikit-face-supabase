import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, l as renderTransition } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Image, c as clientData, $ as $$Layout } from './404_DUAG0DTE.mjs';
import { $ as $$CardContact } from './ads_launcher_CJ1_dbvO.mjs';
import '@astrojs/internal-helpers/path';
/* empty css                          */
/* empty css                          */
import { s as supabase } from './_id__Bjdn8rKH.mjs';

const $$Astro$9 = createAstro("https://castelll0009.github.io");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate``;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/CEO/index.astro", void 0);

const $$file$3 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/CEO/index.astro";
const $$url$3 = "/CEO";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getCatalogosFromSupabase() {
  try {
    let { data: catalogo, error } = await supabase
      .from('catalogo')
      .select('*,product(*)');
      
    if (error) {
      console.error('Error al recuperar Catalogos:', error.message);
      return [];
    }

    return catalogo;
  } catch (error) {
    console.error('Error al recuperar Catalogos:', error.message);
    return [];
  }
}

const $$Astro$8 = createAstro("https://castelll0009.github.io");
const $$Cover = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Cover;
  const { imgMobil, imgPc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="header-hero" class="relative  h-fit  flex flex-col section justify-start align-middle text-center rounderd-xl" style="padding: 0 !important;"> <div class="hidden md:block"> <img${addAttribute(imgPc, "src")}${addAttribute(1600, "width")}${addAttribute(800, "height")} alt="Imagen Pc" style="    width: -webkit-fill-available;
      "> </div> <div class="block md:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": imgMobil, "width": 500, "height": 800, "alt": "Imagen Mobil" })} </div> </header>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/landing/Cover.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://castelll0009.github.io");
const $$Highlights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Highlights;
  const { imgMobil, imgPc } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="section flex gap-5 flex-col justify-center text-center"> <h2 class="font-bold text-2xl dark:text-primary text-secondary uppercase">\nHighlights\n</h2> <!-- Swiper Container --> <div class="swiper-container"> <div class="swiper-wrapper flex flex-row gap-5 justify-start md:justify-center "> <!-- Article 1 --> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <!-- Repeat for other articles --> </div> <!-- Add Pagination --> <div class="swiper-pagination"></div> <!-- Add Navigation Arrows --> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div> </div> </section> <script>\n    document.addEventListener("DOMContentLoaded", function () {\n      var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;\n  \n      if (isMobile) {\n        var mySwiper = new Swiper(".swiper-container", {\n          // Optional parameters\n          direction: "horizontal",\n          loop: false,\n          centeredSlides: true,\n          slidesPerView: 1,\n          spaceBetween: 0,\n  \n          // If we need pagination\n          pagination: {\n            el: ".swiper-pagination",\n            clickable: true,\n          },\n  \n          // Navigation arrows\n          navigation: {\n            nextEl: ".swiper-button-next",\n            prevEl: ".swiper-button-prev",\n          },\n        });\n      }\n    });\n  <\/script>'])), maybeRenderHead(), addAttribute(`background-image: url(${imgMobil});
              background-position: center;             
              background-size: cover;
              background-repeat: no-repeat;`, "style"), addAttribute(`background-image: url(${imgMobil});
              background-position: center;             
              background-size: cover;
              background-repeat: no-repeat;`, "style"), addAttribute(`background-image: url(${imgMobil});
              background-position: center;          
              background-size: cover;
              background-repeat: no-repeat;`, "style"), addAttribute(`background-image: url(${imgMobil});
              background-position: center;             
              background-size: cover;
              background-repeat: no-repeat;`, "style"));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/landing/Highlights.astro", void 0);

const $$Astro$6 = createAstro("https://castelll0009.github.io");
const $$Item = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Item;
  const { id, imgMobil, imgPc, title, subtitle, price, arrayColor, url_imagen } = Astro2.props;
  console.log("ID PRODUCTO:" + id);
  return renderTemplate`${maybeRenderHead()}<article class=" w-1/2 md:w-1/4 "> <a${addAttribute(`/producto/${id}`, "href")} class=" flex flex-col items-start md:items-center "> <!-- rederizing whit local image --> <!-- <div
            class=" w-full min-w-44 max-w-[50vw] h-[40vh] min-h-[40vh] max-h-[50vh] relative bg-white rounded-sm overflow-hidden  dark:bg-gray-800 dark:border-gray-700"
            style=\`background-image: url(/tshirt/\${imgMobil});
            background-position: center;           
            background-size: cover;
            background-repeat: no-repeat;\`
        > --> <!-- renderizing with url imagen --> <div class=" w-full min-w-60 max-w-[60vw] h-[40vh] min-h-[40vh] max-h-[50vh] relative bg-white rounded-sm overflow-hidden  dark:bg-gray-800 dark:border-gray-700"${addAttribute(`background-image: url(${url_imagen});
        background-position: center;           
        background-size: cover;
        background-repeat: no-repeat;`, "style")}> <!-- Your div content here --> <span class="absolute bottom-3 right-3"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 31 5 26c-3-5 3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0"></path></svg> </span> </div> <div class="p-3 w-full text-start md:text-center items-start md:justify-center"> <h4 class="text-sm tracking-tight text-gray-900 dark:text-white mb-0 text-nowrap text-ellipsis overflow-hidden"> ${title} </h4> <h5 class="mb-0 text-xs text-[#737373] tracking-tight text-gray-900 dark:text-white"> ${subtitle} </h5> <h6 class="font-bold text-sm dark:text-white text-secondary">
$ ${price.toLocaleString()} COP
</h6> <!--  colors camisas  --> <div class="colors_items flex flex-row md:justify-center gap-1" style="display: \${Array.isArray(arrayColor) && arrayColor.length > 0 ? 'flex' : 'none'};"> ${arrayColor && arrayColor.length > 0 && arrayColor.map((color) => renderTemplate`<div class="flex flex-row items-center"> <div class="w-3 h-3 border border-gray-300"${addAttribute({ backgroundColor: color }, "style")}></div> </div>`)} </div> </div> </a> </article>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/productos/Item.astro", void 0);

const $$Astro$5 = createAstro("https://castelll0009.github.io");
const $$Catalogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Catalogo;
  const { arrayProductos, sectionTitle } = Astro2.props;
  return renderTemplate`<!-- {Object.keys(arrayProductos).map((productoArray) => (    
    <Productos1  sectionTitle={sectionTitle} productos={arrayProductos[productoArray]} />
))} --><!-- {arrayProductos.map((producto) => (
    <Productos1  
        key={producto.id} // Asegúrate de agregar una clave única para cada elemento
        sectionTitle={producto.title} 
        productos={[producto]} // Pasa cada producto como un array de un solo elemento
    />
))} -->${maybeRenderHead()}<section class="flex section flex-col  items-center justify-center" style="padding: 5.6vw !important;"> <h5 class="uppercase m-2 text-center w-full bg-secondary dark:bg-primary text-primary dark:text-secondary">${sectionTitle}</h5> <div class="flex-row md:flex-row flex-wrap flex justify-between"> ${arrayProductos.map((item, index) => renderTemplate`${renderComponent($$result, "Item", $$Item, { "key": index, "Aseg\xFArate": true, "de": true, "agregar": true, "una": true, "clave": true, "\xFAnica": true, "para": true, "cada": true, "elemento": true, "id": item.id, "imgMobil": item.imgProducto, "title": item.title, "subtitle": item.subtitle, "price": item.precio, "arrayColor": item.colores, "url_imagen": item.url_imagen })}`)} </div> </section> <!-- arrayColor={producto.arrayColor} -->`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/Catalogo.astro", void 0);

const $$Astro$4 = createAstro("https://castelll0009.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  const catalogoPromise = getCatalogosFromSupabase();
  const catalogo = await catalogoPromise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientData.web_name, "subtitle": clientData.subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 0px; opacity: 0;">CAD: Webs Disign Ads  Marketing Publicidad Branding </h1>  ${renderComponent($$result2, "Cover", $$Cover, { "imgPc": "/cover_men_pc.jpg", "imgMobil": "/cover_men.jpg" })} ${renderComponent($$result2, "Highlights", $$Highlights, { "imgMobil": "/tshirt/shirt1.jpg" })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "arrayProductos": catalogo[0].product, "sectionTitle": catalogo[0].titulo })} ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/hombre/index.astro", void 0);

const $$file$2 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/hombre/index.astro";
const $$url$2 = "/hombre";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientData.web_name, "subtitle": clientData.subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 0px; opacity: 0;">CAD: Webs Disign Ads  Marketing Publicidad Branding </h1>  ${renderComponent($$result2, "Cover", $$Cover, { "imgPc": "/cover_women_pc.webp", "imgMobil": "/cover_women.jpg" })} ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/mujer/index.astro", void 0);

const $$file$1 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/mujer/index.astro";
const $$url$1 = "/mujer";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$MainPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainPanel;
  return renderTemplate`${maybeRenderHead()}<section class="section flex flex-col md:flex-row gap-5 justify-between" style="padding: 5.6vw; padding-top: 7vw;" data-astro-cid-zv4xut4g> <!-- perfil --> <div class="cursor-pointer flex-1 text-center" data-astro-cid-zv4xut4g> <!-- <img class="w-10 h-10 rounded" src="https://github.com/shadcn.png" alt="Default avatar"> --> <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-astro-cid-zv4xut4g> <div class="flex justify-end px-4 pt-4" data-astro-cid-zv4xut4g> <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button" data-astro-cid-zv4xut4g> <span class="sr-only" data-astro-cid-zv4xut4g>Open dropdown</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3" data-astro-cid-zv4xut4g> <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" data-astro-cid-zv4xut4g></path> </svg> </button> <!-- Dropdown menu --> <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" data-astro-cid-zv4xut4g> <ul class="py-2" aria-labelledby="dropdownButton" data-astro-cid-zv4xut4g> <li data-astro-cid-zv4xut4g> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-astro-cid-zv4xut4g>Edit</a> </li> <li data-astro-cid-zv4xut4g> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-astro-cid-zv4xut4g>Export Data</a> </li> <li data-astro-cid-zv4xut4g> <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-astro-cid-zv4xut4g>Delete</a> </li> </ul> </div> </div> <div class="flex flex-col items-center pb-10" data-astro-cid-zv4xut4g> <img class="w-24 h-24 mb-3 rounded-full shadow-lg floating-effect" src="https://github.com/shadcn.png" alt="user image" data-astro-cid-zv4xut4g> <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white" data-astro-cid-zv4xut4g>
Ivan Esteban Castillo
</h5> <span class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-zv4xut4g>Enginner Of Systems</span> <span class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-zv4xut4g>Full Stack Developer</span> <div class="flex mt-4 md:mt-6" data-astro-cid-zv4xut4g> <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-astro-cid-zv4xut4g>Add friend</a> <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-astro-cid-zv4xut4g>Message</a> </div> </div> </div> </div> <!-- procedimientos --> <div class="flex-1 text-center md:text-start md_text-start text-sm md:text-lg" data-astro-cid-zv4xut4g> <ul class="flex flex-row md:flex-row  gap-1 md:gap-5 md:flex-wrap" data-astro-cid-zv4xut4g> <li class=" md:w-1/2" data-astro-cid-zv4xut4g${addAttribute(renderTransition($$result, "savecaqc", "", "homologacion"), "data-astro-transition-scope")}> <a href="/homologacion" class="flex flex-col md:items-start md_items-start items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" data-astro-cid-zv4xut4g> <span class="p-2 dark:text-white text-xs" data-astro-cid-zv4xut4g> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-zv4xut4g><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zv4xut4g><g stroke-width="1" data-astro-cid-zv4xut4g><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H19V21H5V3H12Z" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0" data-astro-cid-zv4xut4g></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13H15" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0" data-astro-cid-zv4xut4g></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10V16" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0" data-astro-cid-zv4xut4g></animate></path></g><path stroke-dasharray="12" stroke-dashoffset="12" d="M14.5 3.5V6.5H9.5V3.5" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0" data-astro-cid-zv4xut4g></animate></path></g></svg> </span> <div class="flex flex-col justify-between p-2 md:p-4 leading-normal" data-astro-cid-zv4xut4g> <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-astro-cid-zv4xut4g>
Homologar Materias
</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" data-astro-cid-zv4xut4g>
Aqui podras llenar tu formulario de peticion con las
                            asignatuiras que deseas homologar.
</p> </div> </a> </li> <li class=" md:w-1/2" data-astro-cid-zv4xut4g${addAttribute(renderTransition($$result, "7m7qgb7w", "", "homologacion"), "data-astro-transition-scope")}> <a href="/homologacion" class="flex flex-col md:items-start md_items-start items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" data-astro-cid-zv4xut4g> <span class="p-2 dark:text-white text-xs" data-astro-cid-zv4xut4g> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-zv4xut4g><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zv4xut4g><g stroke-width="1" data-astro-cid-zv4xut4g><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H19V21H5V3H12Z" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0" data-astro-cid-zv4xut4g></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13H15" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0" data-astro-cid-zv4xut4g></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10V16" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0" data-astro-cid-zv4xut4g></animate></path></g><path stroke-dasharray="12" stroke-dashoffset="12" d="M14.5 3.5V6.5H9.5V3.5" data-astro-cid-zv4xut4g><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0" data-astro-cid-zv4xut4g></animate></path></g></svg> </span> <div class="flex flex-col justify-between p-2 md:p-4 leading-normal" data-astro-cid-zv4xut4g> <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-astro-cid-zv4xut4g>
Homologar Materias
</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" data-astro-cid-zv4xut4g>
Aqui podras llenar tu formulario de peticion con las
                            asignatuiras que deseas homologar.
</p> </div> </a> </li> </ul> </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/MainPanel.astro", "self");

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$SpeedDial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpeedDial;
  return renderTemplate`${maybeRenderHead()}<div data-dial-init class="fixed end-6 bottom-6 group"> <div id="speed-dial-menu-default" class="flex flex-col items-center hidden mb-4 space-y-2"> <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"> <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"></path> </svg> <span class="sr-only">Share</span> </button> <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
Share
<div class="tooltip-arrow" data-popper-arrow></div> </div> <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z"></path> <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z"></path> </svg> <span class="sr-only">Print</span> </button> <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
Print
<div class="tooltip-arrow" data-popper-arrow></div> </div> <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"></path> <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path> </svg> <span class="sr-only">Download</span> </button> <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
Download
<div class="tooltip-arrow" data-popper-arrow></div> </div> <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"> <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path> <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path> </svg> <span class="sr-only">Copy</span> </button> <div id="tooltip-copy" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
Copy
<div class="tooltip-arrow" data-popper-arrow></div> </div> </div> <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"> <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"></path> </svg> <span class="sr-only">Open actions menu</span> </button> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/landing/SpeedDial.astro", void 0);

async function getTiendasFromSupabase() {
    try {
      let { data: tienda, error } = await supabase
        .from('tienda')
        .select('*,catalogo(*)');
        
      if (error) {
        console.error('Error al recuperar tiendas:', error.message);
        return [];
      }
  
      return tienda;
    } catch (error) {
      console.error('Error al recuperar tiendas:', error.message);
      return [];
    }
  }

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const tiendasPromise = getTiendasFromSupabase();
  await tiendasPromise;
  const catalogoPromise = getCatalogosFromSupabase();
  await catalogoPromise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientData.web_name, "subtitle": clientData.subtitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SpeedDial", $$SpeedDial, {})}  ${renderComponent($$result2, "MainPanel", $$MainPanel, {})}   ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/index.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
