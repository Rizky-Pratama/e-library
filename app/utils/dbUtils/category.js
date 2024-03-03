import prisma from "@/lib/prisma";

export async function getAllCategory() {
  const getAllCategory = await prisma.Kategori.findMany();
  return getAllCategory;
}