import React from "react";
import { notFound, redirect } from "next/navigation";
import { fetchPersonById, updatePerson } from "@/app/person.service";
import UpdatePageForm from "./components/form";
import { PersonUpdateDTO } from "./person.validation";

type Props = { params: { id: number } };

const EditPage = async (props: Props) => {
  const id = Number(props.params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const person = await fetchPersonById(id);
  if (person === null) notFound();
  const submit = async (data: PersonUpdateDTO) => {
    "use server";
    await updatePerson(id, data);
    redirect("/");
  };
  return <UpdatePageForm submit={submit} person={person} />;
};

export default EditPage;
