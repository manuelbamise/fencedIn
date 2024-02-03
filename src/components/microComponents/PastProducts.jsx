// import { useState } from "react";
import style from "../../assets/css/PastProducts.module.css";
import productRecords from "../../assets/json/pastProducts.json";

const PastProducts = () => {
  return (
    <div className={style.container}>
      jdfdjf
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
