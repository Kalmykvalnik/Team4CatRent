import prisma from '../../prisma/prisma-client';

export const getAllProducts = async () => {
  const product = await prisma.product.findMany();
  console.log(product);
};

export const getProduct = async (id: number) => {
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });
  return product;
};
