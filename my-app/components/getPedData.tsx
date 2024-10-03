interface Props {
	currentIndex: number
	totalPages: number
	handlePrevClick: () => void
	handleNextClick: () => void
	handleFirstClick: () => void
	handleLastClick: () => void
}

export default function Pagination({
	currentIndex,
	handlePrevClick,
	handleNextClick,
	handleFirstClick,
	handleLastClick,
}: Props) {
	const currentPage = currentIndex + 1

	const paginationButtons = [
		<button
			key={currentPage - 1}
			className='pagination '
			onClick={() => {
				if (currentPage > 1) {
					handlePrevClick()
				}
			}}
		>
			{currentPage - 0}
		</button>,
	]

	return (
		<div className='forpetsslide'>
			<button className='doubleClick' onClick={handleFirstClick}>
				<img className='arrow' src='/icons/__.svg' alt='Arrow' />
			</button>
			<button className='oneClick' onClick={handlePrevClick}>
				<img className='arrow' src='/icons/_.svg' alt='Arrow' />
			</button>
			{paginationButtons}
			<button className='oneClick' onClick={handleNextClick}>
				<img className='arrow' src='/icons/rigth.svg' alt='Arrow' />
			</button>
			<button className='doubleClick' onClick={handleLastClick}>
				<img className='arrow' src='/icons/rright.svg' alt='Arrow' />
			</button>
		</div>
	)
}
