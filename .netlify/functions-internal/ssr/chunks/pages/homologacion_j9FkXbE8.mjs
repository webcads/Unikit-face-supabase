import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute, l as renderTransition } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DUAG0DTE.mjs';
/* empty css                          */

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Homologacion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Homologacion;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex flex-col md:flex-row gap-5 justify-between" style="padding: 5.6vw"${addAttribute(renderTransition($$result2, "t5fejfjl", "", "homologacion"), "data-astro-transition-scope")}> <h1 class="text-secondary dark:text-white">Homologacion</h1> </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/homologacion.astro", "self");

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/homologacion.astro";
const $$url = "/homologacion";

export { $$Homologacion as default, $$file as file, $$url as url };
