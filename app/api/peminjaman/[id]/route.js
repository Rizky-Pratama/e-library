import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const data = await prisma.Peminjaman.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        buku: true,
        anggota: true,
        staf: true,
      },
    });

    if (!data) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Data tidak ditemukan",
        }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data berhasil ditemukan",
        data,
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

export async function DELETE(request,{params}) {
  try {
    const { id } = params;

    const checkId = await prisma.Peminjaman.findUnique({
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

    const updateBuku = await prisma.Buku.update({
      where: {
        id: parseInt(checkId.bukuId),
      },
      data: {
        stok: {
          increment: 1,
        },
      },
    });
    updateBuku;

    const data = await prisma.Peminjaman.delete({
      where: {
        id: parseInt(id),
      },
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data berhasil dihapus",
        data,
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