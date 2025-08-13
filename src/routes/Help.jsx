import { contactInfo } from '../data/faqs'

const Help = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Need <span className="text-accent">Help?</span>
          </h1>
          <p className="text-xl text-muted">
            We're here to help you 24×7. Choose your preferred way to get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact) => (
            <div key={contact.id} className="card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-bold mb-3">{contact.type}</h3>
              <div className="text-accent font-semibold mb-2">{contact.value}</div>
              <div className="text-muted text-sm">{contact.responseTime}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Support</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg hover:bg-surface-2 transition-colors cursor-pointer">
                <div className="text-2xl">💬</div>
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-muted text-sm">Instant response</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg hover:bg-surface-2 transition-colors cursor-pointer">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="font-semibold">Email Support</div>
                  <div className="text-muted text-sm">Within 2 hours</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg hover:bg-surface-2 transition-colors cursor-pointer">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-muted text-sm">Instant messaging</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Support Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-surface rounded-lg">
                <div>
                  <div className="font-semibold">Customer Support</div>
                  <div className="text-muted text-sm">General inquiries</div>
                </div>
                <div className="text-accent font-bold">24×7</div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-surface rounded-lg">
                <div>
                  <div className="font-semibold">Technical Support</div>
                  <div className="text-muted text-sm">App & payment issues</div>
                </div>
                <div className="text-accent font-bold">24×7</div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-surface rounded-lg">
                <div>
                  <div className="font-semibold">KYC Support</div>
                  <div className="text-muted text-sm">Verification help</div>
                </div>
                <div className="text-accent font-bold">24×7</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Common Issues & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">Can't Login?</h4>
                <p className="text-muted text-sm">
                  Check your internet connection and ensure you're using the correct credentials.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">Payment Failed?</h4>
                <p className="text-muted text-sm">
                  Verify your payment method and ensure sufficient balance. Try UPI for instant success.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">Withdrawal Pending?</h4>
                <p className="text-muted text-sm">
                  Complete KYC verification first. Withdrawals are processed within 24 hours.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">Game Not Loading?</h4>
                <p className="text-muted text-sm">
                  Clear app cache, restart the app, or check for updates in the app store.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">Account Locked?</h4>
                <p className="text-muted text-sm">
                  Contact support immediately. We'll help you regain access within 24 hours.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">Bonus Not Credited?</h4>
                <p className="text-muted text-sm">
                  Check your email for bonus terms. Contact support if not credited within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-muted mb-6">
              Our dedicated support team is available round the clock to assist you.
            </p>
            
            <button className="cta">
              Contact Support Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
