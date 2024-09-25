interface PaginationProps {
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
}: PaginationProps) {
	const currentPage = currentIndex + 1

	const paginationButtons = [
		<button
			key={currentPage - 1}
			className={`qwed ${currentPage === 1 ? '' : ''}`}
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
			<button className='qwedouble' onClick={handleFirstClick}>
				<img className='arrow' src='/icons/__.svg' alt='Arrow' />
			</button>
			<button className='qwe' onClick={handlePrevClick}>
				<img className='arrow' src='/icons/_.svg' alt='Arrow' />
			</button>
			{paginationButtons}
			<button className='qwe' onClick={handleNextClick}>
				<img className='arrow' src='/icons/rigth.svg' alt='Arrow' />
			</button>
			<button className='qwedouble' onClick={handleLastClick}>
				<img className='arrow' src='/icons/rright.svg' alt='Arrow' />
			</button>
		</div>
	)
}
