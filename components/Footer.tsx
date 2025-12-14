'use client'

import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <SocialIcons />
        </div>
        <p className="text-sm text-gray-400 text-center sm:text-right w-full sm:w-auto">
          © {new Date().getFullYear()} mohammadali.eth
        </p>
      </div>
    </footer>
  )
}

