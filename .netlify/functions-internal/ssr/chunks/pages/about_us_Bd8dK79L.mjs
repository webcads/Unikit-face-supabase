import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$Layout } from './404_DUAG0DTE.mjs';
import { $ as $$About } from './about-us_DgF156oL.mjs';
import '@astrojs/internal-helpers/path';
/* empty css                             */

const team = [
	{
		image: "/team/castell.svg",
		name: "Ivan E. Castillo",
		carrer: "Ingeniero de Sistemas"
	},
	{
		image: "/team/core.svg",
		name: "@core_banner",
		carrer: "Diseñador Grafico"
	},
	{
		image: "/team/member3.svg",
		name: "Mónica Castillo",
		carrer: "Diseñadora Grafica"
	},
	{
		image: "/team/member4.svg",
		name: "Force Staff",
		carrer: "Arte Digital"
	}
];

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Team;
  console.log(team);
  return renderTemplate`${maybeRenderHead()}<div id="teams" class="section" data-astro-cid-opn3u5li> <span class="bg-current flex justify-center align-middle" data-astro-cid-opn3u5li> <h6 class="text-5xl font-bold text-center pb-2 bg-transparent text-white" data-astro-cid-opn3u5li>
Team
</h6> </span> <!-- wrapper teams --> <ul class="flex flex-col md:flex-row flex-wrap pt-20 pb-20 justify-center items-center gap-10 md:gap-10" data-astro-cid-opn3u5li> <!-- <Icon name={service['name-icon']}  ></Icon>                                                                               --> ${team.map((member) => renderTemplate`<li${addAttribute(member.name, "key")} class="flex flex-col  justify-center " data-astro-cid-opn3u5li> <div class="p-9 pt-6 m-4 border border-none hover:border-8 hover:border-cyan-300 relative"${addAttribute(`border-radius: 50%; min-width: 120px; max-width: 180px;   min-height: 120px; max-height: 180px; overflow: hidden; animation: floatAnimation 2s infinite alternate; `, "style")} data-astro-cid-opn3u5li> ${renderComponent($$result, "Image", $$Image, { "src": `${member.image}`, "width": 200, "height": 200, "alt": "img user", "style": "width: 100%; height: 100%; object-fit: fit;", "data-astro-cid-opn3u5li": true })} <div class="absolute inset-x-0 bottom-0 mx-auto bg-black/20" style="width: 50px; height: 10px; border-radius: 50%;" data-astro-cid-opn3u5li></div> </div> <a href="#" data-astro-cid-opn3u5li> <h5 class=" font-semibold tracking-tight text-center text-gray-700 dark:text-silver" data-astro-cid-opn3u5li> ${member.name} </h5> <p class=" mt-5  tracking-tight bg-dark text-center text-gray-100" data-astro-cid-opn3u5li> ${member.carrer} </p> </a> </li>`)} </ul> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/landing/Team.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ads", "subtitle": "Anuncios y publicidad, asesorias, ingresos, ventas, catalogo productos, redes sociales, SEO, google ads " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" text-secondary dark:text-primary"> ${renderComponent($$result2, "About", $$About, {})} </section> <section class=""> ${renderComponent($$result2, "Team", $$Team, {})} </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/about_us.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/about_us.astro";
const $$url = "/about_us";

export { $$AboutUs as default, $$file as file, $$url as url };
