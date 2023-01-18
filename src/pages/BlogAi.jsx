import React from 'react';
import BlogAiHeader from "../components/BlogAiHeader";
import BlogStorySection from "../components/BlogStorySection"
import { collections } from '../collections';

  function story(collection) {
    return (<BlogStorySection
      img={collection.img}
      title={collection.title}
    />)
  }   
function BlogAi() {

  return (
    <div>
      <BlogAiHeader />
      <div className='storySection'>
        {collections.map(story)}
      </div>
    </div>

  )
}

export default BlogAi;
