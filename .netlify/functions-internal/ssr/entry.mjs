import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BtbyiC-P.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_wNdndvkP.mjs');
const _page1 = () => import('./chunks/404_B2fOw5vQ.mjs');
const _page2 = () => import('./chunks/about_us_DQ85TLZD.mjs');
const _page3 = () => import('./chunks/about-us_Bkj143jE.mjs');
const _page4 = () => import('./chunks/ads_SeMHqw58.mjs');
const _page5 = () => import('./chunks/ads_launcher_kD-uKrSY.mjs');
const _page6 = () => import('./chunks/callback_kx1R2vTl.mjs');
const _page7 = () => import('./chunks/register_DZZAdE2S.mjs');
const _page8 = () => import('./chunks/signin_CaNLDVXo.mjs');
const _page9 = () => import('./chunks/signout_D1EHihRN.mjs');
const _page10 = () => import('./chunks/dashboard_DmqXQFy4.mjs');
const _page11 = () => import('./chunks/register_DCtmHGve.mjs');
const _page12 = () => import('./chunks/signin_DMPfM2w9.mjs');
const _page13 = () => import('./chunks/tour-1_Bq6q2Rwy.mjs');
const _page14 = () => import('./chunks/carnetdigital_BX2Zw6th.mjs');
const _page15 = () => import('./chunks/index_DVKrCkWN.mjs');
const _page16 = () => import('./chunks/customize-tours_DoBCnwvx.mjs');
const _page17 = () => import('./chunks/data_managment_DZYphWGN.mjs');
const _page18 = () => import('./chunks/design_Dstjz--M.mjs');
const _page19 = () => import('./chunks/gallery_C2HP4Osy.mjs');
const _page20 = () => import('./chunks/gallery-details_BdJEQtqB.mjs');
const _page21 = () => import('./chunks/index_DsDlGGgd.mjs');
const _page22 = () => import('./chunks/homologacion_pOTOQb0c.mjs');
const _page23 = () => import('./chunks/market_design_DjJqTIb8.mjs');
const _page24 = () => import('./chunks/index_DTiX8kHT.mjs');
const _page25 = () => import('./chunks/perfil_Dr66ZHt-.mjs');
const _page26 = () => import('./chunks/privacy_policy_DiEpgtt3.mjs');
const _page27 = () => import('./chunks/_id__D0VgWRTn.mjs');
const _page28 = () => import('./chunks/services_BVNgp2rC.mjs');
const _page29 = () => import('./chunks/testimonials_Cr0Jf0Lo.mjs');
const _page30 = () => import('./chunks/tour-list_DMThs3UG.mjs');
const _page31 = () => import('./chunks/_slug__CwMT_c8w.mjs');
const _page32 = () => import('./chunks/web_D1w2ojn4.mjs');
const _page33 = () => import('./chunks/index_Cu0IZ_Xh.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about_us.astro", _page2],
    ["src/pages/about-us.astro", _page3],
    ["src/pages/ads.astro", _page4],
    ["src/pages/ads_launcher.astro", _page5],
    ["src/pages/api/auth/callback.ts", _page6],
    ["src/pages/api/auth/register.ts", _page7],
    ["src/pages/api/auth/signin.ts", _page8],
    ["src/pages/api/auth/signout.ts", _page9],
    ["src/pages/api/dashboard.astro", _page10],
    ["src/pages/api/register.astro", _page11],
    ["src/pages/api/signin.astro", _page12],
    ["src/pages/blog/tours/tour-1.md", _page13],
    ["src/pages/carnetdigital.astro", _page14],
    ["src/pages/CEO/index.astro", _page15],
    ["src/pages/customize-tours.astro", _page16],
    ["src/pages/data_managment.astro", _page17],
    ["src/pages/design.astro", _page18],
    ["src/pages/gallery.astro", _page19],
    ["src/pages/gallery-details.astro", _page20],
    ["src/pages/hombre/index.astro", _page21],
    ["src/pages/homologacion.astro", _page22],
    ["src/pages/market_design.astro", _page23],
    ["src/pages/mujer/index.astro", _page24],
    ["src/pages/perfil.astro", _page25],
    ["src/pages/privacy_policy.astro", _page26],
    ["src/pages/producto/[id].astro", _page27],
    ["src/pages/services.astro", _page28],
    ["src/pages/testimonials.astro", _page29],
    ["src/pages/tour-list.astro", _page30],
    ["src/pages/tours/[slug].astro", _page31],
    ["src/pages/web.astro", _page32],
    ["src/pages/index.astro", _page33]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
