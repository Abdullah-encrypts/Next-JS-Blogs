import React, { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

const HomePage = () => {
  return (
    <Fragment>
        <Hero></Hero>
        <FeaturedPosts></FeaturedPosts>
    </Fragment>
  )
}

export default HomePage