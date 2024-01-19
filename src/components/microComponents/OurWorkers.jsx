import styles from '../../assets/css/OurWorkers.module.css'
import PropTypes from 'prop-types'

const OurWorkers = (props) => {
  console.log(props.image);
  return (
    <div className={styles.card}>
      <img src={props.image} alt="workerProfilePic"  className={styles.cardImage}/>
      <div className={styles.cardInformation}>
        <div className={styles.cardName}>
          <div className={styles.cardFirstName}>{props.fName}</div>
          <div className={styles.cardLastName}>{props.lName}</div>
          <div className={styles.cardTitle}>{props.title}</div>
        </div>
      </div>
    </div>
  )
}
OurWorkers.propTypes ={
  fName: PropTypes.string,
  lName: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.any,
}
export default OurWorkers