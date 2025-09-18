import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateIngredientsCategoryForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = () => {
    console.log(FormData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  return (
    <div className="">
      <div className="p-3">
        <h1 className="text-gray-400 text-center text-xl pb-8">
          Create Ingredient Category
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            id="name"
            name="name"
            label="Category Name"
            onChange={handleInputChange}
            value={FormData.name}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientsCategoryForm;
