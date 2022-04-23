import React from 'react'
import './inicio.scss'
import ballColorCourt from '../assets/ball-color-court-1405355.png'
import actionAthleteBall from '../assets/action-athlete-ball-342361.png'
import fill2 from '../assets/fill-2-2.svg'
import fill2F from '../assets/fill-2.svg'
import path from '../assets/path.svg'
import oval from '../assets/oval.svg'
import oval2 from '../assets/oval-2.svg'
import groupCopy2 from '../assets/group-copy-2.svg'
import path2 from '../assets/path-2.svg'
import group10 from '../assets/group-10.png'
import group11 from '../assets/group-11.png'
import group12 from '../assets/group-12.png'
import linkedIn from '../assets/group-23.svg'
import vimeo from '../assets/group-24.svg'
import instagram from '../assets/group-25.svg'
import twitter from '../assets/group-22.svg'
import facebook from '../assets/group-26.svg'

const Welcome = () => {
  return (
    <div className='myshopifycom'>
      {/*-----------------------------------Sección de inicio--------------------------------*/}
      <div className='inicio'>
        <img src={fill2} className="Fill-2" alt='fill2' />
        <div className="Line"></div>
        <span className="Inicio-Acerca-de-nos">
          <span className="Text-Style-10">Inicio</span><span className='spanAboutUs'>Acerca de nosotros</span> <span className='nav'>Historia Contacto</span>
        </span>
        <span className="ES-EN Text-mtyle-9">
          ES<span className="Text-Style-5">EN</span>
        </span>
        <div className="Line-9"></div>

          <span className="Las-mejores-raquetas Text-Style-8">
            Las mejores raquetas para jugar <span className="Text-Style-7">Tennis</span>
          </span>

        <div className="Button">
          <span className='aboutUsButton'>ACERCA DE NOSOTROS</span>
          <img src={path} alt='path' className='aboutUsArrow'/>
        </div>
      </div>
      {/*-------------------Sección de Raquetas, accesorios y pelota------------------------*/}
      <div className="Rectangle">
        <span className="TENNIS Text-Style-12">
          TENNIS
        </span>
        <span className="RaquetasAccesorios Text-Style-4">
          Raquetas.Accesorios.
          Pelotas.
        </span>
        <span className="Conoce-nuestras-raqu2 Text-Style-3">
          Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
        </span>
        <div className="ButtonRectangle">
          <span className='historia'>
            HISTORIA
          </span>
          <img src={path} alt='path' className='historiaArrow'/>
        </div>
      </div>
      {/*-----------------------------Sección de nuestras raquetas----------------------------*/}
      <div className='raquetas'>
        <img src={ballColorCourt} className="ball-color-court-1405355" alt='ballColorCourt' />
        <span className="Nuestras-Raquetas Text-Style-2">
          Nuestras <br />
          <span className="Text-Style-14">Raquetas</span>
        </span>
        <span className="Conoce-nuestras-raqu Text-Style-15">
          Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
        </span>
        <div className='bullets'>
          <img src={oval} className="Oval" alt='bullet' />
          <img src={oval2} className="Oval" alt='bullet' />
          <img src={oval2} className="Oval" alt='bullet' />
          <img src={oval2} className="Oval" alt='bullet' />
        </div>
        <div className="OvalButton"></div>
        <img src={path2} className='arrowButton' alt='arrowBtn' />
        <img src={groupCopy2} className="Group-Copy-2" alt='GreenBtn' />
        <img src={group10} className='Group-10' alt='raq10' />
        <div className="Num1">1</div>
        <img src={group11} className='Group-11' alt='raq11' />
        <div className="Num2">2</div>
        <img src={group12} className='Group-12' alt='raq12' />
        <div className="Num3">3</div>
      </div>
      {/*---------------------------Sección action-athlete-ball-----------------------------*/}
      <div className='courtImg'>
        <img src={actionAthleteBall} className="action-athlete-ball-342361" alt='actionAthlete' />
      </div>
      {/*--------------------------------Sección de contacto--------------------------------*/}
      <div className="Rectangle2">
      <img src={fill2F} className="Fill-22 icon" alt='fill2F' />
        <span className="Inicio-Acerca-de-nos2">
          <span className="Text-Style-6">Inicio</span>Acerca de nosotros <span className='footerNav'>Historia</span> Contacto
        </span>
        <div className='icons'>

          <img src={linkedIn} className="linkedIn icon" alt='linkedIn' />
          <img src={vimeo} className="vimeo icon" alt='vimeo' />
          <img src={instagram} className="instagram icon" alt='instagram' />
          <img src={twitter} className="twitter icon" alt='twitter' />
          <img src={facebook} className="facebook icon" alt='facebook' />
        </div>
      </div>
    </div>
  )
}

export default Welcome