import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DUAG0DTE.mjs';
import { $ as $$GalleryComp } from './gallery-details_D0Il_fTZ.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery", "subtitle": "Birdwatching Tours and Experiences, Nature Explorations, Immerse in Birdwatching Tours, Nature Escapes, and Unique Experiences Showcase" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryComp", $$GalleryComp, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
