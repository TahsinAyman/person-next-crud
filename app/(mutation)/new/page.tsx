import React from "react";
import NewPageForm from "./components/form";
import { createPerson } from "../../person.service";
const NewPage = () => {
  return (
    <div>
      <NewPageForm submit={createPerson} />
    </div>
  );
};

export default NewPage;
