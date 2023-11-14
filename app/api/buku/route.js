import { NextResponse } from "next/server";

export async function GET() {
  try {
    const datas = await prisma.Buku.findMany({
      include: {
        kategori: true,
      },
    });

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
    const body = await request.json();

    const data = await prisma.Buku.create({
      data: {
        judul: body.judul,
        penulis: body.penulis,
        penerbit: body.penerbit,
        kategoriId: parseInt(body.kategoriId),
        tahun_terbit: parseInt(body.tahun_terbit),
        stok: parseInt(body.stok),
      },
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Buku berhasil ditambahkan",
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
