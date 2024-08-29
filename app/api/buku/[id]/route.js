import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const data = await prisma.Buku.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        kategori: true,
      },
    });

    if (!data)
      return new NextResponse(
        JSON.stringify({ messages: "Data tidak ditemukan" }),
        { status: 404 }
      );

    return new NextResponse(
      JSON.stringify({
        messages: "yeyyyy",
        data: data,
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const checkId = await prisma.Buku.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!checkId) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Data tidak ditemukan",
        }),
        { status: 404 }
      );
    }
    
    const deleteBuku = await prisma.Buku.delete({
      where: {
        id: parseInt(id),
      },
    });

    revalidateTag("buku");

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Buku berhasil dihapus",
        data: deleteBuku,
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
