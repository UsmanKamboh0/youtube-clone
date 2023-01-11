import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/uperconstants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "row" },
      
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "gray",
          color: "black", border: "1px solid gray",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "black", marginRight: "5px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;