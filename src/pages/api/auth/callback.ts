// callback.ts
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  const { user } = data;
   // Validar si el correo electrónico tiene la extensión @unicauca.edu.co
   if (user.email && !user.email.endsWith('@unicauca.edu.co')) {
    return new Response("Solo se permiten correos electrónicos de la Universidad del Cauca (@unicauca.edu.co)", { status: 403 });
  }

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/api/dashboard");
};