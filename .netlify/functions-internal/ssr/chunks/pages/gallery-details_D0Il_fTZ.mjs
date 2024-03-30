import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DUAG0DTE.mjs';
import { a as $$Modal, f as fetchApi } from './_slug__BIpC95-K.mjs';
/* empty css                                    */

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$CardPicture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardPicture;
  const { img1, img1id, img2, img2id, title, ph, category } = Astro2.props;
  const img1IdString = img1id !== void 0 ? img1id.toString() : void 0;
  const img2IdString = img2id !== void 0 ? img2id.toString() : void 0;
  return renderTemplate`<!-- show the modal conponent -->${maybeRenderHead()}<a class="text-left relative cursor-pointer" type="button"${addAttribute(`drawer-modal${img1IdString}`, "data-drawer-target")}${addAttribute(`drawer-modal${img1IdString}`, "data-drawer-show")} data-astro-cid-z35ususf> <div class="relative" data-astro-cid-z35ususf> <img class="h-auto max-w-full rounded-lg"${addAttribute(img1, "src")} alt="" data-astro-cid-z35ususf> <span class="absolute w-full h-full rounded-lg text-gray-100 left-0 bottom-0 bg-black/40 opacity-0 hover:opacity-100" style="backdrop-filter: blur(0px)" data-astro-cid-z35ususf> <div class="absolute bottom-0 left-0 p-2 md:p-3 text-xs md:text-base " style="" data-astro-cid-z35ususf> <p class="capitalize" data-astro-cid-z35ususf>${title}</p> <p class="capitalize" data-astro-cid-z35ususf>by: ${ph}</p> </div> </span> </div> ${renderComponent($$result, "Modal", $$Modal, { "img": img1, "id": img1IdString, "data-astro-cid-z35ususf": true })} </a> <a class="text-left relative cursor-pointer" type="button"${addAttribute(`drawer-modal${img2IdString}`, "data-drawer-target")}${addAttribute(`drawer-modal${img2IdString}`, "data-drawer-show")} data-astro-cid-z35ususf> <div class="relative" data-astro-cid-z35ususf> <img class="h-auto max-w-full rounded-lg"${addAttribute(img2, "src")} alt="" data-astro-cid-z35ususf> <span class="absolute w-full h-full rounded-lg text-gray-100 left-0 bottom-0 bg-black/40 opacity-0 hover:opacity-100" style="backdrop-filter: blur(0px)" data-astro-cid-z35ususf> <div class="absolute bottom-0 left-0 p-2 md:p-3 text-xs md:text-base " style="" data-astro-cid-z35ususf> <p class="capitalize" data-astro-cid-z35ususf>${title}</p> <p class="capitalize" data-astro-cid-z35ususf>by: ${ph}</p> </div> </span> </div> ${renderComponent($$result, "Modal", $$Modal, { "img": img2, "id": img2IdString, "data-astro-cid-z35ususf": true })} </a>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/resources/CardPicture.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$GalleryComp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GalleryComp;
  const pictures = await fetchApi({
    endpoint: "pictures?populate=image",
    // the content type to fetch
    wrappedByKey: "data"
    // the key to unwrap the response
  });
  const reversedPictures = pictures.reverse();
  console.log("/////////////fetching pictures///////////// " + pictures);
  const imagesPerBlock = 2;
  return renderTemplate`${maybeRenderHead()}<section class="section flex flex-col md:flex-row flex-wrap gap-3 md:gap-5 justify-center items-center" style="background: white;"> <h1 class="text-4xl text-left min-w-full md:text-7xl dark:text-white max-w-lg">Birdwatching Tours and Experiences</h1> <div class="grid grid-cols-2 md:grid-cols-3 gap-6 text-center"> ${reversedPictures.map((picture, index) => {
    if (index % imagesPerBlock === 0) {
      const nextPicture = reversedPictures[index + 1];
      return renderTemplate`<div class="grid gap-4"> ${renderComponent($$result, "CardPicture", $$CardPicture, { "img1": picture.attributes.image.data?.attributes.url, "img1id": picture.id, "img2": nextPicture?.attributes.image.data?.attributes.url, "img2id": nextPicture?.id, "title": picture.attributes.title, "ph": picture.attributes.ph })} </div>`;
    } else {
      return null;
    }
  })} </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/pages/GalleryComp.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$GalleryDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryDetails;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery", "subtitle": "Birdwatching Tours and Experiences, Nature Explorations, Immerse in Birdwatching Tours, Nature Escapes, and Unique Experiences Showcase" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryComp", $$GalleryComp, {})} ${renderComponent($$result2, "Modal", $$Modal, { "visible": "block" })} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/gallery-details.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/gallery-details.astro";
const $$url = "/gallery-details";

const galleryDetails = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GalleryDetails,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GalleryComp as $, galleryDetails as g };
