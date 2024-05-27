import { Product } from '@prisma/client';
import prisma from '../../prisma/prisma-client';
const productsperpage: number = 20;

export const getAllProducts = async (pagenumber: number) => {
  let products: Product;
  if (pagenumber === 1) {
    [products] = await prisma.product.findMany({
      take: productsperpage,
    });
  } else {
    [products] = await prisma.product.findMany({
      skip: pagenumber * productsperpage,
      take: productsperpage,
    });
  }
  return products;
};

export const getProduct = async (id: number) => {
  const product:Product|null = await prisma.product.findFirst({where:{id}});
  return product;
};

export const deleteProduct = async (id:number)=>{
  const product:Product = await prisma.product.delete({where:{id}});
  return product;
}

export const editProduct = async (id: number, data:Product)=>{
  const product:Product = await prisma.product.update({where: {id}, data});
  return product;
}

export const createProduct = async (data:Product)=>{
  const product:Product = await prisma.product.create({data});
  return product;
}
