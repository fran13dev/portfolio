import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Contact } from './Contact'

export const Home = () => {
	return (
		<div id='top' className='top_dark'>
			<Contact color='contact_light' />
			<div className='top_div'>
				<div className='container_div'>
					<h1 className='title title_white'>Hi, I'm</h1>

					<div className='home_flip_div'>
						<h1 className='home_flip_text'>F</h1>
					</div>

					<h1 className='home_text_end title title_white'>rancois</h1>

					<h3 className='home_description'>
						developer with a passion for the web
					</h3>

					<h6 className='home_idea'>
						Have a project or idea you'd like to discuss?
					</h6>

					<a href='mailto:fdevilliers134@gmail.com?body=Hi Francois'>
						<button className='home_connect'>Let's chat!</button>
					</a>

					<div className='icon_div'>
						<Link to='/about'>
							<FontAwesomeIcon
								icon={faChevronDown}
								className='icon icon_light'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
