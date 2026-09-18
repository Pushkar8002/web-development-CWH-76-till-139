"use server";

import fs from "fs/promises";

export const submitAction = async (formData) => {
  const name = formData.get("name");
  const address = formData.get("add");

  console.log(name, address);
  await fs.writeFile(
    "harry.txt",
    `Name is ${name} and Address is ${address}`
  );
};
