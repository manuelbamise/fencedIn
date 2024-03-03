import testimonial from "../../assets/json/testimonials.json";

const TestimonialCard = () => {
  return (
    <div className="testimonialCard">
      {testimonial && testimonial 
      ? testimonial.map((item)=>{
        return(
          <div key={item.id}>
            <div>
              <div>{item.firstName}</div>
              <div>{item.lastName}</div>
            </div>
            <div>
              {item.testimonial}
            </div>
            <div>
              <a href={item.linkedinUrl}>Linkedin</a>
              <a href={item.twitterUrl}>Twitter</a>
              <a href={item.instagramUrl}>Instagram</a>
            </div>
          </div>
        ) 
      }) : "No records found"}
    </div>
  );
};

export default TestimonialCard;
