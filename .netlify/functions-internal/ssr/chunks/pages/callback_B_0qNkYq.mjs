import { s as supabase } from './_id__Df5Y-dOD.mjs';

const GET = async ({ url, cookies, redirect }) => {
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
  if (user.email && !user.email.endsWith("@unicauca.edu.co")) {
    return new Response("Solo se permiten correos electrónicos de la Universidad del Cauca (@unicauca.edu.co)", { status: 403 });
  }
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  console.log("Metadatos del usuario:", user.user_metadata);
  const fullName = user.user_metadata?.full_name;
  let nombres = "";
  let apellidos = "";
  if (fullName) {
    const parts = fullName.split(" ");
    nombres = parts.slice(0, -2).join(" ");
    apellidos = parts.slice(-2).join(" ");
  }
  const { data: existingUsers, error: userError } = await supabase.from("usuario").select("*").eq("uid_auth", user.id);
  if (userError) {
    console.error("Error al buscar usuarios:", userError);
    return new Response("Error al buscar usuarios", { status: 500 });
  }
  if (existingUsers && existingUsers.length > 0) {
    console.log("El usuario ya existe en la tabla usuario. Saltando la inserción.");
  } else {
    const { data: userData, error: insertError } = await supabase.from("usuario").insert([
      {
        uid_auth: user.id,
        picture: user.user_metadata?.picture,
        full_name: fullName,
        nombres,
        apellidos,
        identificacion: user.user_metadata?.identificacion,
        tipo_sangre: user.user_metadata?.tipo_sangre,
        correo_unicauca: user.email
      }
    ]);
    if (insertError) {
      console.error("Error al insertar los datos del usuario:", insertError);
      return new Response("Error al insertar los datos del usuario", { status: 500 });
    } else {
      console.log("Usuario insertado correctamente en la tabla usuario.");
      const { data: carnetData, error: carnetInsertError } = await supabase.from("carnet").insert([
        {
          foto: user.user_metadata?.picture,
          // Asegúrate de tener un campo para la foto del carnet en user_metadata
          usuario_id: user.id
          // Usa el ID del usuario insertado anteriormente            
        }
      ]);
      if (carnetInsertError) {
        console.error("Error al insertar los datos del carnet:", carnetInsertError);
        return new Response("Error al insertar los datos del carnet", { status: 500 });
      } else {
        console.log("Carnet insertado correctamente en la tabla carnet.");
      }
    }
  }
  return redirect("/api/dashboard");
};

export { GET };
