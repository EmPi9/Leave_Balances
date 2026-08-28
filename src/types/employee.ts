export type LeaveValue = number | null;

export type Employee = {
  id: number;
  name: string;
  designation: string;
  al: LeaveValue;
  ph: LeaveValue;
  pdo: LeaveValue;
  sl: LeaveValue;
  ul: LeaveValue;
  sl_hp: LeaveValue;
  sl_up: LeaveValue;
  pl: LeaveValue;
  cl: LeaveValue;
};

export const LEAVE_COLUMNS = [
  { key: "al", label: "AL" },
  { key: "ph", label: "PH" },
  { key: "pdo", label: "PDO" },
  { key: "sl", label: "SL" },
  { key: "ul", label: "UL" },
  { key: "sl_hp", label: "SL (HP)" },
  { key: "sl_up", label: "SL (UP)" },
  { key: "pl", label: "PL" },
  { key: "cl", label: "CL" },
] as const;

export type LeaveColumnKey = (typeof LEAVE_COLUMNS)[number]["key"];
