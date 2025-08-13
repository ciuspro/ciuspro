import { useState } from 'react'
import { faqs } from '../data/faqs'

const Faqs = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-xl text-muted">
            Find answers to common questions about CiusPro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="card overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface-2 transition-colors"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={expandedFaq === faq.id}
                aria-label={`Toggle FAQ: ${faq.question}`}
              >
                <h3 className="text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                
                <span className="text-2xl text-accent transition-transform duration-300 flex-shrink-0">
                  {expandedFaq === faq.id ? '−' : '+'}
                </span>
              </button>

              {expandedFaq === faq.id && (
                <div className="px-6 pb-6 border-t border-surface">
                  <p className="text-muted leading-relaxed pt-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted mb-6">
              Can't find what you're looking for? Our support team is here to help 24×7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta">
                Contact Support
              </button>
              <button className="ghost-btn">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
