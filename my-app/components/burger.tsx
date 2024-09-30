'use client'
import Link from 'next/link'

type Props = {
	text: string
	href: string
	handleLinkClick: () => void
}

const SidebarItem: React.FC<Props> = ({ text, href, handleLinkClick }) => {
	return (
		<li className='active activep active-our activep'>
			<Link href={href} onClick={handleLinkClick}>
				{text}
			</Link>
		</li>
	)
}

export default SidebarItem
