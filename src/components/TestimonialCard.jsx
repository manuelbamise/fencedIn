import profilePic from "../assets/Emblem/pic2.jpg";

const TestimonialCard = () => {
    let showCardInfo = document.querySelector('.testimonialCardinfo');
    let cardInfo = document.querySelector('.testimonialCard');
    cardInfo.addEventListener('click',()=>{
        showCardInfo.classList.add('testimonialCardInfoShow');
    });

  return (
    <div className="testimonialCard">
      <img src={profilePic} alt="" />
      <div className="testimonialCardInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde
        quibusdam aperiam ipsa dolores soluta asperiores, maxime officia
        perspiciatis nam? A cupiditate ipsum, laboriosam commodi in quaerat
        quibusdam culpa dicta! Ipsa, itaque blanditiis. Maiores porro veritatis
        ullam, sunt minus assumenda exercitationem laborum, perspiciatis
        laboriosam placeat odit molestiae. Distinctio ex dolorum esse ut ratione
        autem placeat. Consequatur quo aperiam perferendis eligendi? Voluptate
        
      </div>
    </div>
  );
};

export default TestimonialCard;

