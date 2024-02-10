// import { useState } from "react";
import { useState } from "react";
// import style from "../../assets/css/PastProducts.module.css";
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

  const handleCheckType = ()=>{
    let out = productRecords && productRecords.filter((object) =>{object.modelType == 'budget'} )

    console.log(out);
  };
  
 handleCheckType(productRecords)
  return (
    <div>hello there</div>
  //   <div className=" border-2 border-black h-96 w-[80rem] m-auto">
  //     {
  //       productRecords && productRecords.filter(record => {
  //         record.modelType == "Midrange"
  //       })
  //     }
  //   </div>
 );
};

export default PastProducts;
