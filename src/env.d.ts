// /// <reference types="astro/client" />
// interface ImportMetaEnv {
//     readonly STRAPI_URL: string;
//   }

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}