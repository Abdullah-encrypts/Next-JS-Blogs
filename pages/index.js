import React, { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
