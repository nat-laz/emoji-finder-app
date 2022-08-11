import React from 'react'
import GitHubButton from 'react-github-btn'

const Header = () => {
  return (
    <div className='header-container'>
        <h1>React Search Emoji App 🦄</h1>
        <p>Simple tool to search emoji with ReactJS</p>
        <GitHubButton href="https://github.com/nat-laz" data-size='large' data-icon='octicon-star' data-show-count={true}>Star</GitHubButton>
        <GitHubButton href="https://github.com/nat-laz" data-size='large' data-icon='octicon-repo-forked' data-show-count={true}>Forked</GitHubButton>
    </div>
  )
}

export default Header