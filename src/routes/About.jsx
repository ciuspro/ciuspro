const About = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">CiusPro</span>
          </h1>
          <p className="text-xl text-muted">
            India's leading skill-based gaming platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted leading-relaxed mb-6">
              CiusPro is dedicated to providing a fair, secure, and entertaining gaming experience 
              where skill meets opportunity. We believe in creating a platform where players can 
              showcase their talents and win real rewards.
            </p>
            <p className="text-muted leading-relaxed">
              With millions of players across India, we've built a community that values 
              responsible gaming, fair play, and instant rewards.
            </p>
          </div>
          
          <div className="card p-8 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Skill-Based Gaming</h3>
            <p className="text-muted">
              All our games are skill-based, ensuring fair competition and real opportunities to win.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">Secure & Safe</h3>
            <p className="text-muted text-sm">
              Bank-grade security with encrypted transactions and secure payment gateways.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Instant Withdrawal</h3>
            <p className="text-muted text-sm">
              Get your winnings instantly with our lightning-fast withdrawal system.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-3">100+ Games</h3>
            <p className="text-muted text-sm">
              From classic card games to modern casual games, we have something for everyone.
            </p>
          </div>
        </div>

        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose CiusPro?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">✓</div>
                <div>
                  <h4 className="font-bold">Licensed & Regulated</h4>
                  <p className="text-muted text-sm">Fully compliant with Indian gaming regulations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">✓</div>
                <div>
                  <h4 className="font-bold">24×7 Support</h4>
                  <p className="text-muted text-sm">Round-the-clock customer support via chat, email, and WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">✓</div>
                <div>
                  <h4 className="font-bold">Fair Play</h4>
                  <p className="text-muted text-sm">Certified RNG and regular audits for transparency</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">✓</div>
                <div>
                  <h4 className="font-bold">Multiple Payment Options</h4>
                  <p className="text-muted text-sm">UPI, net banking, cards, and digital wallets</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">✓</div>
                <div>
                  <h4 className="font-bold">Responsible Gaming</h4>
                  <p className="text-muted text-sm">Tools and limits to promote healthy gaming habits</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">✓</div>
                <div>
                  <h4 className="font-bold">Regular Tournaments</h4>
                  <p className="text-muted text-sm">Daily tournaments with massive prize pools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
