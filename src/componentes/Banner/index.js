import banner from '../../imagens/banner.png'
import './index.css'

const Banner = () => {
    return(
        <div className='banner'>
            <img src={banner} alt='Banner principal da página do Organo'/>
        </div>
    )
}

export default Banner