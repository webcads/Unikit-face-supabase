/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';
import { $ as $$CardContact } from './ads_launcher_lYgouatC.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$DataManagment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DataManagment;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ads", "subtitle": "Anuncios y publicidad, asesorias, ingresos, ventas, catalogo productos, redes sociales, SEO, google ads " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" section flex flex-col gap-10 text-secondary dark:text-primary"> <h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl pb-5 md:pb-10">
Gestion de Datos/Interfaz Admin
</h1> <p>
Bienvenido a nuestra sección de <strong>"Gestión de Datos/Interfaz Admin"</strong>. Aquí, le ofrecemos un CMS de última tecnología que le brinda control total sobre su contenido. Actualice catálogos, modifique el contenido de su página y más, todo sin necesidad de un programador. Usted tiene el control total, todo el tiempo.
</p> <p>
Utilizamos tecnologías avanzadas como Strapi para ofrecer una interfaz admin intuitiva, permitiéndote control total sobre tu contenido sin necesidad de conocimientos técnicos.
</p> <div class=""> <img class="rounded-xl" src="/services/strapi.jpeg"${addAttribute(600, "width")}${addAttribute(600, "height")} alt="strapi System"> </div> <a href="/web" type="button" class="w-fit text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Comprar Plan para Gestion de Datos</a> </section> ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/data_managment.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/data_managment.astro";
const $$url = "/data_managment";

export { $$DataManagment as default, $$file as file, $$url as url };
