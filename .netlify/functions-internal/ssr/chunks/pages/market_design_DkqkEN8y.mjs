/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$CardContact } from './ads_launcher_lYgouatC.mjs';
import { $ as $$Layout } from './404_DygpA27W.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$MarketDesign = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarketDesign;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ads", "subtitle": "Anuncios y publicidad, asesorias, ingresos, ventas, catalogo productos, redes sociales, SEO, google ads " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" section flex flex-col gap-10 text-secondary dark:text-primary"> <h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl pb-5 md:pb-10">
Diseño de Marketing
</h1> <p>
Bienvenido a nuestra sección de <strong>"Diseño de Marketing"</strong>. Aquí, fusionamos creatividad y estrategia para dar vida a la
            esencia de tu empresa.
</p> <p>
Desde la creación de una identidad visual única hasta el diseño
            cautivador de logos y elementos gráficos, nuestro enfoque integral
            de Market Design destaca tu marca en el competitivo mundo del
            marketing.
</p> <p>
Sumérgete en nuestra galería visual y descubre cómo potenciamos la
            presencia de tu negocio con un diseño estratégico y persuasivo que
            va más allá de lo estético.
</p> <a href="/design" type="button" class="w-fit text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Comprar Plan de Diseño</a> </section> ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/market_design.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/market_design.astro";
const $$url = "/market_design";

export { $$MarketDesign as default, $$file as file, $$url as url };
