'use server';
import prisma from "app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";


export async function POST(request) {
  try {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    const user = await prisma.Staff.findUnique({
      where: {
        username,
      },
    });

    if (!user)
      return new NextResponse(
        JSON.stringify({ messages: "Username tidak ditemukan" }),
        { status: 401 }
      );

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches)
      return new NextResponse(JSON.stringify({ messages: "Password salah" }),
          { status: 401 }
      );

    cookies().set("user", JSON.stringify({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.nama,
      peran: user.peran,
    }));
    return new NextResponse(
      JSON.stringify({
        messages: "Login Berhasil",
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.nama,
          peran: user.peran,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Terjadi kesalahan " + error }),
      { status: 500 }
    );
  }
}
