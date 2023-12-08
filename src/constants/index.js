import {
	WalletIcon,
	TicketIcon,
	LockClosedIcon,
	ArrowRightOnRectangleIcon,
	InformationCircleIcon,
	Bars4Icon,
	ChartBarIcon,
	ChartPieIcon,
	UserIcon,
} from '@heroicons/vue/24/outline'

export const PUBLIC_LAYOUT = 'default-layout'
export const AUTH_LAYOUT = 'auth-layout'

export const PROFILE_OPTIONS = [
	{
		name: 'My Wallet',
		icon: WalletIcon,
		route: {
			name: 'Home',
			params: {},
		},
	},
	{
		name: 'Tools',
		icon: TicketIcon,
		route: {
			name: 'Home',
			params: {},
		},
	},
	{
		name: 'Privacy',
		icon: LockClosedIcon,
		route: {
			name: 'Home',
			params: {},
		},
	},
	{
		name: 'About',
		icon: InformationCircleIcon,
		route: {
			name: 'Home',
			params: {},
		},
	},
	{
		name: 'Logout',
		icon: ArrowRightOnRectangleIcon,
		route: {
			name: 'Logout',
			params: {},
		},
	},
]

export const NAV_ITEMS = [
	{
		name: 'Home',
		text: 'Home',
		icon: Bars4Icon,
	},
	{
		name: 'Report',
		text: 'Report',
		icon: ChartBarIcon,
	},
	{
		name: 'Budget',
		text: 'Budget',
		icon: ChartPieIcon,
	},
	{
		name: 'Profile',
		text: 'Profile',
		icon: UserIcon,
	},
]
