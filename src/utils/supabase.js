import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ryiviekghsswjfxlfxjr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aXZpZWtnaHNzd2pmeGxmeGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzQwNzEsImV4cCI6MjA2MzIxMDA3MX0.ympML_Yomd1KJ_VcP6HkZ1tgKju68fYEzqesmP2bf1I"
);

const customer = {
  name: "3",
  email: null,
  phone: "",
  country: "",
  province: "",
  city: "",
  company: "",
  position: "",
  product: "",
  requirement: "",
};
export const getAllCustomer = async () => {
  let { data: customer, error } = await supabase.from("customer").select("*");
  return customer;
};
// getAllCustomer();

export const insertCustomer = async (customer) => {
  const { data, error } = await supabase
    .from("customer")
    .insert([customer])
    .select();
  return { data, error };
};

console.log(await insertCustomer(customer));
