/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, n as renderHead, k as renderSlot, j as renderComponent, m as maybeRenderHead } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const description = "Astro and Supabase demo app";
  const { title } = Astro2.props;
  const ogImageURL = new URL("hero.png", Astro2.site).href;
  const canonicalURL = new URL(Astro2.url).href;
  return renderTemplate`<html lang="en" class="h-full w-full"> <head><title>${title}</title><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImageURL, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImageURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}>${renderHead()}</head> <body class="flex flex-col h-full w-full dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-100"> <nav class="border-b bg-white dark:bg-zinc-800 dark:border-zinc-700"> <div class="flex items-baseline justify-end sm:justify-between p-4 max-w-screen-xl mx-auto"> <a href="/" class="hidden sm:block font-semibold dark:text-white">Astro</a> <div> <ul class="font-medium flex items-baseline gap-8"> <li> <a href="/api/dashboard" class="block text-zinc-900 dark:text-gray-200">Dashboard</a> </li> <li> <a href="/api/register" class="block text-zinc-900 dark:text-gray-200">Register</a> </li> <li> <a href="/api/signin" class="block text-zinc-900 dark:text-gray-200">Sign in</a> </li> </ul> </div> </div> </nav> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/layouts/Base.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form action="/api/auth/register" method="post"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/api/register.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/api/register.astro";
const $$url = "/api/register";

export { $$Register as default, $$file as file, $$url as url };
