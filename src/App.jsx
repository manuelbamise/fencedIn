import './App.css'
import { useState, useEffect } from "react";
import { Puff} from "react-loader-spinner";
import Container from "./components/Container";

const App = () => {
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {IsLoading ? (
        <div className="h-screen w-screen background">
          <Puff
            height="40%"
            width="40%"
            radius="2"
            color="#00fd00"
            wrapperClass="flex py-14 justify-center items-center"
          />
        </div>
      ) : (
        <Container />
      )}
    </>
  );
};

export default App;
