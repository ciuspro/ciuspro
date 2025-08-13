import Hero from '../components/Hero'
import StatChips from '../components/StatChips'
import PaymentChips from '../components/PaymentChips'
import GameCarousel from '../components/GameCarousel'
import CollapsibleMenu from '../components/CollapsibleMenu'

const Home = () => {
  return (
    <>
      <Hero />
      <StatChips />
      <PaymentChips />
      <GameCarousel />
      <CollapsibleMenu />
    </>
  )
}

export default Home
