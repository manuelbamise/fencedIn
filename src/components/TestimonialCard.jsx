const TestimonialCard = () => {
  return (
    <div className="testimonialCard">
      <div className="cardInfo">
        <div className="name text-center">
          <div className="fName text-3xl">John</div>
          <div className="lName text-xl font-bold">Doe</div>
        </div>
        <div className="nameInfo p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          qui error nulla.
        </div>
        <div className="nameSocial flex justify-between px-2">
          <a href="http://">linkedln</a>
          <a href="">twitter</a>
          <a href="">instagram</a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
