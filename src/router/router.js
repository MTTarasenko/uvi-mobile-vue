import LoginPage from '@/views/intro/login-page'
import RegistrationPage from '@/views/intro/registration-page'
import ForgotPassPage from '@/views/intro/forgot-pass-page'
// import MainPage from '@/views/main-page'
// import BaseLayout from '@/layout/base-layout'
import Home from '@/views/home'
import ViewVideo from '@/views/video-view'
import SubscriptionPage from '@/views/subscriptions'
import AddVideoPage from '@/views/add-video'
import VideoList from '@/views/video-list'
import SubscriptionsHome from '@/views/subscriptions-home'
import SubscriptionsList from '@/views/subscriptions-list'
import AccountPage from '@/views/account'
import NotificationsPage from '@/views/notifications'
import BalancePage from '@/views/balance'
import BalanceLayout from '@/views/balance-layout'
import MoneyTransactionPage from '@/views/money-transactions'
import ProfilePage from '@/views/profile'
import VideoSearch from '@/components/modals/video-search'
import StatisticsPage from '@/views/statistics/statistics'
import PromoteVideoPage from '@/views/promote-video'
import PromotePay from '@/views/promote-pay'
import ProfileSettings from '@/views/profile-settings'
import PromotedVideosPage from '@/views/promoted-videos'
import AdvertisingReport from '@/views/advertising-report'
import MyVideoSettings from '@/views/my-video-settings'
import VideoListCategory from '@/views/video-list-category'
import InvoicesPage from '@/views/invoices'
import PartnershipPage from '@/views/partnership'
import PartnershipHistory from '@/views/partnership-history'



export default [
    {path: '/', component: LoginPage},
    {path: '/register', component: RegistrationPage},
    {path: '/forgot-pass', component: ForgotPassPage},
    {
        path: '/main',
        component: Home,
        children: [
            {
                name: 'video-list',
                path: '',
                components: {
                    default: VideoList
                }
            },
            {
                name: 'video',
                path: 'video-view',
                components: {
                    default: ViewVideo
                },
            },
            {
                path: 'video-search',
                components: {
                    default: VideoSearch
                }
            }
        ]
    },
    {
        path: '/video-list-category',
        component: VideoListCategory
    },
    {
        path: '/subscriptions',
        component: SubscriptionPage,
        children: [
            {
                name: 'subs-home',
                path: '',
                components: {
                    default: SubscriptionsHome
                },
            },
            {
                name: 'subs-list',
                path: 'subs-list',
                components: {
                    default: SubscriptionsList
                }
            }
        ]
    },
    {
        path: '/add-video',
        component: AddVideoPage
    },
    {
        path: '/account',
        component: AccountPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/video-settings',
        component: MyVideoSettings
    },
    {
        path: '/profile-settings',
        component: ProfileSettings
    },
    {
        path: '/notifications',
        component: NotificationsPage
    },
    {
        path: '/balance',
        component: BalanceLayout,
        children: [
            {
                path: '',
                components: {
                    default: BalancePage
                }
            },
            {
                path: 'history',
                components: {
                    default: MoneyTransactionPage
                }
            }
        ]
    },
    {
      path: '/invoices',
      component: InvoicesPage
    },
    {
      path: '/partnership',
      component: PartnershipPage
    },
    {
        path: '/partnership-history',
        component: PartnershipHistory
    },
    {
        path: '/statistics',
        component: StatisticsPage
    },
    {
        path: '/promote',
        component: PromoteVideoPage
    },
    {
        path: '/promoted-videos',
        component: PromotedVideosPage
    },
    {
      path: '/advertising-report',
      component: AdvertisingReport
    },
    {
        path: '/promote-pay',
        component: PromotePay
    }
]
