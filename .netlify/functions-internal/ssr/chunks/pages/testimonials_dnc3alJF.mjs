/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, h as addAttribute } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';
import { f as fetchApi, $ as $$SectionTitle } from './_slug__D3AVj9Ht.mjs';

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Testimonials$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials$1;
  const testimonies = await fetchApi({
    endpoint: "testimonies?populate=image",
    // the content type to fetch
    wrappedByKey: "data"
    // the key to unwrap the response
  });
  console.log("/////////fetching testimonials/////////// " + testimonies);
  return renderTemplate`<!-- <img class="rounded-full w-9 h-9" src={import.meta.env.STRAPI_URL + testimony.attributes.image.data?.attributes.url}  -->${maybeRenderHead()}<section id="testimonials" class="section" style="background: white;"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Testimonials", "subtitle": "Read the experience from our adventurers." })} <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800"> ${testimonies.map((testimony) => renderTemplate`<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"> <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${testimony.attributes.title}</h3> <p class="my-4">${testimony.attributes.description}</p> </blockquote> <figcaption class="flex items-center justify-center "> <img class="rounded-full w-9 h-9"${addAttribute(testimony.attributes.image.data?.attributes.url, "src")} alt="profile picture"> <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"> <div>Bonnie Green</div> <div class="text-sm text-gray-500 dark:text-gray-400 ">${testimony.attributes.profession}</div> </div> </figcaption> </figure>`)} </div></section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/landing/Testimonials.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testimonials", "subtitle": "The best Tour best guides experts friendly tour easy tour" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Testimonials", $$Testimonials$1, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/testimonials.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/testimonials.astro";
const $$url = "/testimonials";

export { $$Testimonials as default, $$file as file, $$url as url };
