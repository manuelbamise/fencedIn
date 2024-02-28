import { useEffect, useState } from "react";
import style from "../../assets/css/PastProducts.module.css";
import productRecords from "../../assets/json/pastProducts.json";

const PastProducts = () => {
  const toggleBtn = [
    {
      id: 1,
      Name: "Budget",
      modelType: "budget",
      status: "active",
    },
    {
      id: 2,
      Name: "Midrange",
      modelType: "midRange",
    },
    {
      id: 3,
      Name: "Flagship",
      modelType: "flagShip",
    },
  ];

  const [activebtn, setactivebtn] = useState(toggleBtn.id = 1)
  const [filteredItems, setFilteredItems] = useState([]);

 
  useEffect(()=>{
    const filterItems = () => {
      const filteredResults = productRecords.filter(
        (item) => item.modelType === activebtn
      );
      setFilteredItems(filteredResults);
    };
  
    filterItems()
  },[activebtn]);

  const handleButtonClick=(buttontype)=>{
      setactivebtn(buttontype)
  }

  return (
    <div className=" border-2 border-black h-96 w-[80rem] m-auto" id="productContainer">
      <div className="border flex justify-between w-optimal p-3 m-auto">
        {toggleBtn &&
          toggleBtn.map((item) => {
            return (
              <button onClick={() => handleButtonClick(item.modelType)} key={item.id}>
                {item.Name}
              </button>
            );
          })}
      </div>
      <div className="m-auto w-[80%] flex justify-center border-4 border-black">
        {filteredItems &&
          filteredItems.map((item) => {
            return (
              <img
                src={item.imgLink}
                alt={item.modelType}
                className={style.image}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PastProducts;
