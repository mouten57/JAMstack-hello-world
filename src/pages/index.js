import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <p>
      My name is matt and I'm a teacher-turned-developer.
    </p>
  
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
