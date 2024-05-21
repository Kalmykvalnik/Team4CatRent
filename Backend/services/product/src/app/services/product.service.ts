import prisma from '../../prisma/prisma-client';
const productsperpage: number = 20;

export const getAllProducts = async (pagenumber: number) => {
  let products: any;
  if (pagenumber === 1) {
    products = await prisma.product.findMany({
      take: productsperpage,
    });
  } else {
    products = await prisma.product.findMany({
      skip: pagenumber * productsperpage,
      take: productsperpage,
    });
  }
  return products;
};

export const getProduct = async (id: number) => {
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });
  return product;
};
