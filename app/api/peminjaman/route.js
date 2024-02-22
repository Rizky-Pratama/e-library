import prisma from "@/app/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const datas = await prisma.Peminjaman.findMany({
      include: {
        buku: true,
        anggota: true,
        staf: true,
      },
      where: {
        buku: {
          id: {
            not: 0,
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({
        messages: "yeyyyy",
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
    const data = await prisma.Peminjaman.create({
      data: {
        ...body,
        status: "Dipinjam",
        bukuId: parseInt(body.bukuId),
        anggotaId: parseInt(body.anggotaId),
        stafId: parseInt(body.stafId),
        tanggal_peminjaman: new Date(body.tanggal_peminjaman),
        tanggal_pengembalian: new Date(body.tanggal_pengembalian),
      },
    });
    
    if (!data) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Data tidak ditemukan" }),
        { status: 404 }
      );
    }

    const updateBuku = await prisma.Buku.update({
      where: {
        id: parseInt(body.bukuId),
      },
      data: {
        stok: {
          decrement: 1,
        },
      },
    });

    updateBuku;

    revalidateTag("peminjaman");
    
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data berhasil ditambahkan",
        data,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Terjadi kesalahan ", error: error.message }),
      { status: 500 }
    );
  }
}
