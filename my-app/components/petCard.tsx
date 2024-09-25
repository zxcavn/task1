import Link from 'next/link'
import { PetData } from './petData'

interface PetCardProps {
	pet: PetData
	index: number
	cardsPerSlide: number
}

export default function PetCard({ pet, index, cardsPerSlide }: PetCardProps) {
	return (
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
	)
}
