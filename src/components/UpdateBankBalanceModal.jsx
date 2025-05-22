import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency'

export default function UpdateBankModal({ isOpen, onClose }) {
  const currentBalance = 2500000
  const [newBalance, setNewBalance] = useState('')

  const handleUpdate = () => {
    const formattedNewBalance = parseInt(newBalance.replace(/[^0-9]/g, '')) || 0
    console.log('Current Balance:', formatCurrency(currentBalance))
    console.log('New Balance:', formatCurrency(formattedNewBalance))
  }

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    const number = parseInt(value || '0')
    setNewBalance(number.toLocaleString('en-NG'))
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"><img src="images/icon/close.svg" alt="" /></button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold text-center leading-6 text-gray-900"
                >
                  Update Bank balance
                </Dialog.Title>
                <p className="text-sm text-center text-gray-500 mt-1 mb-8">
                  Update the balance for First Bank.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Current Balance
                    </label>
                    <input
                      type="text"
                      value={formatCurrency(currentBalance)}
                      disabled
                      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      New Balance (NGN)
                    </label>
                    <input
                      type="text"
                      value={newBalance}
                      onChange={handleInputChange}
                      placeholder="₦0"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div className="mt-6">
                
                  <button
                    onClick={handleUpdate}
                    className="mb-4 px-4 py-2 w-full bg-yellow-400 hover:bg-yellow-500 text-white rounded-md font-medium"
                  >
                    Update Balance
                  </button>
                    <button
                    onClick={onClose}
                    className="px-4 py-2 w-full border rounded-md text-gray-700 border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
