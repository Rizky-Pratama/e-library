import prisma from "@/lib/prisma";

export async function getCountBuku() {
  const count = await prisma.buku.count();
  return count;
}

export async function getAllBuku() {
  const getAllBuku = await prisma.Buku.findMany();
  return getAllBuku;
}