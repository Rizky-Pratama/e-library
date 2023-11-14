import prisma from "@/app/lib/prisma";

export async function getAllCategory() {
  const getAllCategory = await prisma.Kategori.findMany();
  return getAllCategory;
}