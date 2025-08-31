'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Check } from 'lucide-react'

interface WaitlistFormProps {
  onClose: () => void;
}

export default function WaitlistForm({ onClose }: WaitlistFormProps) {
  const [step, setStep] = useState(1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const { error } = await supabase
        .from('waitlist')  // Changed from 'waitlist_users' to 'waitlist'
        .insert([{ 
          full_name: fullName,
          email, 
          created_at: new Date().toISOString() 
        }])

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          throw new Error('This email is already on our waitlist!')
        }
        throw error
      }

      setStatus('success')
      setMessage('Thanks for joining! We\'ll be in touch soon.')
      setFullName('')
      setEmail('')
    } catch (error) {
      setStatus('error')
      if (error instanceof Error) {
        setMessage(error.message)
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    }
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-[#6CD401] rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-regular font-helvetica text-black">
                Thank you. We'll be in touch soon. In the meantime, follow us on{' '}
                <a 
                  href="https://www.instagram.com/h.ai.nds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Instagram
                </a>
                {' '}and{' '}
                <a 
                  href="https://x.com/handsforai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  X
                </a>
              </p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold font-helvetica mb-4">Join the waitlist</h2>
            <p className="text-gray-600 mb-6 font-helvetica">
              Be the first to experience the future of cooking with AI.
            </p>

            <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-helvetica">
                      What's your name?
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black font-helvetica text-black"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-helvetica"
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-helvetica">
                      What's your email?
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black font-helvetica text-black"
                      autoFocus
                    />
                  </div>
                  
                  {message && status === 'error' && (
                    <p className="text-sm text-red-600">
                      {message}
                    </p>
                  )}

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-helvetica"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-helvetica disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}