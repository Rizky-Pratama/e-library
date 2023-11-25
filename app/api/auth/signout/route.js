import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    cookies().delete("user");
    return new NextResponse(
      JSON.stringify({ success: true, messages: "Logout Berhasil" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Terjadi kesalahan " + error }),
      { status: 500 }
    );
  }
}
