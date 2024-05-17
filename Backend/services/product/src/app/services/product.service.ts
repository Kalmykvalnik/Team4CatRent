import prisma from '../../prisma/prisma-client';

export const getAllProducts = async () => {
  const product = await prisma.product.findMany();
  console.log(product);
};
