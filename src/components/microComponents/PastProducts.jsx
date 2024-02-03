// import { useState } from "react";
// import style from "../../assets/css/PastProducts.module.css";
import productRecords from "../../assets/json/pastProducts.json";

const PastProducts = () => {
  return (
    <div>jdfdjf
      {productRecords &&
        productRecords.map((record) =>{return(
          <img src={record.imgLink} alt="" key={record.id}/>
        )})}
    </div>
  );
};

export default PastProducts;
