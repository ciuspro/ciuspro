const GameCard = ({ game, variant = 'default' }) => {
  if (variant === 'mini') {
    return (
      <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg hover:bg-surface-2 transition-colors">
        <div className="text-2xl">{game.icon}</div>
        <div className="flex-1">
          <div className="font-medium text-sm">{game.name}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
      <div className="text-6xl mb-4">{game.icon}</div>
      <h3 className="text-xl font-bold mb-2">{game.name}</h3>
      
      <div className="space-y-2 mb-4 text-sm text-muted">
        <div>Players: {game.players}</div>
        <div>Min Entry: {game.minEntry}</div>
        <div>Max Win: {game.maxWinnings}</div>
      </div>
      
      <button className="ghost-btn w-full">
        Play now
      </button>
    </div>
  )
}

export default GameCard
