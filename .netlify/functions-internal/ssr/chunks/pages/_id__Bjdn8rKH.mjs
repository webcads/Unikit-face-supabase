import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DUAG0DTE.mjs';
import { createClient } from '@supabase/supabase-js';
import 'clsx';

const supabase = createClient(
  "https://lbyvzysocosyjpvecwwm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxieXZ6eXNvY29zeWpwdmVjd3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMTQyMTksImV4cCI6MjAyNjY5MDIxOX0.dz2KgedU7R3n0sdW4nHbmW7DBvUBN8tzAVD37j_mLj4",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

async function getProductoById(id) {
  try {
    const { data: product, error } = await supabase
      .from('product')
      .select('*')
      .eq('id', id)
      .single(); // Si esperas solo un resultado;      
      
    if (error) {
      console.error('Error al recuperar producto:', error.message);
      return null;
    }

    return product;
  } catch (error) {
    console.error('Error al recuperar producto:', error.message);
    return null;
  }
}

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$ItemSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemSingle;
  const { id, imgMobil, imgPc, title, subtitle, price, arrayColor, url_imagen } = Astro2.props;
  console.log("ID PRODUCTO:" + id);
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-secondary" style="padding: 0px;"> <article class="z-50  md:p-28   flex flex-col items-center justify-start md:flex-row md:w-full md:max-w[1068px] md:gap-10 md:items-start text-center text-secondary dark:text-white"> <!-- renderizing with url imagen --> <figure class="md:flex-1 flex fixed w-full z-10 md:relative h-[561px] max-h-[561px] min-h-[40vh] md:w-1/2 rounded-sm overflow-hidden  dark:border-gray-700 justify-end"> <img${addAttribute(`${url_imagen}`, "src")} alt=""> </figure> <div class="c-product-actions md:hidden z-40 w-full flex flex-row justify-end p-5" style=" margin-top: 469px; top: 16px;"> <!-- Favorite buttton mobil --> <span class="relative bg-primary dark:bg-secondary p-3 shadow-lg rounded-[100%]"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 31 5 26c-3-5 3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0"></path></svg> </span> </div> <!-- product details MOBIL--> <figure class="relative md:flex-1 bg-white dark:bg-secondary z-20 p-3 w-full flex flex-col justify-between"> <div class="p-3 w-full flex flex-row md:flex-col justify-between text-start"> <span class="text-start"> <h4 class="text-sm md:text-xl md:font-bold md:uppercase tracking-tight text-gray-900 dark:text-white mb-0 text-nowrap text-ellipsis overflow-hidden"> ${title} </h4> <h5 class="mb-0 text-xs text-[#737373] tracking-tight text-gray-900 dark:text-white"> ${subtitle} </h5> </span> <span> <h6 class="font-bold text-lg md:text-xl dark:text-white text-secondary"> ${price.toLocaleString()} COP
</h6> </span> </div> <div class="p-0 w-full flex flex-row md:flex-col justify-between text-start"> <!--  colors camisas  --> <span class="p-3 colors_items flex flex-row md:justify-start gap-1" style="display: \${Array.isArray(arrayColor) && arrayColor.length > 0 ? 'flex' : 'none'};"> <p class="text-start">Colores</p> ${arrayColor && arrayColor.length > 0 && arrayColor.map((color) => renderTemplate`<div class="flex flex-row items-center"> <div class="w-3 h-3 border border-gray-300"${addAttribute({ backgroundColor: color }, "style")}></div> </div>`)} </span> <span class="p-3">Talla</span> <span class="hidden flex-row gap-2 w-full md:flex"> <!-- Favorite buttton mobil --> <span class="relative bg-primary dark:bg-secondary p-3 shadow-lg rounded-md border-silver border"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 31 5 26c-3-5 3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0"></path></svg> </span> <button type="button" class="text-white w-full justify-center bg-blue-700 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"> <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"> <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path> </svg>
AL CARRITO
</button> </span> </div> </figure> </article> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/productos/ItemSingle.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let producto;
  if (id === void 0) {
    console.error("El ID del producto es undefined");
  } else {
    const productoPromise = getProductoById(id);
    producto = await productoPromise;
    console.log("SLUG PRODUCT GET: " + JSON.stringify(producto));
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "producto", "subtitle": producto.id }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ItemSingle", $$ItemSingle, { "url_imagen": producto.url_imagen, "title": producto.title, "subtitle": producto.subtitle, "price": producto.precio, "arrayColor": producto.colores })} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/producto/[id].astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/producto/[id].astro";
const $$url = "/producto/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, supabase as s };
