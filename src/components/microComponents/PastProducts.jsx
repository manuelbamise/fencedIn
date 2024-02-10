// import { useState } from "react";
import { useState } from "react";
import style from "../../assets/css/PastProducts.module.css";
import productRecords from "../../assets/json/pastProducts.json";

const PastProducts = () => {
  const [toggleType, setToggletype] = useState([
    {
      id: 1,
      name: "Budget",
      state: true,
    },
    {
      id: 2,
      name: "Midrange",
      state: false,
    },
    {
      id: 3,
      name: "Flagship",
      state: false,
    },
  ]);

 
  return (
    <div className=" border-2 border-black h-96 w-[80rem] m-auto">
      <div>
        {toggleType &&
          toggleType.map((btn) => {
            return (
              <button key={btn.id}>
                {btn.name}
              </button>
            );
          })}
      </div>
      <div className={style.productContainer}>
        {productRecords &&
          productRecords.map((record) => {
            return (
              <img
                src={record.imgLink}
                alt="image"
                key={record.id}
                className={style.product}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PastProducts;
