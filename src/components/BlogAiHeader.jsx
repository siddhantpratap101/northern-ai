import React from 'react'
import "../App.css"
import search from "../assets/pictures/search.png"

function BlogAiHeader() {
  return (
    <div className='blogAiHeader'>
      <h1 className='blogAih1Header'>BLOG.AI</h1>
      <input type="search" name="search" id="BlogSearch" placeholder=' Search your article here' />
      <img src={search} alt="search icon" className='searchIcon'/>
    </div>
  )
}

export default BlogAiHeader
