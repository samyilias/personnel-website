import React from 'react'
import Link from 'gatsby-link'
import profile from '../images/me.png'
import styled from 'styled-components'
import noirdoor from '../images/noirdoor.png'
const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 50px;
    }

`
const Work = () => (
    <div>
     <h2>Current projects </h2>
     <ProjectContainer>
     <img src={noirdoor}/>
     <h4>Noirdoor</h4>
    </ProjectContainer>
    <p>Our goal at noirdoor is to build a music streaming service where fans can listen to music and artists can get paid for their work.</p>
     <p>We want to fix the music economy. We want fans to have access to excellent music and to be recognized for their contribution. We want artists to be paid fairly and to have the best tools to grow their audience and interact with their fans.</p>
    <p>We aim to make the music industry more fair and fun for everyone.</p>
     </div>
)

export default Work
