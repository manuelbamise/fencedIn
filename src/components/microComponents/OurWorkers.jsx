import styles from '../../assets/css/OurWorkers.module.css'
import img from '../../assets/images/pic3.jpg'
import PropTypes from 'prop-types'
const OurWorkers = () => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" height={'200px'} width={'200px'} className='cardImage'/>
      <div className="cardInformation">
        <div className="cardName">
          <div className="cardFirstName">John</div>
          <div className="cardLastName">Doe</div>
          <div className="cardTitle">Head Manager</div>
        </div>
      </div>
    </div>
  )
}
OurWorkers.propTypes ={
  name: PropTypes.string,

}
export default OurWorkers