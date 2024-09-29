import Link from 'next/link'
import { PetData } from './petData'
import { useEffect, useState } from 'react'

interface PetCardProps {
	pet: PetData
	index: number
	cardsPerSlide: number
}

export default function PetCard({ pet, index, cardsPerSlide }: PetCardProps) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			e.target instanceof Element &&
			e.target.classList.contains('button-white')
		) {
			return
		}
		setOpen(true)
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
			{open && (
				<div
					className='popup-container'
					onClick={e => {
						e.stopPropagation()
						setOpen(false)
					}}
				>
					<div
						className='popup-content'
						onClick={e => {
							e.stopPropagation()
						}}
					>
						<img className='mobile-hide' src={pet.img} alt={pet.name} />
						<div className='popup-text'>
							<h4 className='popup-name'>{pet.name}</h4>
							<h2 className='popup-type'>
								{pet.type}-{pet.breed}
							</h2>
							<h3 className='popup-descrip'>{pet.description}</h3>
							<div className='popup-infos'>
								<h4 className='popup-info'>- Age: {pet.age}</h4>
								<h4 className='popup-info'>
									- Inoculations: {pet.inoculations}
								</h4>
								<h4 className='popup-info'>- Deseases: {pet.diseases}</h4>
								<h4 className='popup-info'>- Parasites: {pet.parasites}</h4>
							</div>
						</div>
						<div className='button-div'>
							<button
								className='button-close'
								onClick={e => {
									e.stopPropagation()
									setOpen(false)
								}}
							>
								X
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
