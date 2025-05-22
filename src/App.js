import { useState } from 'react'
import UpdateBankModal from './components/UpdateBankBalanceModal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg"
      >
        Open Modal
      </button>

      <UpdateBankModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default App
