import { s as supabase } from './_id__Df5Y-dOD.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  if (email && !email.endsWith("@unicauca.edu.co")) {
    return new Response("Solo se permiten usuario con correos electrónicos de la Universidad del Cauca (@unicauca.edu.co)", { status: 400 });
  }
  const validProviders = ["google", "github", "discord"];
  if (provider && validProviders.includes(provider)) {
    const { data: data2, error: error2 } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:4321/api/auth/callback"
      }
    });
    if (error2) {
      return new Response(error2.message, { status: 500 });
    }
    return redirect(data2.url);
  }
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/dashboard");
};

export { POST };
