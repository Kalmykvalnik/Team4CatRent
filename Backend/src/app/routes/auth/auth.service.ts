import * as bcrypt from 'bcryptjs';
import prisma from '../../../prisma/prisma-client';
import HttpException from '../../models/http-exception.model';
import generateToken from './token.utils';
import { User } from './user.model';
import { RegisterInput } from './register-input.model';
import { RegisteredUser } from './registered-user.model';

const checkUserUniqueness = async (email: string, username: string) => {
  const existingUserByEmail = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  const existingUserByUsername = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });

  if (existingUserByEmail || existingUserByUsername) {
    throw new HttpException(422, {
      errors: {
        ...(existingUserByEmail ? { email: ['has already been taken'] } : {}),
        ...(existingUserByUsername
          ? { username: ['has already been taken'] }
          : {}),
      },
    });
  }
};

export const login = async (userPayload: any) => {
  const email = userPayload.email?.trim();
  const password = userPayload.password?.trim();

  if (!email) {
    throw new HttpException(422, { errors: { email: ["can't be blank"] } });
  }

  if (!password) {
    throw new HttpException(422, { errors: { password: ["can't be blank"] } });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      username: true,
      password: true,
    },
  });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return {
        email: user.email,
        username: user.username,
        token: generateToken(user.id),
      };
    }
  }

  throw new HttpException(403, {
    errors: {
      'email or password': ['is invalid'],
    },
  });
};

export const getCurrentUser = async (id: number) => {
  const user = (await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      username: true,
    },
  })) as User;

  return {
    ...user,
    token: generateToken(user.id),
  };
};

export const createUser = async (
  input: RegisterInput
): Promise<RegisteredUser> => {
  const email = input.email?.trim();
  const username = input.username?.trim();
  const password = input.password?.trim();
  const firstname = input.firstname?.trim() ?? '';
  const lastname = input.lastname?.trim() ?? '';
  const middlename = input.middlename?.trim() ?? '';
  const phone = input.phone?.trim() ?? '';
  const sex = input.sex ?? false;
  const creditcard = input.creditcard?.trim() ?? '';
  const birthdate = input.birthdate ?? new Date();
  const smspermission = input.smspermission ?? false;
  const emailpermission = input.emailpermission ?? false;

  console.log(input);

  if (!email) {
    throw new HttpException(422, { errors: { email: ["can't be blank"] } });
  }

  if (!username) {
    throw new HttpException(422, { errors: { username: ["can't be blank"] } });
  }

  if (!password) {
    throw new HttpException(422, { errors: { password: ["can't be blank"] } });
  }

  await checkUserUniqueness(email, username);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      firstname,
      lastname,
      middlename,
      birthdate,
      phone,
      creditcard,
      sex,
      smspermission,
      emailpermission,
    },
    select: {
      id: true,
      email: true,
      username: true,
    },
  });

  return {
    ...user,
    token: generateToken(user.id),
  };
};
