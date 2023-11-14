import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const data = await prisma.Anggota.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!data)
      return new NextResponse(
        JSON.stringify({ success: false, message: "Data tidak ditemukan" }),
        { status: 404 }
      );

    return new NextResponse(
      JSON.stringify({ success: true, message: "Data telah ditemukan", data }),
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const data = await prisma.Anggota.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!data) {
      return new NextResponse(
        JSON.stringify({ success: true, message: "Data tidak ditemukan" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ success: true, message: "Data berhasil dihapus", data }),
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
