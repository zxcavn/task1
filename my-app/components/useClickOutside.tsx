'use client'
import { useEffect, useRef } from 'react'

const useClickOutside = (isOpen: boolean, setOpen: (open: boolean) => void) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				isOpen &&
				ref.current &&
				!ref.current.contains(event.target as Node)
			) {
				setOpen(false)
			}
		}

		document.addEventListener('click', handleOutsideClick)

		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.removeEventListener('click', handleOutsideClick)
			document.body.style.overflow = 'auto'
		}
	}, [isOpen, setOpen])

	return ref
}

export default useClickOutside
