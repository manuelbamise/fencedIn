import style from '../../assets/css/PastProducts.module.css'

const PastProducts = () => {
  return (
    <div className={style.container}>
        <button className={style.toggleLevels}>Midrange</button>
        <button>Flagship</button>
        <button>Cheap</button>
    </div>
  )
}

export default PastProducts