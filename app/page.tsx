import React from "react";
import { List } from "./components/list";
import { columns } from "./columns";
import prisma from "./prisma/prisma";
import { Person } from "@prisma/client";
const App = async () => {
  const people: Person[] = await prisma.person.findMany();

  return (
    <div className="p-8">
      <List columns={columns} data={people} />
    </div>
  );
};

export const dynamic = "force-dynamic"

export default App;
