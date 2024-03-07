import { useEffect, useState } from "react";
import testimonial from "../../assets/json/testimonials.json";

const TestimonialCard = () => {
  const [activeTestimonial, setactiveTestimonial] = useState("1");
  const [filterdata, setFilteredata] = useState([]);
  useEffect(() => {
    const filterItems = () => {
      const filteredResults = testimonial.filter(
        //filters through the data and stores it in a new variable
        (item) => item.id === activeTestimonial
      );
      setFilteredata(filteredResults);
    };

    filterItems();
  }, [activeTestimonial]);

  const handleButtonClick = (buttontype) => {
    //sets parameter(buttontype) as activebtn
    setactiveTestimonial(buttontype);
  };

  return (
    <div className="testimonialCard">
      {testimonial && testimonial
        ? testimonial.map((item) => {
            return (
              <div
                key={item.id}
                className=" border border-red-700 text-center my-2 w-[250px] relative"
              >
                <button onClick={()=> handleButtonClick(`${item.id + 1}`)}>Left</button>
                <div>
                <div>
                  <div>{item.firstName}</div>
                  <div>{item.lastName}</div>
                </div>
                <div>{item.testimonial}</div>
                <div>
                  <a href={item.linkedinUrl}>Linkedin</a>
                  <a href={item.twitterUrl}>Twitter</a>
                  <a href={item.instagramUrl}>Instagram</a>
                </div>
                <button>right</button>
                </div>
              </div>
            );
          })
        : "No records found"}
    </div>
  );
};

export default TestimonialCard;
