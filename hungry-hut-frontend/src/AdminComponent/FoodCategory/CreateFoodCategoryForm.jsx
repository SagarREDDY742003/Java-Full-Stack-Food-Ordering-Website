import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateFoodCategoryForm = () => {

    const [FormData,setFormData] = useState({categoryName:"",restaurantId:""})
  const handleSubmit = () => {
    const data = {
        name:FormData.categoryName,
        restaurantId:{
            id:1
        },
    }
    console.log(data);
  };

  const handleInputChange = (e)=>{

    const {name,value}=e.target
    setFormData({
        ...FormData,
        [name]:value
    })
  }
  return (
    <div className="">
      <div className="p-3">
        <h1 className="text-gray-400 text-center text-xl pb-8">
          Create Category
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            id="categoryName"
            name="categoryName"
            label="Food Category"
            onChange={handleInputChange}
            value={FormData.categoryName}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>Create Category</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateFoodCategoryForm;
