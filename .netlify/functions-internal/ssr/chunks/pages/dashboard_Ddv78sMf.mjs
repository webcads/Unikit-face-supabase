/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';
import { s as supabase } from './_id__Df5Y-dOD.mjs';
import 'clsx';
/* empty css                              */

const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$ToolCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToolCard;
  return renderTemplate`${maybeRenderHead()}<a href="/homologacion" class="flex w-[fit] md:w-[300px] flex-col md:items-start md_items-start items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" data-astro-cid-5malqec3> <span class="p-2 dark:text-white text-xs" data-astro-cid-5malqec3> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-5malqec3><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5malqec3><g stroke-width="1" data-astro-cid-5malqec3><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H19V21H5V3H12Z" data-astro-cid-5malqec3><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0" data-astro-cid-5malqec3></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13H15" data-astro-cid-5malqec3><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0" data-astro-cid-5malqec3></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10V16" data-astro-cid-5malqec3><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0" data-astro-cid-5malqec3></animate></path></g><path stroke-dasharray="12" stroke-dashoffset="12" d="M14.5 3.5V6.5H9.5V3.5" data-astro-cid-5malqec3><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0" data-astro-cid-5malqec3></animate></path></g></svg> </span> <div class="flex flex-col justify-between p-2 md:p-4 leading-normal" data-astro-cid-5malqec3> <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-astro-cid-5malqec3>
Homologar Materias
</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" data-astro-cid-5malqec3>
Aqui podras llenar tu formulario de peticion con las
            asignatuiras que deseas homologar.
</p> </div> </a>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/resources/ToolCard.astro", void 0);

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$ProfilCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProfilCard;
  return renderTemplate`${maybeRenderHead()}<div class="cursor-pointer flex-1 text-center"> <!-- <img class="w-10 h-10 rounded" src="https://github.com/shadcn.png" alt="Default avatar"> --> <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="flex justify-end px-4 pt-4"> <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button"> <span class="sr-only">Open dropdown</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3"> <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path> </svg> </button> <!-- Dropdown menu --> <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"> <ul class="py-2" aria-labelledby="dropdownButton"> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a> </li> </ul> </div> </div> <div class="flex flex-col items-center pb-10"> <img class="w-24 h-24 mb-3 rounded-full shadow-lg floating-effect" src="https://github.com/shadcn.png" alt="user image"> <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
Ivan Esteban Castillo
</h5> <span class="text-sm text-gray-500 dark:text-gray-400">Enginner Of Systems</span> <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span> <div class="flex mt-4 md:mt-6"> <a href="/carnetdigital" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Carnet Digital</a> <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> </div> </div> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/resources/ProfilCard.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Dashboard$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Dashboard$1;
  return renderTemplate`${maybeRenderHead()}<section class="section flex flex-col md:flex-row gap-5 justify-between" style="padding: 5.6vw; padding-top: 7vw;"> <!-- perfil --> ${renderComponent($$result, "ProfilCard", $$ProfilCard, {})} <!-- procedimientos --> <div class="flex-1 text-center md:text-start md_text-start text-sm md:text-lg"> <ul class="flex flex-row md:flex-row  gap-1 md:gap-5 md:flex-wrap"> <li> ${renderComponent($$result, "ToolCard", $$ToolCard, {})} </li> <li> ${renderComponent($$result, "ToolCard", $$ToolCard, {})} </li> </ul> </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/Dashboard.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/api/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/api/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome ${email}</h1> <p>We are happy to see you here</p> ${renderComponent($$result2, "Dashboard", $$Dashboard$1, {})} <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/api/dashboard.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/api/dashboard.astro";
const $$url = "/api/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Dashboard$1 as $, dashboard as d };
