"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { PersonAddDTO, schema } from "../person.validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "../assets/background.png";
import { toast } from "sonner";

type Props = {
  submit: (data: PersonAddDTO) => Promise<void>;
};
const NewPageForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await props.submit(data);
          toast("Person created successfully");
        } catch (error) {
          toast("Something went wrong");
        }
      })}
    >
      <div className="flex flex-1">
        <div className="flex-1 md:block hidden relative">
          <Image src={bg} className="h-screen" alt="form-bg-pic" />
        </div>
        <div className="w-full md:w-[30vw]">
          <div className="flex flex-col h-screen justify-center items-center rounded-3xl border p-8 border-border hover:border-primary">
            <div>
              <h1 className="text-xl">New</h1>
            </div>
            <div className="my-4">
              <Input type="text" placeholder="Name" {...register("name")} />
              {errors.name?.message && (
                <p className="mt-2 text-red-500">{errors.name?.message}</p>
              )}
            </div>
            <div className="my-4">
              <Input type="number" placeholder="Age" {...register("age")} />
              {errors.age?.message && (
                <p className="mt-2 text-red-500">{errors.age?.message}</p>
              )}
            </div>
            <Button type="submit" variant="outline">
              Save
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPageForm;
