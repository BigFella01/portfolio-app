"use server";

const { default: supabase } = require("./supabase");

export async function submitForm(formData) {
  const { error } = await supabase.from("submissions").insert(formData);

  if (error) {
    return {
        error: 'Form could not be submitted'
    }
  }
}
