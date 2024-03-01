"use server";

import { cookies } from "next/headers";


interface StoreTokenRequest {
  id_token: string;
}

export async function cookieLogin(request: StoreTokenRequest) {
  cookies().set({
    name: "accessToken",
    value: request.id_token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

}
