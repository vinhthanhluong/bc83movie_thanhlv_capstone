import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function BookTicketPage() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="border-b border-gray-600 pb-2 text-center">
            <div className="text-sm text-gray-400 mb-2">Màn hình</div>
            <div className="w-full h-1 bg-gray-500" />
          </div>
          <div className="grid gap-2">
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-purple-600
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A1
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A2
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A3
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A4
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A5
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A6
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A7
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A8
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A9
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A10
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A11
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A12
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A13
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A14
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A15
              </button>
              <button
                className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold
                  bg-red-500
                  hover:opacity-80 transition"
              >
                A16
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div color="gray-700" label="Đã đặt" />
            <div color="pink-400" label="Ghế bạn chọn" />
            <div color="purple-600" label="Ghế thường" />
            <div color="red-500" label="Ghế VIP" />
          </div>
          <div className="border-t-4 border-orange-400 p-4 bg-white rounded shadow text-gray-800 flex flex-wrap gap-6 items-center justify-start">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gray-300" />
              <span>Ghế đã bán</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-pink-400" />
              <span>Ghế đang chọn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-purple-600" />
              <span>Ghế thường</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-red-500" />
              <span className="text-blue-600 font-medium">Ghế VIP</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg space-y-4">
          <img
            alt="Movie poster"
            className="w-full rounded-lg"
            src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
          />
          <h2 className="text-xl font-bold">
            Thanh Gươm Diệt Quỷ: Vô Hạn Thành
          </h2>
          <div className="max-w-sm p-6 bg-white rounded shadow space-y-4 text-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>⏳</span>
                <span>Thời lượng</span>
              </div>
              <span className="font-semibold text-blue-900">113 phút</span>
            </div>
            <hr className="border-dashed border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>🏛️</span>
                <span>Rạp chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                Beta Quang Trung
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>Ngày chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">05/08/2025</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>🕰️</span>
                <span>Giờ chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">23:40</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>💺</span>
                <span>Phòng chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">P4</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>🎟️</span>
                <span>Ghế ngồi</span>
              </div>
              <span className="font-semibold text-blue-900">--</span>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="w-full cursor-pointer bg-[#E82E96] hover:bg-[#E82E96] text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 mt-4"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="max-w-md mx-auto p-6 rounded-lg bg-gray-900 shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#E82E96] text-center mb-6">
                      Xác nhận thông tin đặt vé
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Mã lịch chiếu</span>
                        <span className="text-white">LC123456</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Tên phim</span>
                        <span className="text-white">Inside Out 2</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Tên rạp chiếu</span>
                        <span className="text-white">Beta Quang Trung</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Địa chỉ</span>
                        <span className="text-right text-white">
                          101 Quang Trung, Gò Vấp, TP.HCM
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Phòng chiếu</span>
                        <span className="text-white">P4</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Ngày chiếu</span>
                        <span className="text-white">05/08/2025</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Giờ chiếu</span>
                        <span className="text-white">23:40</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Ghế ngồi</span>
                        <span className="text-white">A1, A2, A3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-400">Giá vé</span>
                        <span className="text-white">111111111111</span>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r bg-[#E82E96] to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white py-2 rounded-md transition duration-300">
                      Xác nhận &amp; Thanh toán
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
