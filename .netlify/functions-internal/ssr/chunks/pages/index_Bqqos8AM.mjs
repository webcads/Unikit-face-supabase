/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Image, c as clientsData, $ as $$Layout } from './404_DygpA27W.mjs';
import { s as supabase } from './_id__Df5Y-dOD.mjs';
import { $ as $$CardContact } from './ads_launcher_lYgouatC.mjs';
import '@astrojs/internal-helpers/path';

const $$Astro$6 = createAstro("https://castelll0009.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate``;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/CEO/index.astro", void 0);

const $$file$2 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/CEO/index.astro";
const $$url$2 = "/CEO";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
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

const $$Astro$5 = createAstro("https://castelll0009.github.io");
const $$Cover = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Cover;
  const { imgMobil, imgPc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="header-hero" class="relative  h-fit  flex flex-col section justify-start align-middle text-center rounderd-xl" style="padding: 0 !important;"> <div class="hidden md:block"> <img${addAttribute(imgPc, "src")}${addAttribute(1600, "width")}${addAttribute(800, "height")} alt="Imagen Pc" style="    width: -webkit-fill-available;
      "> </div> <div class="block md:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": imgMobil, "width": 500, "height": 800, "alt": "Imagen Mobil" })} </div> </header>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/landing/Cover.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://castelll0009.github.io");
const $$Highlights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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

const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$Item = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$Catalogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const catalogoPromise = getCatalogosFromSupabase();
  const catalogo = await catalogoPromise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientsData.web_name, "subtitle": clientsData.subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 0px; opacity: 0;">CAD: Webs Disign Ads  Marketing Publicidad Branding </h1>  ${renderComponent($$result2, "Cover", $$Cover, { "imgPc": "/cover_men_pc.jpg", "imgMobil": "/cover_men.jpg" })} ${renderComponent($$result2, "Highlights", $$Highlights, { "imgMobil": "/tshirt/shirt1.jpg" })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "arrayProductos": catalogo[0].product, "sectionTitle": catalogo[0].titulo })} ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/hombre/index.astro", void 0);

const $$file$1 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/hombre/index.astro";
const $$url$1 = "/hombre";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientsData.web_name, "subtitle": clientsData.subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 0px; opacity: 0;">CAD: Webs Disign Ads  Marketing Publicidad Branding </h1>  ${renderComponent($$result2, "Cover", $$Cover, { "imgPc": "/cover_women_pc.webp", "imgMobil": "/cover_women.jpg" })} ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/mujer/index.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/mujer/index.astro";
const $$url = "/mujer";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, getCatalogosFromSupabase as g, index$2 as i };
