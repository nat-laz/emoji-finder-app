import React from 'react'
import GitHubButton from 'react-github-btn'

const Header = () => {
  return (
    <div className='header-container'>
        <h1>React Search Emoji App 🦄</h1>
        <p>Simple tool to search emoji with ReactJS</p>
        <GitHubButton href="https://github.com/nat-laz">star</GitHubButton>
        <GitHubButton href="https://github.com/nat-laz">Forked</GitHubButton>
    </div>
  )
}

export default Header