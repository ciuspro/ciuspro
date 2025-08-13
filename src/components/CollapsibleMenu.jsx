import { useState } from 'react'
import { gameCategories } from '../data/games'
import GameCard from './GameCard'

const CollapsibleMenu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Games
          </h2>
          <p className="text-muted text-lg">
            Explore our wide collection of skill-based games
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {gameCategories.map((category) => (
            <div key={category.id} className="card overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface-2 transition-colors"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={expandedCategory === category.id}
                aria-label={`Toggle ${category.name} category`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xl font-bold">{category.name}</span>
                </div>
                
                <span className="text-2xl text-accent transition-transform duration-300">
                  {expandedCategory === category.id ? '−' : '+'}
                </span>
              </button>

              {expandedCategory === category.id && (
                <div className="px-6 pb-6 border-t border-surface">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                    {category.games.map((game) => (
                      <GameCard key={game.id} game={game} variant="mini" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollapsibleMenu
