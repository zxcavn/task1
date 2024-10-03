'use client'
export default function DonationSection() {
	return (
		<section className='addition apad displayf'>
			<div className='addition-container container'>
				<div className='addition-image'>
					<img
						className='doggy'
						src='/images/donation-dog.svg'
						alt='donation-dog'
					/>
				</div>
				<div className='addition-card'>
					<h3 className='addition-tittle'>You can also make a donation</h3>
					<h5 className='addition-text'>
						Name of the bank / Type of bank account
					</h5>
					<div className='addition-bank'>
						<img src='/icons/credit-card.svg' alt='credit-card' />
						<h4 className='addition-number'>
							<a href='#'>8380 2880 8028 8791 7435</a>
						</h4>
					</div>
					<p className='addition-text-about'>
						Legal information and lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
						ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
						malesuada fames ac ante ipsum primis in faucibus.
					</p>
				</div>
			</div>
		</section>
	)
}
