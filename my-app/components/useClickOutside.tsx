'use client'
import { useEffect } from 'react'

const useClickOutside = (
	ref: React.RefObject<HTMLDivElement>,
	cb: () => void
) => {
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (!ref.current?.contains(event.target as Node)) {
				cb()
			}
		}

		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [ref, cb])
}

export default useClickOutside
