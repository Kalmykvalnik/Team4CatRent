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

export const deleteProduct = async (id:number)=>{
    const product = await prisma.product.delete({
      where:{
        id: id,
      }
    })
  return product;
}

type productData = {
  name?: string,
  description?: string,
  isactive?: boolean,
  orderlist?: any //??
}

export const editProduct = async (id: number, data:Object)=>{
  const product = await prisma.product.update({
    where: {id}, 
    data: data //orderList??
  });
  return product;
}

export const createProduct = async (data:any)=>{
  const product = await prisma.product.create({
    data: data //orderList??
  });
  return product;
}
