import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";

export async function GET() {
  try {
    const datas = await prisma.Staff.findMany();

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "yeyyyy",
        data: datas,
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

export async function POST(request) {
  try {
    const { nama, email, username, password, nomor_telepon, peran } = await request.json();

    const findUsername = await prisma.Staff.findUnique({
      where: {
        username,
      },
    });

    if (findUsername) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Username sudah digunakan",
        }),
        { status: 400 }
      );
    }

    const hasPassword = await bcrypt.hash(password, 10);
    const data = await prisma.Staff.create({
      data: {
        nama,
        email,
        password: hasPassword,
        username,
        nomor_telepon,
        peran,
      },
    });

    revalidateTag("staff");

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "User berhasil ditambahkan",
        data,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        succsess: false,
        message: "Terjadi kesalahan " + error,
      }),
      { status: 500 }
    );
  }
}
