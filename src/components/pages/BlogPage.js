import React, { useState } from 'react'
import GetTheApp from '../GetTheApp'
import FreqAskedQues from '../FreqAskedQues'
import FooterComp from '../FooterComp'
import BlogComp from '../BlogComp'

function BlogPage() {
  return (
    <>
        <BlogComp />
        <GetTheApp />
        <FreqAskedQues />
        <FooterComp />
    </>
  )
}

export default BlogPage
