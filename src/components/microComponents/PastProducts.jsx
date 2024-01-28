import { useState } from "react";
import style from "../../assets/css/PastProducts.module.css";

const PastProducts = () => {
  const [IsToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!IsToggled);
  };

  return (
    <div className={style.container}>
      <div className={style.toggleContainer}>
        <button className={IsToggled? style.activeToggleLevels : style.toggleLevels} onClick={handleToggle}>Midrange</button>
        <button className={IsToggled? style.activeToggleLevels : style.toggleLevels} onClick={handleToggle}>Flagship</button>
        <button className={IsToggled? style.activeToggleLevels : style.toggleLevels} onClick={handleToggle}>Cheap</button>
      </div>
    </div>
  );
};

export default PastProducts;
