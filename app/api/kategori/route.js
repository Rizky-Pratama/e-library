
import prisma from "@/app/lib/prisma";
import { getAllCategory } from; "@/app/utils/dbUtils/category";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const datas = await getAllCategory();

    return new NextResponse(
      JSON.stringify({
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
    const { nama_kategori } = await request.json();
    
    const data = await prisma.Kategori.create({
      data: {
        nama_kategori,
      },
    });
    
    revalidateTag("kategori");

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Kategori berhasil ditambahkan",
        data,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Terjadi kesalahan " + error,
      }),
      { status: 500 }
    );
  }
}
