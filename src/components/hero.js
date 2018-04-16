import React from 'react'
import Link from 'gatsby-link'
import profile from '../images/me.png'
import javascript from '../images/javascript.svg'
import instagram from '../images/instagram.svg'

import styled from 'styled-components'
const HeroContainer = styled.div`
    padding: 2rem 0rem;
    text-align: center;
    img{
        width: 200px;
        border-radius: 50%;
    }
    h2{
        color: #3c3b3f;
    }
`
const Social = styled.div`
`
const Hero = () => (
  <HeroContainer>
      <img src={profile}/>
      <h1>Ilias Aboubeker</h1>
      <h2 style={{
          fontWeight: 100
      }}>
      Front End Engineer 😅
      </h2>

  </HeroContainer>
)

export default Hero
