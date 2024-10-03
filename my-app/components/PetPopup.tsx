import { PetData } from './petData'

type Props = {
	pet: PetData
	onClose: () => void
}

const PetPopup: React.FC<Props> = ({ pet, onClose }) => {
	return (
		<div
			className='popup-container'
			onClick={e => {
				e.stopPropagation()
				onClose()
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
						<h4 className='popup-info'>- Inoculations: {pet.inoculations}</h4>
						<h4 className='popup-info'>- Deseases: {pet.diseases}</h4>
						<h4 className='popup-info'>- Parasites: {pet.parasites}</h4>
					</div>
				</div>
				<div className='button-div'>
					<button className='button-close' onClick={onClose}>
						X
					</button>
				</div>
			</div>
		</div>
	)
}

export default PetPopup
