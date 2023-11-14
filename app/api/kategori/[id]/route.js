import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const data = await prisma.Kategori.findUnique({
      where: {
        id: parseInt(id),
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
        message: "Data kategori berhasil ditampilkan",
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const checkId = await prisma.Kategori.findUnique({
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
    const data = await prisma.Kategori.delete({
      where: {
        id: parseInt(id),
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
        message: "Kategori berhasil dihapus",
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