import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { c as clientData, $ as $$Layout } from './404_DUAG0DTE.mjs';
import 'clsx';
/* empty css                        */
/* empty css                        */

const $$Astro$4 = createAstro("https://castelll0009.github.io");
const $$PricingCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PricingCard;
  const { title, subtitle, price, duration, availableItems, unavailableItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-full min-w-[280px] max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${title === "Cheaper" ? "bg-standard" : title === "Recomended" ? "bg-silver-gradient rotate-bg" : title === "Premium CAD(Code, Delta, Ads)" ? "bg-golden hover:rotate-bg" : ""}`, "class")} data-astro-cid-io5odsym> <h5 class="mb-4 text-lg font-medium text-gray-500 dark:text-gray" data-astro-cid-io5odsym>${title}</h5> <h5 class="mb-4 text-lg font-medium text-gray-500 dark:text-gray" data-astro-cid-io5odsym>${subtitle}</h5> <div class="flex items-baseline text-gray-900 dark:text-secondary" data-astro-cid-io5odsym> <span class="text-xl font-semibold" data-astro-cid-io5odsym>$</span> <span class="text-3xl font-extrabold tracking-tight" data-astro-cid-io5odsym>${price}</span> <span class="ms-1 text-sm font-normal text-gray-500 dark:text-secondary" data-astro-cid-io5odsym>/${duration}</span> </div> <ul role="list" class="space-y-2 my-4 list-none" data-astro-cid-io5odsym> ${availableItems?.map((item, index) => renderTemplate`<li${addAttribute(index, "key")} class="flex items-cente  " data-astro-cid-io5odsym> <svg class="flex-shrink-0 w-3 h-3 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-io5odsym> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-astro-cid-io5odsym></path> </svg> <span class="text-xs font-normal text-secondary dark:text-[gray] leading-tight text-gray-500 dark:text-gray-400 ms-2" data-astro-cid-io5odsym>${item}</span> </li>`)}  ${unavailableItems?.map((item, index) => renderTemplate`<li${addAttribute(index, "key")} class="flex items-center line-through decoration-gray-500" data-astro-cid-io5odsym> <svg class="flex-shrink-0 w-3 h-3 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-io5odsym> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-astro-cid-io5odsym></path> </svg> <span class="text-xs font-normal text-secondary dark:text-text-[gray] leading-tight text-gray-500 dark:text-gray-400 ms-2" data-astro-cid-io5odsym>${item}</span> </li>`)} </ul> <a${addAttribute(`https://wa.me/${clientData.phone}?text=Choose%20${encodeURIComponent(Astro2.props.category)}%20Plan:%20${encodeURIComponent(title)}%20Price:%20${encodeURIComponent(price)}`, "href")}${addAttribute(`text-secondary hover:text-white ${title === "Cheaper" ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-200 dark:focus:ring-blue-900" : title === "Recomended" ? "hover:bg-silver dark:hover:bg-silver-dark focus:ring-silver dark:focus:ring-silver-dark" : title === "Premium CAD(Code, Delta, Ads)" ? "hover:bg-gold dark:hover:bg-gold-dark focus:ring-gold dark:focus:ring-gold-dark" : ""} font-medium rounded-lg text-sm px-4 py-2 inline-flex justify-center w-full text-center`, "class")} data-astro-cid-io5odsym>
Choose plan
</a> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/PricingCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$AdsAnimation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AdsAnimation;
  const { arraytext } = Astro2.props;
  console.log("dentro de AdsAnimation" + arraytext);
  return renderTemplate(_a || (_a = __template(["<!--The container div is here to center the text horizontally and vertically.-->", '<div class="container " data-astro-cid-deeqljnz> <!--The actual text placeholder, which will be write with the js code.--> <h2 id="text" style="min-height: fit-content;\n    min-width: 100%;" data-astro-cid-deeqljnz></h2> </div> <script>\n//Define the placeholder where the text will be write in thanks to his id.\nlet placeholder = document.getElementById("text");\n//Stock all of the sentences pieces in an array.\n\nlet words = ["Hola! \xBFComo estas?","Te vamos a acompa\xF1ar en tu proceso","No esperes mas Run it up now!"];\n\n// let words = ["texto1","texto2","texto3"];\n//Initialize the index at the first element of the previously created array.\nlet index = 0;\nfunction type(word){\n    let i = 0;\n		//Set the interval that makes the writing animation.\n    let writing = setInterval(()=>{\n				//Add the letter at the i index of the current word in the placeholder.\n        placeholder.innerHTML += word.charAt(i);\n        i ++;\n				//If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.\n        if(i>=word.length){\n            clearInterval(writing);\n            setTimeout(erase, 1000);\n        }\n    }, 75)\n\n}\n\nfunction erase(){\n	//Set the interval that makes the deleting animation.\n    let deleting = setInterval(() => {\n				//Pop off the last character of the previously written sentence.\n        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);\n				//If no one single letter remains, the deleting animation interval stops.\n        if(placeholder.innerHTML.length <= 0){\n            clearInterval(deleting);\n						//The index var increases by 1, the writing animation is about to start with the next sentence.\n            index++;\n						//If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.\n            if(index>=words.length){\n                index = 0;\n            }\n            type(words[index])\n        }\n    \n        \n    }, 25);\n\n}\n\n//  // Verifica si se proporciona un arreglo de texto en las props\n//  if (Astro.props.arraytext && Astro.props.arraytext.length > 0) {\n//     // Si se proporciona, utiliza ese arreglo en lugar del arreglo predeterminado\n//     words = Astro.props.arraytext;\n//   } else {\n//     // De lo contrario, utiliza el arreglo predeterminado\n//     words = {arraytext};\n//   }\n\n  type(words[index]);\n<\/script>'])), maybeRenderHead());
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/AdsAnimation.astro", void 0);

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$CadAds = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CadAds;
  const { w, h, primary, secondary } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="none"${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 256 270" fill="none" xmlns="http://www.w3.org/2000/svg" class="_icon_8f9jq_6"><path d="M189.213 214.049L152.722 154.442H155.015C184.054 154.442 202.586 125.593 190.359 101.329C189.977 100.374 189.404 99.4189 188.831 98.6547L170.872 69.233L154.633 42.4859L141.259 20.515C139.158 16.8851 136.483 13.8282 133.426 11.3445C118.906 -0.882739 96.3622 -0.882739 81.8424 11.3445C78.7856 13.8282 76.1107 17.0761 73.8181 20.706L60.6355 42.4859L44.7785 68.6597L26.4376 98.6547C26.0555 99.4189 25.6733 99.9921 25.2912 100.756C12.4908 125.211 31.2137 154.442 60.6355 154.251H62.9283L26.8197 213.858C11.7266 238.695 30.6408 269.645 60.8268 269.454H64.0746L155.397 269.263C156.352 269.263 157.307 269.263 158.263 269.072C178.323 267.735 192.652 252.642 194.371 235.447C195.135 228.76 193.607 221.118 189.213 214.049ZM73.6271 96.1711L95.2159 60.6357C100.756 51.4653 114.703 51.4653 120.244 60.6357L141.832 95.9801C147.373 105.151 140.495 116.614 129.414 116.614H86.2364C74.9644 116.614 68.0866 105.15 73.6271 96.1711ZM129.605 231.817H86.4274C75.3465 231.817 68.2776 220.354 73.8181 211.184L95.4069 175.648C100.947 166.478 114.894 166.478 120.435 175.648L142.023 210.993C147.755 220.354 140.877 231.817 129.605 231.817Z" fill="currentColor"></path><path d="M138.967 129.605L76.684 129.796C60.6357 129.796 50.5101 113.365 58.5342 100.183L89.6756 48.9811C97.6997 35.7986 117.76 35.7986 125.784 48.9811L157.116 99.9917C165.14 112.983 155.015 129.605 138.967 129.605Z"${addAttribute(secondary, "fill")}></path><path d="M129.605 231.817H86.4274C75.3465 231.817 68.2776 220.354 73.8181 211.184L95.4069 175.648C100.947 166.478 114.894 166.478 120.435 175.648L142.023 210.992C147.755 220.354 140.877 231.817 129.605 231.817Z" fill="currentColor"></path><path d="M129.605 231.817H86.4274C75.3465 231.817 68.2776 220.354 73.8181 211.184L95.4069 175.648C100.947 166.478 114.894 166.478 120.435 175.648L142.023 210.992C147.755 220.354 140.877 231.817 129.605 231.817Z"${addAttribute(secondary, "fill")}></path><path d="M221.309 269.262L158.263 269.644C178.323 268.307 192.652 253.214 194.371 236.019H198.574C208.318 236.019 214.431 225.894 209.464 217.87L178.705 167.623C167.815 149.856 195.135 132.852 207.363 149.856C207.745 150.429 208.318 151.193 208.7 151.766L250.922 219.971C264.105 241.942 247.865 269.262 221.309 269.262Z" fill="currentColor"></path><path d="M106.679 13.6371C103.24 15.5476 99.8009 18.0313 96.9351 21.2791L79.3586 40.1932L54.713 35.4169C45.5425 33.6975 37.7096 41.9126 40.7664 50.3189L50.1277 77.6391L26.0554 103.622C25.4822 104.195 24.9092 104.768 24.5271 105.533L2.17402 41.1485C-5.85011 18.4134 15.1656 -4.1306 40.0022 0.645672L106.679 13.6371Z" fill="currentColor"></path><path d="M111.073 16.1207C114.512 18.0312 117.951 20.5149 120.817 23.7628L138.393 42.6768L163.039 37.9006C172.209 36.1811 180.042 44.3963 176.986 52.8025L167.624 80.1227L191.697 106.106C192.27 106.679 192.843 107.252 193.225 108.016L215.578 43.6321C223.602 20.8971 202.586 -1.64695 177.75 3.12931L111.073 16.1207Z" fill="currentColor"></path><path d="M134.572 75.5381H126.93V83.1801H134.572V75.5381Z" fill="currentColor"></path><path d="M127.121 68.0872H119.479V75.7292H127.121V68.0872Z" fill="currentColor"></path><path d="M119.479 75.5381H111.837V83.1801H119.479V75.5381Z" fill="currentColor"></path><path d="M111.837 90.822H104.195V98.4641H111.837V90.822Z" fill="currentColor"></path><path d="M104.195 75.5381H96.5532V83.1801H104.195V75.5381Z" fill="currentColor"></path><path d="M96.7443 68.0872H89.1022V75.7292H96.7443V68.0872Z" fill="currentColor"></path><path d="M89.1022 75.5381H81.4602V83.1801H89.1022V75.5381Z" fill="currentColor"></path></svg>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/CadAds.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$CADTalking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CADTalking;
  const { color, arrayText } = Astro2.props;
  console.log("Color:", color);
  console.log("ArrayText:" + arrayText);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row pt-10 text-secondary dark:text-primary"> <div class="flex-1 p-10 pt-5  min-w-[100%] md:min-w-[70%]" style="min-height:120px;
    max-height: 120px;
     "> ${renderComponent($$result, "AdsAnimation", $$AdsAnimation, { "arraytext": arrayText })} </div> <div class="flex-1"> ${renderComponent($$result, "CadAds", $$CadAds, { "w": "100", "secondary": color, "h": "100" })} </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/CADTalking.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Ads = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ads;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ads", "subtitle": "Anuncios y publicidad, asesorias, ingresos, ventas, catalogo productos, redes sociales, SEO, google ads " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section text-secondary dark:text-primary"> <h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl pb-5 md:pb-10">
Ads, Marketing anuncios paga publicidad
</h1> <p>
En CAD, estamos aquí para ayudarte a establecer un ciclo de ingresos
            infinitos.
<br> <br>
Comenzando con la inversión en anuncios en plataformas
            como Facebook, Instagram, YouTube o Google Ads, lograrás una rápida
            visibilidad ante tus clientes.
<br> <br>
Ya sea que estés iniciando un nuevo negocio o que tu empresa ya este funcionando, si tu sitio web es diseñado por nosotros, contará
            con la arquitectura necesaria para posicionarse más rápidamente que otros.
</p> </section> <section class="section"> <div class="pt-10"> <h2 class="text-2xl md:text-5xl lg:text-3xl xl:text-3xl text-secondary pb-5 md:pb-10 dark:text-primary">
En cuanto al ciclo infinito de ingresos el proceso es sencillo
</h2> <ol class="text-secondary dark:text-primary"> <li>1. Inviertes en anuncios para aumentar la visibilidad.</li> <li>
2. Atraes a los clientes a tu sitio web o tienda en línea.
</li> <li>
3. Realizas ventas para recuperar la inversión y reinicias
                    el ciclo.
</li> </ol> ${renderComponent($$result2, "CADTalking", $$CADTalking, { "color": "#fabd00" })} </div> </section>  <section class="section p-10 flex flex-col justify-center" style=""> <h2 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-secondary pb-5 md:pb-10 dark:text-primary">
Planes, Precios de Compra
</h2> <div class="flex-1 flex flex-col flex-wrap md:flex-wrap lg:flex-nowrap pt-10 pb-10 md:flex-row gap-16 items-center justify-center"> ${renderComponent($$result2, "PricingCard", $$PricingCard, { "title": "Cheaper market", "category": "Ads", "price": "499.00", "duration": "3 meses", "availableItems": [
    "Asesoria basica para marketing y publicidad",
    "Creacion de recursos para Marketing y social Media"
  ], "unavailableItems": [] })} ${renderComponent($$result2, "PricingCard", $$PricingCard, { "title": "Recomended SEO", "category": "Ads", "price": "639.00", "duration": "6 meses", "availableItems": [
    "Asesoria creacion y publicacion de anuncios",
    "Investigaci\xF3n palabras claves",
    "Optimizacion del sitio web.",
    "campa\xF1a SEO para tu pagina web.",
    "Construcci\xF3n del enlaces(link Building)",
    "Garantia aumento Autoridad de dominio en 6 meses"
  ], "unavailableItems": [
    "Creacion de contenidos de calidad, Media, viralizacion, Asociaci\xF3n.",
    "Contenido de publicidad y marketing"
  ] })} ${renderComponent($$result2, "PricingCard", $$PricingCard, { "title": "Premium CAD(Code, Delta, Ads) Marketing SEO", "category": "Ads", "price": "2559.00", "duration": "Selling Page", "availableItems": [
    "Landing(pagina Aterrizaje)",
    "Dise\xF1o Personalizado  Market",
    "Navegacion basica, link a whatsapp, redes",
    "Gestor de contenido Interfaz Admin o CMS",
    "Garantia de cambios y ajustes 1 a\xF1o",
    "Asesoria creacion y publicacion de anuncios",
    "campa\xF1a SEO para tu pagina web.",
    "Branding publicidad y marketing",
    "Construcci\xF3n del enlaces(link Building)",
    "Garantia aumento Autoridad de dominio en 6 meses"
  ], "unavailableItems": [
    // Elementos no disponibles para Premium CAD
  ] })} </div> </section>  <section class="section text-secondary dark:text-primary"> <h2 class="font-semibold text-3xl">Diccionario SEO</h2> <p>Aqui encontraras los terminos descritos en los planes para las Campañas SEO, Marketing & Publicidad.</p> <ol class="flex flex-col pt-12 gap-10"> <li> <strong>Contenido de Calidad:</strong> <p>Proporcionamos contenido valioso y relevante que responde a las preguntas y necesidades de nuestros usuarios. Explore nuestros artículos y recursos para obtener información útil y actualizada.</p> </li> <li> <strong>Experiencia del Usuario (UX):</strong> <p>Nos esforzamos por brindar una experiencia de usuario excepcional. Navegue fácilmente por nuestro sitio web, que está optimizado para ser rápido y fácil de usar.</p> </li> <li> <strong>Optimización para Dispositivos Móviles:</strong> <p>Acceda a nuestro contenido desde cualquier lugar utilizando dispositivos móviles. Nuestro sitio web está completamente optimizado para brindar una experiencia fluida en smartphones y tabletas.</p> </li> <li> <strong>SEO Técnico:</strong> <p>Mantenemos los aspectos técnicos de nuestro sitio web en óptimas condiciones. Desde la estructura del sitio hasta la velocidad de carga, nos esforzamos por garantizar un rendimiento técnico sólido.</p> </li> <li> <strong>Enlaces de Calidad:</strong> <p>Valoramos la calidad sobre la cantidad en nuestra estrategia de construcción de enlaces. Colaboramos con sitios relevantes y confiables para proporcionar a nuestros usuarios enlaces útiles y relacionados.</p> </li> </ol> <h2 class="text-3xl font-semibold pb-2 pt-10">Construcción de Enlaces (Link Building) en SEO</h2> <p>La construcción de enlaces es una estrategia de SEO que se enfoca en obtener enlaces de calidad desde otros sitios web a tu propio sitio. El objetivo es mejorar la visibilidad en los motores de búsqueda y aumentar la autoridad del dominio.</p> <p>Los motores de búsqueda, como Google, consideran los enlaces entrantes como votos de confianza y relevancia. Cuantos más enlaces de calidad apunten a tu sitio, es probable que tu sitio sea considerado más importante y tenga un mejor posicionamiento en los resultados de búsqueda.</p> <h3 class="text-xl font-semibold pt-5 pb-5">Tácticas Comunes de Construcción de Enlaces:</h3> <ol class="flex flex-col gap-10"> <li> <strong>Creación de Contenido de Calidad:</strong> <p>Publicar contenido valioso y relevante en tu sitio puede atraer naturalmente enlaces de otros sitios que encuentren tu contenido útil.</p> </li> <li> <strong>Outreach:</strong> <p>Contactar a otros sitios web, blogs o empresas para sugerir la posibilidad de intercambiar enlaces o colaborar en contenidos.</p> </li> <li> <strong>Participación en Comunidades:</strong> <p>Participar activamente en comunidades en línea y foros relevantes para tu industria puede ayudar a establecer tu presencia y generar enlaces de manera natural.</p> </li> <li> <strong>Creación de Contenido Viral:</strong> <p>Crear contenido que sea compartible y potencialmente viral puede atraer enlaces de manera orgánica a medida que más personas lo comparten.</p> </li> <li> <strong>Testimonios y Reseñas:</strong> <p>Proporcionar testimonios o reseñas para productos o servicios de otras empresas puede generar enlaces de retroceso.</p> </li> </ol> </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/ads.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/ads.astro";
const $$url = "/ads";

const ads = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ads,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CADTalking as $, $$PricingCard as a, ads as b };
