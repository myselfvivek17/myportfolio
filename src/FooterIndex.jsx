import React from 'react'
import './FooterIndex.css'
import insta from './assets/instagram.png'
import github from './assets/logo.png'
import mail from './assets/communication.png'
import linkdin from './assets/linkedin.png'
export default function FooterIndex() {
  return (
    <div className='footerindex'>
      <div className='leftPart'>
      <h3>Vivek A</h3>
      <div>
        <a><img src={insta} alt="" /></a>
        <a><img src={github} alt="" style={{background:"white",borderRadius:"50%"}}/></a>
        <a><img src={mail} alt="" /></a>
        <a><img src={linkdin} alt="" /></a>
      </div>
      </div>
      <div className='rightPart'>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
      </div>
    </div>
  )
}
