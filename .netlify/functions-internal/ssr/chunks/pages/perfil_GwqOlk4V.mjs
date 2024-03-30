import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DUAG0DTE.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Perfil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Perfil;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex flex-col md:flex-row gap-5 justify-between" style="padding: 5.6vw"> <h1 class="text-secondary dark:text-white ">Perfil</h1> </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/perfil.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/perfil.astro";
const $$url = "/perfil";

export { $$Perfil as default, $$file as file, $$url as url };
