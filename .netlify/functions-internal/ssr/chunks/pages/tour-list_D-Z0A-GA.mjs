/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';
import { f as fetchApi } from './_slug__D3AVj9Ht.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$CardTour = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardTour;
  const { slug, img, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <a href="#"> <img class="rounded-t-lg"${addAttribute(img, "src")} alt=""> </a> <div class="p-5"> <a href="#"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5> </a> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5">${description}</p> <a${addAttribute(`/tours/${slug}/`, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Read more
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/resources/CardTour.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$ListTour = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListTour;
  const tours = await fetchApi({
    endpoint: "tours?populate=image",
    // the content type to fetch
    wrappedByKey: "data"
    // the key to unwrap the response
  });
  const reversedTours = tours.reverse();
  console.log("/////////////fetching articles///////////// " + tours);
  return renderTemplate`${maybeRenderHead()}<section class="section flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 justify-center items-center " style="background: white;"> ${reversedTours.map((tour) => renderTemplate`<div class="md:pt-0 pt-0"> ${renderComponent($$result, "CardTour", $$CardTour, { "slug": tour.attributes.slug, "img": tour.attributes.image.data?.attributes.url, "title": tour.attributes.title, "description": tour.attributes.description })} </div>`)} </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/listTour.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$TourList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TourList;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tour List", "subtitle": "Colombia Tour The Best Tour Top Tour" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ListTour", $$ListTour, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/tour-list.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/tour-list.astro";
const $$url = "/tour-list";

export { $$TourList as default, $$file as file, $$url as url };
