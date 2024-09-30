import Link from 'next/link'
import { PetData } from './petData'
import { useEffect, useState } from 'react'
import PetPopup from './PetPopup'

type Props = {
	pet: PetData
	index: number
	cardsPerSlide: number
}

export default function PetCard({ pet, index, cardsPerSlide }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const overflowStyle = isOpen ? 'hidden' : 'auto'
		document.body.style.overflow = overflowStyle
	}, [isOpen])

	const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			e.target instanceof Element &&
			e.target.classList.contains('button-white')
		) {
			return
		}
		setIsOpen(true)
	}

	return (
		<div
			onClick={handleCardClick}
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
			{isOpen && <PetPopup pet={pet} onClose={() => setIsOpen(false)} />}
		</div>
	)
}
