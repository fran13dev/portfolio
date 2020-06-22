import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Contact } from './Contact'

export const About = () => {
	return (
		<div id='top' className='top_light'>
			<Contact color='contact_dark' />
			<div className='top_div'>
				<div className='container_div about_inner'>
					<div className='icon_div'>
						<Link to='/'>
							<FontAwesomeIcon
								icon={faChevronUp}
								className='icon icon_dark'
							/>
						</Link>
					</div>

					<h1 className='title title_dark'>About me</h1>
					<p className='about_text about_p'>
						I am a Full Stack JavaScript Developer currently working
						as a Technical Business Consultant.
					</p>
					<p className='about_p'>
						I have experience in both technical and functional IT
						environments, with skills ranging from software
						development and data analytics to the implementation and
						support of SaaS products.
					</p>
					<p className='about_p'>
						My goal is to develop expertise in a number of areas
						over the course of my life and career.
					</p>
					<p className='about_text about_p'>
						Driven and self-motivated, with a creative and
						problem-solving mindset, always focusing on the big
						picture. Firm believer in constant learning and finding
						ways to improve yourself.
					</p>
					<p className='about_p'>
						Passionate about technology, innovation and people.
					</p>
					<p className='about_text about_quote about_p'>
						Follow the path of the unsafe, independent thinker.
						Expose your ideas to the dangers of controversy. Speak
						your mind and fear less the label of ’crack-pot’ than
						the stigma of conformity. And on issues that seem
						important to you, stand up and be counted at any cost.
					</p>
					<p className='about_quote about_author about_p'>
						- Thomas J. Watson
					</p>
					<div className='icon_div'>
						<Link to='/projects'>
							<FontAwesomeIcon
								icon={faChevronDown}
								className='icon icon_dark'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
