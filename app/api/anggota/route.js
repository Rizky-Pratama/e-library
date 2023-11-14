import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.Anggota.findMany();

    return new NextResponse(JSON.stringify({ messages: "yeyyyyy", data }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Terjadi kesalahan " + error }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const data = await prisma.Anggota.create({
      data: {
        nama: body.nama,
        alamat: body.alamat,
        nomor_telepon: body.nomor_telepon,
        email: body.email,
      },
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data berhasil disimpan",
        data,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Terjadi kesalahan " + error }),
      { status: 500 }
    );
  }
}
