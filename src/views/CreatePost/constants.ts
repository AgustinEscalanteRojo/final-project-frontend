import { object, string, number, array } from "yup";

export const InitialValues = {
  name: "",
  type: "",
  model: "",
  plateNumber: "",
  km: 0,
  carSeats: 0,
  fuelType: "",
  gearBoxType: "",
  description: "",
  style: "",
  status: "",
  availableTimes: "",
};

export const ValidationSchema = object({
  name: string().required(),
  type: string().required(),
  model: string().required(),
  plateNumber: string().required(),
  km: number().integer().positive().required(),
  carSeats: number().integer().positive().required(),
  fuelType: string(),
  gearBoxType: string(),
  description: string(),
  status: string(),
  style: string(),
  availableTimes: array().required(),
});
