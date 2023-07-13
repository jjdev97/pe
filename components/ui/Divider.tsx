"use client"

export default function Divider() {
    return (
      <div className="relative bg-gray-800">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-700" />
        </div>
      </div>
    )
  }
  