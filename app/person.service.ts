"use server";

import prisma from "@/app/prisma/prisma";
import { PersonAddDTO } from "./(mutation)/new/person.validation";
import { redirect } from "next/navigation";
import { Person } from "@prisma/client";
import { PersonUpdateDTO } from "./(mutation)/edit/[id]/person.validation";
import { revalidatePath } from "next/cache";

export const createPerson = async (data: PersonAddDTO) => {
  await prisma.person.create({
    data: {
      name: data.name,
      age: data.age,
    },
  });
  redirect("/");
};

export const fetchPersonById: (id: number) => Promise<Person | null> = async (
  id: number
) => {
  return await prisma.person.findUnique({
    where: {
      id: id,
    },
  });
};

export const updatePerson = async (id: number, data: PersonUpdateDTO) => {
  await prisma.person.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      age: data.age,
    },
  });
};

export const deletePerson = async (id: number) => {
  await prisma.person.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};
