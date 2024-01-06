// import styles from "../../assets/css/OurWorkers.module.css";
import PropTypes from 'prop-types';
const OurWorkers = (props) => {
  return (
    <div className={"testimonialCard"}>
      <div className="cardInfo">
        <div className="name text-center">
          <div className="fName text-3xl">{props.name}</div>
          <div className="lName text-xl font-bold">Doe</div>
        </div>
        <div className="nameInfo p-2">
          {props.comment}
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
OurWorkers.propTypes ={
  'name':PropTypes.string,
  'comment':PropTypes.string
}

export default OurWorkers;
