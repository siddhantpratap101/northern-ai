import React from "react";
import BlogAiHeader from "../components/BlogAiHeader";
import BlogStorySection from "../components/BlogStorySection";
import { collections } from "../collections";

function story(collection) {
  return <BlogStorySection img={collection.img} title={collection.title} />;
}
function BlogAi() {
  return (
    <div>
      <BlogAiHeader />
      <div className="storySection">{collections.map(story)}</div>
      <div class="loading wave">NORTHERN AI</div>
      {/* <div class="loading loading-2 wave wave-2">
        <div class="ff">
          For browsers that don't support background-clip:text:
        </div>
        <div class="loading-2-text"></div>
      </div> */}
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="rec">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default BlogAi;
