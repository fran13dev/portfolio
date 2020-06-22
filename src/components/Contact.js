import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Contact = ({ color }) => {
	return (
		<div className='contact_div'>
			<a
				href='https://www.linkedin.com/in/francois-de-villiers-a7b7a5169/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon
					icon={faLinkedin}
					className={`contact_icon ${color}`}
				/>
			</a>
			<a
				href='https://github.com/fran13dev'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon
					icon={faGithub}
					className={`contact_icon ${color}`}
				/>
			</a>
			<a
				href='mailto:fran13dev@gmail.com?body=Hi Francois'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon
					icon={faEnvelope}
					className={`contact_icon contact_last ${color}`}
				/>
			</a>
		</div>
	)
}
