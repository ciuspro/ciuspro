const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-2 py-8 px-4 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-accent font-bold text-xl mb-2">
              CiusPro
            </div>
            <div className="text-muted text-sm">
              © {currentYear} CiusPro. All rights reserved.
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-muted hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              📘
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-muted hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              🐦
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-muted hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              📷
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-muted hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              📺
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-surface-2 text-center">
          <div className="text-xs text-muted space-y-2">
            <div>
              Play responsibly. 18+ only. Terms & Conditions apply.
            </div>
            <div>
              This game involves an element of financial risk and may be addictive.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
