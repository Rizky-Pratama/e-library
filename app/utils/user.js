import { cookies } from "next/headers";

export async function getUserFromCookie() {
  const userCookie = cookies().get("user");
  const user = JSON.parse(userCookie.value);

  if (!user) {
    return null;
  }
  try {
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
