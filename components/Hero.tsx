"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'
import TSStyles from '@/app/styles/styles'

const Hero = () => {

  function randomFunc(){
    console.log('lift');
  };

  return (
    <div className='hero-div flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
                  <div className='hero-padding-div flex-1 pt-36 px-10'>
                                <h1 className={TSStyles.heroTitleStyle}>Find, book or rent a car — quickly and easily!</h1>
                                <p className={TSStyles.heroSubtitleStyle}>Streamline your car rental experience with our effortless booking process.</p>
                                <CustomButton title='Explore Cars' containerStyles={TSStyles.customBtnContainerStyle} handleClick={randomFunc}/>
                  </div>
                  <div className={TSStyles.heroImageContainer}>
                                <div className={TSStyles.heroImageDiv}>
                                              <Image src='/hero-bg.png' alt='overlay' fill className='object-contain' />
                                              <Image src="/hero.png" alt="hero" fill className='object-contain' />
                                </div>
                  </div>

    </div>
  )
}

export default Hero