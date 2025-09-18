import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateIngredientForm = () => {
    
  const [FormData, setFormData] = useState({
    name: "",
    ingredientCategoryId: ""
  });

  const handleSubmit = () => {
    const data = {
      name: FormData.name,
      ingredientCategoryId:FormData.ingredientCategoryId
    };
    console.log(data);
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
          Create Ingredient
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            id="name"
            name="name"
            label="Name"
            onChange={handleInputChange}
            value={FormData.name}
            fullWidth
          />
          <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  id="seasonal"
                  name="ingredientCategoryId"
                  label="Is Seasonal"
                  value={FormData.ingredientCategoryId}
                  onChange={handleInputChange}
                  
                >
                  <MenuItem value={10}>Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                </Select>
              </FormControl>
          <Button type="submit" variant="contained" fullWidth>
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
