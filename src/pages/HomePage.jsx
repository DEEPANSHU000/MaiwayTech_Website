import Hero from '../components/Hero'
import ClientMarquee from '../components/ClientMarquee'
import StatsBar from '../components/StatsBar'
import GlobalImpact from '../components/GlobalImpact'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Engagement from '../components/Engagement'
import usePageTitle from '../hooks/usePageTitle'

export default function HomePage() {
    usePageTitle('Home')
    return (
        <>
            <Hero />
            <ClientMarquee />
            <StatsBar />
            <GlobalImpact />
            <Process />
            <FAQ />
            <Engagement />
        </>
    )
}
