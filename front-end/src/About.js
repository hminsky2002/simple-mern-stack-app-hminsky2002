import { useState, useEffect } from 'react'
import axios from 'axios'
import './Messages.css'
import harry from './harry.png'

const About = props => {
  return (
    <>
      <h1>About Me</h1>
      <p>My Name is Harry Minsky. I'm 20 years old and half indian half american</p>
      <p>I am a CS Major and planning on graduating in 2024. I am originally from Newton, Massachusetts.
      Some of my interests outside of coding are college radio, sketch comedy, and doodling</p>
      <h3>I cannot die</h3>
      <img src={harry} alt="Harry Minsky" />
    </>
  )
}

// make this component available to be imported into any other file
export default About
