import {
  randEmail,
  randPassword,
  randUserName,
  randPhoneNumber,
  randPastDate,
  randCreditCard,
  randFirstName,
  randLastName,
} from '@ngneat/falso';
import { createUser } from '../app/routes/auth/auth.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const generateUser = async () => {
  createUser({
    username: randUserName(),
    email: randEmail(),
    password: randPassword(),
    sex: true,
    phone: randPhoneNumber(),
    birthdate: randPastDate(),
    creditcard: randCreditCard().number,
    firstname: randFirstName(),
    lastname: randLastName(),
    middlename: '',
    smspermission: true,
    emailpermission: true,
  });
};

const main = async () => {
  try {
    const users = await Promise.all(
      Array.from({ length: 20 }, () => generateUser())
    );
    users.map((user) => user);
  } catch (error) {
    console.error(error);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
