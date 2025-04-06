import React from 'react'

const HeadingContentCarosel = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
      <div className="space-y-6">
        <p className="text-blue-600 font-medium tracking-wide uppercase">ARTICLES</p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl !font-bold text-gray-900">Latest From Our Press Room</h2>

        <div className="flex justify-center">
          <div className="w-24 h-1 bg-blue-200 rounded"></div>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Check out our Press Room for more info and find out how you can get one of our experts to talk shop(ping) with
          you.
        </p>
      </div>
    </section>
  )
}

export default HeadingContentCarosel;