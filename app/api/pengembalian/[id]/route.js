import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;

    const data = await prisma.Peminjaman.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        buku: {
          select: {
            id: true,
            judul: true,
          },
        },
        anggota: {
          select: {
            id: true,
            nama: true,
            nomor_telepon: true,
          },
        },
        staf: {
          select: {
            id: true,
            username: true,
          },
        },
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

    const today = new Date();
    const { tanggal_pengembalian } = data;
    function checkIsLate() {
      if (today.getFullYear() == new Date(tanggal_pengembalian).getFullYear()) {
        if (today.getMonth() == new Date(tanggal_pengembalian).getMonth()) {
          if (today.getDate() == new Date(tanggal_pengembalian).getDate()) {
            return false;
          }
          return today > tanggal_pengembalian;
        }
        return today > tanggal_pengembalian;
      }
      return today > tanggal_pengembalian;
    }
    let late = 0;
    let isLate = checkIsLate();

    if (data.status !== "Dipinjam") {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Buku sudah dikembalikan sebelumnya",
        }),
        { status: 400 }
      );
    }

    if (isLate) {
      const diffTime = Math.abs(new Date() - new Date(tanggal_pengembalian));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      late = diffDays - 1;

      await prisma.Peminjaman.update({
        where: {
          id: parseInt(id),
        },
        data: {
          status: "Terlambat",
        },
      });

      await prisma.Peminjaman.update({
        where: {
          id: parseInt(id),
        },
        data: {
          catatan: `Terlambat ${late} hari`,
        },
      });
    } else {
      await prisma.Peminjaman.update({
        where: {
          id: parseInt(id),
        },
        data: {
          status: "Dikembalikan",
        },
      });
      late = 0;
    }

    await prisma.Buku.update({
        where: {
            id: data.buku.id,
        },
        data: {
            stok: {
            increment: 1,
            },
        },
        });

    const res = {
      ...data,
      isLate,
      late,
    };

    revalidateTag("peminjaman");

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data berhasil diupdate",
        data: res,
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
