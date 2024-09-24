'use client'
import Link from 'next/link'

type SidebarItemProps = {
	text: string
	href: string
	handleLinkClick: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	text,
	href,
	handleLinkClick,
}) => {
	return (
		<li className='active activep active-our activep'>
			<Link href={href} onClick={handleLinkClick}>
				{text}
			</Link>
		</li>
	)
}

export default SidebarItem
