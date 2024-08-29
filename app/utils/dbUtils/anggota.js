import prisma from "@/lib/prisma";

export async function getCountAnggota() {
  const countAnggota = await prisma.Anggota.count();
  return countAnggota;
}

export async function getAllNamaAnggota() {
  const getAllNamaAnggota = await prisma.Anggota.findMany({
    select: {
      id: true,
      nama: true,
    },
  });
  return getAllNamaAnggota;
}