import prisma from "@/lib/prisma";

export async function getCountPeminjaman() {
  const countPeminjaman = await prisma.peminjaman.count();
  return countPeminjaman;
}
