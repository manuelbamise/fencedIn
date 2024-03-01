import { useEffect, useState } from "react";
import style from "../../assets/css/PastProducts.module.css";
import productRecords from "../../assets/json/pastProducts.json";

const PastProducts = () => {
  // List of button properties to be rendered on the page
  const toggleBtn = [
    {
      id: 1,
      Name: "Budget",
      modelType: "budget",
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

  const [activebtn, setactivebtn] = useState("budget"); //sets the default button to budget
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // the code in this function filters through a list of data to be rendered on the page
    // as soon as the state of the activebtn changes
    const filterItems = () => {
      const filteredResults = productRecords.filter(
        //filters through the data and stores it in a new variable
        (item) => item.modelType === activebtn
      );
      setFilteredItems(filteredResults);
    };

    filterItems();
  }, [activebtn]);

  const handleButtonClick = (buttontype) => {
    //sets parameter(buttontype) as activebtn
    setactivebtn(buttontype);
  };

  return (
    <div
      className=" border-2 border-black h-96 w-[80rem] m-auto"
      id="productContainer"
    >
      <div className="border flex justify-between w-optimal p-3 m-auto">
        {toggleBtn &&
          toggleBtn.map((item) => {
            return (
              //renders button onto the page
              <button
                onClick={() => handleButtonClick(item.modelType)}
                key={item.id}
                className={
                  activebtn === item.modelType
                    ? "ring-2 ring-stapleGreen p-2 rounded "
                    : "bg-black font-bold p-2 rounded text-white hover:bg-stapleGreen hover:p-2 hover:rounded"
                }
              >
                {item.Name}
              </button>
            );
          })}
      </div>
      <div className="m-auto w-[80%] flex justify-center border-4 border-black">
        {filteredItems &&
          filteredItems.map((item) => {
            return (
              //renders filtered data onto the page
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
