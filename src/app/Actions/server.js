"use server";
// export const getViewProduct = async (id, category) => {
//   const res = await fetch(`Data/${category}.json`);
//   const data = await res.json();
//   let product = await data.find((product) => product.id == id);

//   return product;
// };

// export const getCategoryProducts = async (category) => {
//   const res = await fetch(`Data/${category}.json`);
//   const data = await res.json();
//   return data;
// };

// export const getTopProduct = async () => {
//   const res = await fetch(`Data/top.json`);
//   const data = await res.json();
//   return data;
// };

import fs from "fs";
import path from "path";

// Define the base path for your data directory.
// This is the most reliable way to access local files in a Next.js environment.
const dataDirectory = path.join(process.cwd(), "Data");

export const getViewProduct = async (id, category) => {
  try {
    const filePath = path.join(dataDirectory, `${category}.json`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    // Assuming the id is a string in your JSON file.
    let product = data.find(
      (product) => product.id.toString() === id.toString()
    );

    return product;
  } catch (error) {
    console.error(
      `Error reading or parsing data for category: ${category}`,
      error
    );
    return null;
  }
};

export const getCategoryProducts = async (category) => {
  try {
    const filePath = path.join(dataDirectory, `${category}.json`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    return data;
  } catch (error) {
    console.error(
      `Error reading or parsing data for category: ${category}`,
      error
    );
    return [];
  }
};

export const getTopProduct = async () => {
  try {
    const filePath = path.join(dataDirectory, "top.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    return data;
  } catch (error) {
    console.error("Error reading or parsing top.json", error);
    return [];
  }
};
