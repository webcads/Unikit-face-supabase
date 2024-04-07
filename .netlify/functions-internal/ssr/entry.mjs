import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Dpg93lU7.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_CAIfiyKx.mjs');
const _page1 = () => import('./chunks/404_DkxzPhe4.mjs');
const _page2 = () => import('./chunks/about_us_CSkGPuPF.mjs');
const _page3 = () => import('./chunks/about-us_BpjurRUI.mjs');
const _page4 = () => import('./chunks/ads_BXqrDVFP.mjs');
const _page5 = () => import('./chunks/ads_launcher_C_BF5VFh.mjs');
const _page6 = () => import('./chunks/callback_C2UUqF1j.mjs');
const _page7 = () => import('./chunks/register_BhzTgzTo.mjs');
const _page8 = () => import('./chunks/signin_Cnz3PzYf.mjs');
const _page9 = () => import('./chunks/signout_KRB7qOrv.mjs');
const _page10 = () => import('./chunks/dashboard_Cq-qDwDC.mjs');
const _page11 = () => import('./chunks/register_B1FvcXLA.mjs');
const _page12 = () => import('./chunks/signin_VqL3o63A.mjs');
const _page13 = () => import('./chunks/tour-1_Cnndfzz3.mjs');
const _page14 = () => import('./chunks/carnetdigital_DpNyNWkH.mjs');
const _page15 = () => import('./chunks/index_Cnym8U-N.mjs');
const _page16 = () => import('./chunks/customize-tours_2izr1R3c.mjs');
const _page17 = () => import('./chunks/data_managment_MhvZ9USD.mjs');
const _page18 = () => import('./chunks/design_DGWGshZa.mjs');
const _page19 = () => import('./chunks/gallery_Cux-G8sK.mjs');
const _page20 = () => import('./chunks/gallery-details_Dr8sIaZ0.mjs');
const _page21 = () => import('./chunks/index_BDBNJW-j.mjs');
const _page22 = () => import('./chunks/homologacion_BiIZP13c.mjs');
const _page23 = () => import('./chunks/links_DIo1s4vL.mjs');
const _page24 = () => import('./chunks/market_design_CAf0b02W.mjs');
const _page25 = () => import('./chunks/index_IkIWxJh4.mjs');
const _page26 = () => import('./chunks/perfil_BzqWYebd.mjs');
const _page27 = () => import('./chunks/privacy_policy_ZlDOY_aD.mjs');
const _page28 = () => import('./chunks/_id__BtpYbqRa.mjs');
const _page29 = () => import('./chunks/services_CGkXUPo3.mjs');
const _page30 = () => import('./chunks/testimonials_BJHIlLLM.mjs');
const _page31 = () => import('./chunks/tour-list_p3dOocIt.mjs');
const _page32 = () => import('./chunks/_slug__BUAdB4zB.mjs');
const _page33 = () => import('./chunks/userDashboard_B80WunvU.mjs');
const _page34 = () => import('./chunks/web_C9oaRrTv.mjs');
const _page35 = () => import('./chunks/index_BJF79clv.mjs');

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
    ["src/pages/links.astro", _page23],
    ["src/pages/market_design.astro", _page24],
    ["src/pages/mujer/index.astro", _page25],
    ["src/pages/perfil.astro", _page26],
    ["src/pages/privacy_policy.astro", _page27],
    ["src/pages/producto/[id].astro", _page28],
    ["src/pages/services.astro", _page29],
    ["src/pages/testimonials.astro", _page30],
    ["src/pages/tour-list.astro", _page31],
    ["src/pages/tours/[slug].astro", _page32],
    ["src/pages/userDashboard.astro", _page33],
    ["src/pages/web.astro", _page34],
    ["src/pages/index.astro", _page35]
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
