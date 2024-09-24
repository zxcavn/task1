'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SidebarItem from './burger'
import useClickOutside from './useClickOutside'
import { SIDEBAR_ITEMS } from '../constants/items'

export default function Header() {
	const pathname = usePathname()
	const [isOpen, setOpen] = useState(false)
	const modalRef = useClickOutside(isOpen, setOpen)

	const handleLinkClick = () => {
		setOpen(false)
	}

	const handleBurgerClick = () => {
		setOpen(!isOpen)
	}

	return (
		<header
			className={`header ${
				pathname === '/pets' ? 'header-pets' : 'header-default'
			}`}
		>
			<div className='header-container container'>
				<div className='logo-container'>
					<Link href='/'>
						<h2 className='logop'>Cozy House</h2>
						<p className='logo-text logopets'>Shelter for pets in Boston</p>
					</Link>
				</div>
				<div ref={modalRef}>
					<nav className={`header__nav ${isOpen ? '' : 'active'}`}>
						<ul className='nav-list'>
							{SIDEBAR_ITEMS.map((item, index) => (
								<SidebarItem
									key={index}
									text={item.text}
									href={item.href}
									handleLinkClick={handleLinkClick}
								/>
							))}
						</ul>
					</nav>
					<div className='keks'>
						<button
							className={`menu__burger ${isOpen ? 'active' : ''}`}
							onClick={handleBurgerClick}
						>
							<img src='icons/Burger.svg' alt='burger' />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
