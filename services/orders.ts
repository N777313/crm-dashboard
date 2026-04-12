import { supabase } from "../lib/supabase";

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("*");

  if (error) throw error;
  return data || [];
}
