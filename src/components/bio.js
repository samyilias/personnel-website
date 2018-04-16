import React from 'react'
import Link from 'gatsby-link'
import profile from '../images/me.png'
import styled from 'styled-components'

const BioContainer = styled.div`

`

const Bio = () => (
  <BioContainer>
    <h2>About me</h2>
     <p> I Am a passionate front end developer . I love building apps using javascript. I am currently working as a front end engineer  for <a href="http://www.noirdoor.com">noirdoor</a> </p>
     <p>I also built small web apps for fun . <a href='http://samyilias.github.io/risk'>Risk</a> ( board game ) is a web app that allow risk players to pick missions .  <a href='https://movieappilias.herokuapp.com/'>Movieapp</a> is a react app that I built using ReactJS, React router v4 and <a href="http://www.themoviedb.org">Themoviedb</a></p>
  </BioContainer>
)

export default Bio
