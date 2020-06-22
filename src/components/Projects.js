import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { Contact } from './Contact'

// import images
import tetris from '../images/tetris.jpg'
import itunes from '../images/itunes.jpg'
import code from '../images/code.jpg'
import type from '../images/type.jpg'

export const Projects = () => {
	return (
		<div id='top' className='top_dark'>
			<Contact color='contact_light' />
			<div>
				<div className='project_container'>
					<div className='project_icon'>
						<Link to='/about'>
							<FontAwesomeIcon
								icon={faChevronUp}
								className='icon icon_light project_top_icon'
							/>
						</Link>
					</div>
					<h1 className='title title_white project_title'>
						Projects
					</h1>

					{/* SLIDER */}
					<div className='carousel'>
						<Carousel className='carousel_inner'>
							{/* ONE */}
							<Carousel.Item>
								<img
									src={tetris}
									alt='Tetris'
									className='image'
								/>
								<Carousel.Caption>
									<div className='carousel_caption'>
										<h3>Tetris</h3>
										<p>
											Tetris game built with React.js as
											the 2nd capstone project of a coding
											bootcamp
										</p>
										<a
											href='https://fran13dev-tetris.herokuapp.com/'
											className='link_app'
											target='_blank'
											rel='noopener noreferrer'
										>
											Link to App
										</a>
									</div>
								</Carousel.Caption>
							</Carousel.Item>

							{/* TWO */}
							<Carousel.Item>
								<img
									src={itunes}
									alt='iTunes'
									className='image'
								/>
								<Carousel.Caption>
									<div className='carousel_caption'>
										<h3>iTunes API</h3>
										<p>
											Built using the iTunes API with
											React.js and Node.js/Express as the
											3rd capstone project of a coding
											bootcamp
										</p>
										<a
											href='https://fran13dev-itunesmini.herokuapp.com/'
											className='link_app'
											target='_blank'
											rel='noopener noreferrer'
										>
											Link to App
										</a>
									</div>
								</Carousel.Caption>
							</Carousel.Item>

							{/* THREE */}

							<Carousel.Item>
								<img
									src={type}
									alt='Speed Typing'
									className='image'
								/>
								<Carousel.Caption>
									<div className='carousel_caption'>
										<h3>Speed Typing</h3>
										<p>
											Speed typing game built with
											React.js that counts the amount of
											words you type in 30 seconds
										</p>
										<a
											href='https://fran13dev-speedtyping.herokuapp.com/'
											className='link_app'
											target='_blank'
											rel='noopener noreferrer'
										>
											Link to App
										</a>
									</div>
								</Carousel.Caption>
							</Carousel.Item>

							{/* FOUR */}

							<Carousel.Item>
								<img
									src={code}
									alt='Code Connect'
									className='image'
								/>
								<Carousel.Caption>
									<div className='carousel_caption'>
										<h3>Code Connect</h3>
										<p>
											Platform for developers to connect
											built with the MERN stack as the
											final capstone project of a coding
											bootcamp
										</p>
										<a
											href='https://fran13dev-codeconnect.herokuapp.com/'
											className='link_app'
											target='_blank'
											rel='noopener noreferrer'
										>
											Link to App
										</a>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
					{/* END OF SLIDER */}
				</div>
			</div>
		</div>
	)
}
