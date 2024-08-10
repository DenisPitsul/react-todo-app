import * as yup from "yup";

export const TODO_VALIDATION_SCHEMA = yup.object({
  value: yup.string().trim().required(),
  deadline: yup.date().required(),
});
