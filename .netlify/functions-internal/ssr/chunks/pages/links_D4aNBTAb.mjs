/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$LinksGenerator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinksGenerator;
  const { img_ruta, titulo, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="flex flex-row w-full relative max-w-[320px] shadow-lg leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-lg dark:bg-gray-700"> <img class="w-8 h-8 rounded-full"${addAttribute(img_ruta, "src")} alt="Jese image"> <span class="flex flex-col" style="overflow: hidden;"> <div class="flex items-center space-x-2 rtl:space-x-reverse"> <span class="text-sm font-semibold text-gray-900 dark:text-white">${titulo}</span> <!-- <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span> --> </div> <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white line-clamp-1" style="line-clamp: 1;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;"> ${link} </p> </span> <!-- <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span> --> <!-- opciones --> <span class="opciones absolute top-0 right-0"> <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15"> <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path> </svg> </button> <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Abrir en nueva pestaña</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a> </li> </ul> </div> </span> </a>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/resources/LinksGenerator.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Links = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Links;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "unikit", "subtitle": "Generador de links" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section min-h-20 bg-green gap-5" style="gap: ; padding-top: 100px; height: max-content;  padding: 5.6vw; padding-top: 8vw;"> <h1 class="text-4xl uppercase" style="padding-bottom: 50px;">
Generador de links
</h1> <div class="gap-5 flex flex-col md:flex-row flex-wrap"> ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://simca.unicauca.edu.co/simca/resources/images/logo-simca.png", "titulo": "SIMCA", "link": "https://simca.unicauca.edu.co" })} ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://www.gstatic.com/classroom/logo_square_rounded.svg", "titulo": "Classroom", "link": "https://classroom.google.com/" })} ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://www.gstatic.com/classroom/logo_square_rounded.svg", "titulo": "Classroom", "link": "https://classroom.google.com/" })} ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://www.gstatic.com/classroom/logo_square_rounded.svg", "titulo": "Classroom", "link": "https://classroom.google.com/" })} ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://www.gstatic.com/classroom/logo_square_rounded.svg", "titulo": "Classroom", "link": "https://classroom.google.com/" })} ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://www.gstatic.com/classroom/logo_square_rounded.svg", "titulo": "Classroom", "link": "https://classroom.google.com/" })} ${renderComponent($$result2, "LinksGenerator", $$LinksGenerator, { "img_ruta": "https://www.gstatic.com/classroom/logo_square_rounded.svg", "titulo": "Classroom", "link": "https://classroom.google.com/" })} </div> </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/links.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/links.astro";
const $$url = "/links";

export { $$Links as default, $$file as file, $$url as url };
