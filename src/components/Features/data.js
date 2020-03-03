import analitycs from './images/analitycs.png'
import whale from './images/whale_tracking.png'
import watchlists from './images/watchlists.png'
import templates from './images/templates.png'
import studio from './images/studio.png'
import sonar_trends from './images/sonar_trends.png'
import signals from './images/signals.png'
import reports from './images/reports.png'
import indicators from './images/indicators.png'
import daa_signals from './images/daa_signals.png'

export const data = [
	{
		title: 'Sanbase Studio',
		description: "See on-chain, social and development information visualized against price for 900+ crypto assets, and set up alerts for major network anomalies.",
		img: studio
	},
	{
		title: 'Sonar Signals',
		description: "Set up low-latency alerts for changes to a coin’s price, on-chain activity, social media mentions and the behavior of its ‘whales’. Unlimited market signals for Sanbase Pro users!",
		img: signals
	},
	{
		title: 'Watchlists',
		description: "Keep tabs on the price, on-chain & development activity of your favorite coins with personalized watchlists. Get detailed weekly analytics for all your watchlists with Sanbase Pro.",
		img: watchlists
	},
	{
		title: 'Social Trends',
		description: "Our proprietary Social Metrics are extremely effective in identifying exit opportunities. Peak social hype - especially during an uptrend - often correlates with an impending top.",
		img: sonar_trends
	},
	{
		title: 'Unique market metrics & indicators',
		description: "Access dozens of custom metrics unavailable anywhere else - like our MVRV Long/Short divergence, which has a strong track record in predicting major trend shifts in Bitcoin:",
		img: indicators
	},
	{
		title: 'Exclusive market reports',
		description: "Read special market briefs written directly by the Santiment team, where we break down the most notable events in crypto. ",
		img: reports
	},
	{
		title: 'Holder distribution analytics',
		description: "See what each category of addresses are doing - from fish to mega whales - and how their moves impact the market:",
		img: analitycs
	},
	{
		title: 'Price-DAA divergence signals',
		description: "By tracking divergence trends in price and on-chain activity, our data can produce strong buy and sell signals for BTC, ETH and a variety of altcoins",
		img: daa_signals
	},
	{
		title: 'Whale tracking and monitoring',
		description: "Go granular with top blockchain transactions and discover smart money, market makers, and other price-moving addresses. Then - set up alerts for when they start to make moves. ",
		img: whale
	},
	{
		title: 'Custom templates & alphas',
		description: "Get access to pre-made spreadsheets and market strategies leveraging Santiment data and  custom-built by the Santiment team",
		img: templates
	}
]
