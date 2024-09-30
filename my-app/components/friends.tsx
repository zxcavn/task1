import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { fetchPetData, PetData } from './petData'
import Pagination from './getPedData'
import PetCard from './petCard'

export default function OurFriendsSection() {
	const pathname = usePathname()
	const [petData, setPetData] = useState<PetData[]>([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const cardsPerSlide = pathname === '/pets' ? 8 : 3
	const [totalPages, setTotalPages] = useState(0)

	const handleData = (data: PetData[]) => {
		const sortedData = data.sort(() => Math.random() - 0.5)
		setPetData(sortedData)
		setTotalPages(Math.ceil(sortedData.length / cardsPerSlide))
	}

	const getPetData = async () => {
		try {
			const data = await fetchPetData()
			handleData(data)
		} catch (error) {
			console.error('Error fetching pet data:', error)
		}
	}

	useEffect(() => {
		getPetData()
	}, [])

	const handlePrevClick = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevIndex => prevIndex - 1)
		}
	}

	const handleNextClick = () => {
		if (currentIndex < totalPages - 1) {
			setCurrentIndex(prevIndex => prevIndex + 1)
		}
	}

	const handleFirstClick = () => {
		setCurrentIndex(0)
	}

	const handleLastClick = () => {
		setCurrentIndex(totalPages - 1)
	}

	const visiblePets = [
		...petData.slice(
			petData.length - currentIndex - cardsPerSlide,
			petData.length - currentIndex
		),
		...petData,
		...petData.slice(0, currentIndex + cardsPerSlide),
	].slice(0, petData.length)

	return (
		<section
			className={`ourfriends apad displayf ${
				pathname === '/pets' ? 'ourfriends-pets' : 'ourfriends-default'
			}`}
		>
			<div className='ourfriends-container container' id='ourfriends'>
				<div className='ayee'>
					<div className='ourfriends-logo'>
						<h3 className='ourfriends-tittle'>
							Our friends who are looking for a house
						</h3>
					</div>
					<div className='ourfriends-card-arrow'>
						<div className='arrow-center newarrows'>
							<button className='oneClick' onClick={handlePrevClick}>
								<img className='arrow' src='/icons/Arrow.svg' alt='Arrow' />
							</button>
						</div>
						<div className='ourfriends-cards'>
							{visiblePets.map((pet, index) => (
								<PetCard
									key={index}
									pet={pet}
									index={index}
									cardsPerSlide={cardsPerSlide}
								/>
							))}
						</div>
						<div className='arrow-center newarrows'>
							<button className='oneClick' onClick={handleNextClick}>
								<img className='arrow' src='/icons/Arrowtwo.svg' alt='Arrow' />
							</button>
						</div>
					</div>
					<div className='mobile-arrows newarrows'>
						<button className='oneClick' onClick={handlePrevClick}>
							<img className='arrow' src='/icons/Arrow.svg' alt='Arrow' />
						</button>
						<button className='oneClick' onClick={handleNextClick}>
							<img className='arrow' src='/icons/Arrowtwo.svg' alt='Arrow' />
						</button>
					</div>
					<div className='ourfriends-button'>
						<Link href='/pets'>
							<button className='buttonx'>Get to know the rest</button>
						</Link>
					</div>

					<Pagination
						currentIndex={currentIndex}
						totalPages={totalPages}
						handlePrevClick={handlePrevClick}
						handleNextClick={handleNextClick}
						handleFirstClick={handleFirstClick}
						handleLastClick={handleLastClick}
					/>
				</div>
			</div>
		</section>
	)
}
