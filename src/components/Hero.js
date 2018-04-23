import React from 'react'
import HeroStyles from '../styles/Hero.module.sass'

const Hero = () => (
  <section id={HeroStyles.Hero}>
    <div className={HeroStyles.values}>
      <h1 className={`${HeroStyles.proposition} Brasley-Bold`}>Hablar como un nativo</h1>
      <h2 className={`${HeroStyles.tagline} Brasley-Regular`}>Mejora tu nivel de Español con classes individual online</h2>
    </div>
  </section>
)

export default Hero;
