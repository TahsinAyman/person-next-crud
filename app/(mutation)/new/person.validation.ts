import * as yup from "yup";
import { InferType } from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().typeError("Age is required").required("Age is required"),
});

export type PersonAddDTO = InferType<typeof schema>;