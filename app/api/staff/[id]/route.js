import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    console.log(id);
    const data = await prisma.Staff.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    
    if (!data) {
      return new NextResponse(
        JSON.stringify({
          succsess: false,
          message: "Data tidak ditemukan",
        }),
        { status: 404 }
      );
      
    }
    return new NextResponse(
      JSON.stringify({
        succsess: true,
        messages: "Data user berhasil ditampilkan",
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const checkId = await prisma.Staff.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!checkId) {
      return new NextResponse(
        JSON.stringify({
          succsess: false,
          message: "Data tidak ditemukan",
        }),
        { status: 404 }
      );
    }

    const data = await prisma.Staff.delete({
      where: {
        id: parseInt(id),
      },
    });

    revalidateTag("staff");

    return new NextResponse(
      JSON.stringify({
        succsess: true,
        messages: "Data user berhasil dihapus",
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
