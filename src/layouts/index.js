import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    
`
const Layout = ({ children, data }) => (
  <div 
  style={{
    background:'linear-gradient(125deg,#fff,#f3f3f3 41%,#ededed 0,#fff)'

  }}
  >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Wrapper>
      {children()}
    </Wrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
