import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import GameCard from './GameCard'
import { topGames } from '../data/games'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const GameCarousel = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Cash Games
          </h2>
          <p className="text-muted text-lg">
            Play your favorite games and win real money instantly
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="game-carousel"
        >
          {topGames.map((game) => (
            <SwiperSlide key={game.id}>
              <GameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default GameCarousel
