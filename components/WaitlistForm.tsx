'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

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
        .from('waitlist_users')
        .insert([{ 
          full_name: fullName,
          email, 
          created_at: new Date().toISOString() 
        }])

      if (error) throw error

      setStatus('success')
      setMessage('Thanks for joining! We\'ll be in touch soon.')
      setFullName('')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
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
              
              {message && (
                <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
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
      </div>
    </div>
  )
} 