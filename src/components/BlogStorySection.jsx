import React from 'react'
import "../App.css"

function BlogStorySection(props) {
  return (
    <div >
          <div className='featuredStory'>
              <img src={props.img} width="10px" alt="" srcset="" />
              <h6 className='storyTitle'>{props.title}</h6>
      </div>
    </div>
  )
}

export default BlogStorySection
