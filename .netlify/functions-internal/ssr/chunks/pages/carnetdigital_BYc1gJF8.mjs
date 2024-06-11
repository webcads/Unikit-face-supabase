/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, j as renderComponent, l as renderTransition } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';
import 'clsx';
/* empty css                                  */
import { s as supabase } from './_id__Df5Y-dOD.mjs';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Carnet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carnet;
  const { foto, nombres, apellidos, identificacion, tipo_sangre, rol } = Astro2.props;
  const nombresLowerCase = nombres.toLowerCase();
  return renderTemplate(_a || (_a = __template(["", '<div class="card rotated rounded-[3px] " style="width: 7.5cm; height: 11.5cm;" data-astro-cid-ppuoqqn4> <div class="card-contents card-back" data-astro-cid-ppuoqqn4> <div class="card-depth flex flex-col items-center text-black h-full" style="width: 100%; padding: 0; margin: 0px;" data-astro-cid-ppuoqqn4> <!-- header --> <div class="flex-1 w-full relative" style="max-height: 106px; " data-astro-cid-ppuoqqn4> <div', ' data-astro-cid-ppuoqqn4></div> <span class="w-full flex flex-row gap-5 p-2 justify-start" style="min-width: 100%; background: #1d3585; padding-top: 3px; padding-left: 30px; height: 70px;\n        background: linear-gradient(88deg, #1A3484, #1a3485 40%, #1a348599);" data-astro-cid-ppuoqqn4> <span class="absolute" style="min-width: 120px;\n      height: 90px;\n      background: #1d3585;\n      position: absolute;\n      z-index: 0;\n      margin-left: -24px;\n      margin-top: -14px;\n      border-radius: 100%;" data-astro-cid-ppuoqqn4></span> <img class="" src="https://simca.unicauca.edu.co/simca/resources/images/logo.png" alt="" style="filter: invert(0); width: 160px; padding-left: 1px;" data-astro-cid-ppuoqqn4> </span> </div> <!-- picture --> <div class="flex-1 h-[30%] overflow-hidden" style="height: 30%;" data-astro-cid-ppuoqqn4> <span class="overflow-hidden relative" style="width: 100px;height: 130px;" data-astro-cid-ppuoqqn4> <img class="mb-3 block rounded-xs shadow-lg"', ' alt="person image" style="width: 2.8cm; height:3.7cm; margin: 20px" data-astro-cid-ppuoqqn4> </span> </div> <!-- footer --> <div class="flex-1 h-[30%] overflow-hidden flex flex-col w-full" style="height: 30%;" data-astro-cid-ppuoqqn4> <h5 class="mb-0 text-xl  capitalize" data-astro-cid-ppuoqqn4>', '</h5> <h5 class="mb-0 text-xl uppercase" data-astro-cid-ppuoqqn4>', '</h5> <span class="text-sm text-black" data-astro-cid-ppuoqqn4>', '</span> <span class="text-sm text-black" data-astro-cid-ppuoqqn4>RH. ', "</span> <div data-astro-cid-ppuoqqn4> <span", ' data-astro-cid-ppuoqqn4> <div class="flex-1 flex flex-row" style="max-width: 20%;" data-astro-cid-ppuoqqn4> <span class="w-1 h-full block bg-amarillo ml-[20px]" data-astro-cid-ppuoqqn4></span> <span class="w-8 h-full block bg-amarillo ml-[2px]" data-astro-cid-ppuoqqn4></span> </div> <div class="flex-1" data-astro-cid-ppuoqqn4> <h6 class="pt-2 pb-2 pl-2 pr-2 text-xl uppercase w-full text-black font-bold" style="text-align: center; background:#d53b00; " data-astro-cid-ppuoqqn4> ', ` </h6> </div> <div class="flex-1 flex flex-row" style="max-width: 20%;" data-astro-cid-ppuoqqn4></div> </span> <span class="w-full h-full block" style="background: #1d3585; width: 100%;" data-astro-cid-ppuoqqn4></span> </div> </div> </div> </div> <div class="card-contents card-front" data-astro-cid-ppuoqqn4> <div class="card-depth" data-astro-cid-ppuoqqn4> <h2 class="" style="font-size: 2.5rem;" data-astro-cid-ppuoqqn4>QR Autenticaci\xF3n</h2> <hr data-astro-cid-ppuoqqn4> <p data-astro-cid-ppuoqqn4>Volver al frente</p> </div> </div> </div> <script>
  
 const card = document.querySelector('.card');

function clickRotate() {
  card.classList.toggle('rotated');
}
card.addEventListener('click', clickRotate);


  window.addEventListener("DOMContentLoaded", function () {
    
 });
  document.addEventListener("astro:after-swap", () => {
     
  });
<\/script>`])), maybeRenderHead(), addAttribute(`bg-rojo flex justify-end w-full px-4 pt-2 h-[40px]`, "class"), addAttribute(foto, "src"), nombresLowerCase, apellidos, identificacion, tipo_sangre, addAttribute(`flex flex-row bg-rojo`, "class"), rol);
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/resources/Carnet.astro", void 0);

async function getUserDataByEmail(email) {
    console.log("Email del usuario:" +  email);
    try {
        let { data: usuario, error } = await supabase
            .from('usuario')
            .select('*')
            .eq('id', email)
            .single();
        
        if (error) {
            console.error('Error al recuperar datos del usuario:', error.message);
            return null;
        }

        return usuario;
    } catch (error) {
        console.error('Error al recuperar datos del usuario:', error.message);
        return null;
    }
}

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Carnetdigital = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carnetdigital;
  const usuarioPromise = getUserDataByEmail(6);
  const usuario = await usuarioPromise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "UniKit", "subtitle": "Carnet Digital Unicauca" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex flex-col gap-5 justify-between items-center" style="padding: 5.6vw"${addAttribute(renderTransition($$result2, "szqkmnqm", "", "homologacion"), "data-astro-transition-scope")}> <h1 class="text-secondary dark:text-white">Carnet Digital Unicauca</h1> ${renderComponent($$result2, "Carnet", $$Carnet, { "foto": usuario.picture, "nombres": usuario.nombres, "apellidos": usuario.apellidos, "identificacion": "0123456789", "tipo_sangre": "O+", "rol": "Estudiante" })} </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/carnetdigital.astro", "self");

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/carnetdigital.astro";
const $$url = "/carnetdigital";

export { $$Carnetdigital as default, $$file as file, $$url as url };
