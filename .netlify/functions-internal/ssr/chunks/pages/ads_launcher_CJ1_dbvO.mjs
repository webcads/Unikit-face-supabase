import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { c as clientData, $ as $$Layout } from './404_DUAG0DTE.mjs';
import { a as $$BgAbout } from './about-us_DgF156oL.mjs';
import 'clsx';
/* empty css                                 */

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$LogoCAD = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LogoCAD;
  const { zoom, theme, theme_text, text } = Astro2.props;
  return renderTemplate`<meta charset="UTF-8"><!-- CAT here -->${maybeRenderHead()}<div class="cont-cat"${addAttribute(`display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0px;
    justify-content: start;
zoom : ${zoom}`, "style")} data-astro-cid-ztj2ynza> <div class="cat" style="
	max-height: 62px;
	z-index: 1;
	line-height: normal;
	" data-astro-cid-ztj2ynza> <div class="ear-line" data-astro-cid-ztj2ynza> <div class="ear-left"${addAttribute(`color: ${theme}`, "style")} data-astro-cid-ztj2ynza>^</div> <div class="ear-right"${addAttribute(`color: ${theme}`, "style")} data-astro-cid-ztj2ynza>^</div> </div> <div class="face-line"${addAttribute(`color: ${theme}`, "style")} data-astro-cid-ztj2ynza>&lt;&gt;</div> <div class="body-line third-color second-color "${addAttribute(`color: ${theme}; color: ${theme_text}`, "style")} data-astro-cid-ztj2ynza>Δ</div></div> <h1 class="title primary-color font-size-cat"${addAttribute(`color: #636363;
	font-size: 2.5rem;
	letter-spacing: 2px;
    line-height: 2;
	max-height: 70px;	
	font-weight: 500;
	translate: 1.8px 0px;
	color: ${theme}`, "style")} data-astro-cid-ztj2ynza>${text}</h1> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/CADD/logo-CAD.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$CardContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardContact;
  return renderTemplate`${maybeRenderHead()}<section class="section flex flex-row items-center justify-center"> <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="flex justify-end px-4 pt-4"> <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button"> <span class="sr-only">Open dropdown</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3"> <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path> </svg> </button> <!-- Dropdown menu --> <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"> <ul class="py-2" aria-labelledby="dropdownButton"> <li> <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Estamos esperando</a> </li> <li> <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tu mensaje</a> </li> <li> <a class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">!</a> </li> </ul> </div> </div> <div class="flex flex-col items-center pb-10"> <!-- <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> --> ${renderComponent($$result, "LogoCAD", $$LogoCAD, { "theme": "current", "theme_text": "", "font": "Roboto Mono Variable" })} <h5${addAttribute(`mb-1 text-xl font-medium text-gray-900 dark:text-white`, "class")}>${void 0}</h5> <span class="text-sm p-5  text-center text-gray-500 dark:text-gray-400">💬Agregar,escribir, contactar...</span> <div class="flex  "> <a${addAttribute(`https://wa.me/${clientData.phone}?text=Add%20CAD!`, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white border border-gray-300 bg-[#00aeff] rounded-lg hover:bg-third hover:text-gray focus:ring-4 focus:outline-none focus:ring-blue-300 bg-secondary  dark:bg-transparent dark:hover:bg-third dark:focus:ring-blue-800">Add contact</a> <a${addAttribute(`mailto:${clientData.email}`, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a> </div> </div> </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/CardContact.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$AdsLauncher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdsLauncher;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ads", "subtitle": "Anuncios y publicidad, asesorias, ingresos, ventas, catalogo productos, redes sociales, SEO, google ads " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex flex-col md:flex-row text-secondary dark:text-primary" style="padding: 0; padding-top: 150px;"> <span class="flex-1"> ${renderComponent($$result2, "BgAbout", $$BgAbout, {})} </span> <div class="p-10 flex-1"> <h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl pb-5 md:pb-10 ">
lanzador de anuncios
</h1> <p class="pb-10">
Descubre nuestro servicio de Lanzador de Anuncios, donde creamos impactantes carteles y recursos publicitarios para tu negocio. Nos encargamos de colocar estratégicamente tu contenido en la red social que prefieras, maximizando tu visibilidad y atrayendo a tu audiencia objetivo.
</p> <a href="/ads" type="button" class="w-fit text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
Comprar Plan Publicitario
</a> </div> </section> ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/ads_launcher.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/ads_launcher.astro";
const $$url = "/ads_launcher";

const ads_launcher = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AdsLauncher,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardContact as $, $$LogoCAD as a, ads_launcher as b };
