'use client'
import RootLayout from './layout'
import AboutSection from '../../components/about'
import OurFriendsSection from '../../components/friends'
import HelpSection from '../../components/help'
import DonationSection from '../../components/donat'
import NotOnly from '../../components/notOnly'

export default function Home() {
	return (
		<RootLayout>
			<NotOnly />
			<AboutSection />
			<OurFriendsSection />
			<HelpSection />
			<DonationSection />
		</RootLayout>
	)
}
