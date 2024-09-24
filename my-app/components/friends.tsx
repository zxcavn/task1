'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export type PetData = {
	name: string
	img: string
	type: string
	breed: string
	description: string
	age: string
	inoculations: string[]
	diseases: string[]
	parasites: string[]
}

export async function fetchPetData(): Promise<PetData[]> {
	const response = await fetch(
		'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/shelter/pets.json'
	)
	if (!response.ok) {
		throw new Error('Failed to fetch pet data')
	}

	const originalPetData: PetData[] = await response.json()

	// Создаем массив, содержащий 40 элементов
	const extendedPetData: PetData[] = []
	for (let i = 0; i < 5; i++) {
		extendedPetData.push(...originalPetData)
	}

	return extendedPetData
}

export default function OurFriendsSection() {
	const pathname = usePathname()
	const [petData, setPetData] = useState<PetData[]>([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const cardsPerSlide = pathname === '/pets' ? 8 : 3

	useEffect(() => {
		const getPetData = async () => {
			try {
				const data = await fetchPetData()
				setPetData(data.sort(() => Math.random() - 0.5))
			} catch (error) {
				console.error('Error fetching pet data:', error)
			}
		}
		getPetData()
	}, [])

	const handlePrevClick = () => {
		setCurrentIndex(prevIndex =>
			prevIndex > 0 ? prevIndex - 1 : petData.length - cardsPerSlide
		)
	}

	const handleNextClick = () => {
		setCurrentIndex(prevIndex =>
			prevIndex < petData.length - cardsPerSlide ? prevIndex + 1 : 0
		)
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
							<button className='qwe' onClick={handlePrevClick}>
								<img className='arrow' src='/icons/Arrow.svg' alt='Arrow' />
							</button>
						</div>
						<div className='ourfriends-cards'>
							{visiblePets.map((pet, index) => (
								<div
									key={index}
									className={`ourfriends-card ${
										index > cardsPerSlide - 1 ? 'mobile-disk notfordefault' : ''
									} ${index > cardsPerSlide ? 'nonemob noneplan' : ''}`}
								>
									<img src={pet.img} alt={pet.name} />
									<h4 className='ourfriends-text'>{pet.name}</h4>
									<div className='button-learn'>
										<Link href='/pets'>
											<button className='button-white'>Learn more</button>
										</Link>
									</div>
								</div>
							))}
						</div>
						<div className='arrow-center newarrows'>
							<button className='qwe' onClick={handleNextClick}>
								<img className='arrow' src='/icons/Arrowtwo.svg' alt='Arrow' />
							</button>
						</div>
					</div>
					<div className='mobile-arrows newarrows'>
						<button className='qwe' onClick={handlePrevClick}>
							<img className='arrow' src='/icons/Arrow.svg' alt='Arrow' />
						</button>
						<button className='qwe' onClick={handleNextClick}>
							<img className='arrow' src='/icons/Arrowtwo.svg' alt='Arrow' />
						</button>
					</div>
					<div className='ourfriends-button'>
						<Link href='/pets'>
							<button className='buttonx'>Get to know the rest</button>
						</Link>
					</div>

					<div className='forpetsslide'>
						<button className='qwedouble'>
							<img className='arrow' src='/icons/__.svg' alt='Arrow' />
						</button>
						<button className='qwe' onClick={handlePrevClick}>
							<img className='arrow' src='/icons/_.svg' alt='Arrow' />
						</button>
						<button className='qwe firstqwe'>1</button>
						<button className='qwe' onClick={handleNextClick}>
							<img className='arrow' src='/icons/rigth.svg' alt='Arrow' />
						</button>
						<button className='qwedouble'>
							<img className='arrow' src='/icons/rright.svg' alt='Arrow' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
