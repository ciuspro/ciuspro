import { paymentMethods } from '../data/games'

const PaymentChips = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-muted mb-2">
            Secure Payment Methods
          </h3>
        </div>
        
        <div className="flex justify-center items-center space-x-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-2xl grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              title={method.name}
            >
              {method.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentChips
