"use client";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Pabna", label: "Pabna" },
  { value: "Chottogram", label: "Chottogram" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
  { value: "Barishal", label: "Barishal" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Mymenshingh", label: "Mymenshingh" },
];

const StorePage = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleSelect = (data: any) => {
    setSelectedOptions(data);
  };
  return (
    <div className="bg-white rounded-lg shadow-md mx-2 p-4">
      <h2>Store Page</h2>
      <div className="w-60">
        <Select
          options={options}
          placeholder="Select City"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          // isMulti
        />
      </div>
    </div>
  );
};

export default StorePage;
