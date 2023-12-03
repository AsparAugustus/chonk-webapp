import React from 'react'

const Hero3 = ({children}) => {
  return (
    <div
>
  <div className="bg-orange-700 min-h-[100vh]
 pt-[100px] flex flex-col justify-start items-center">
  <div className="w-full lg:w-4/5">

  <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
  {/* Left Section */}
  <div className=" text-white p-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl space-x-5">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The Chonk Revolution</h2>
    <p className="text-gray-200 text-sm sm:text-md md:text-lg">
    Chonk: More Than a Memecoin, It&apos;s a Community Movement!

Chonk, born from the whimsical world of memes, draws inspiration from the legendary Doge. What began as a collection of laughs and endless entertainment has evolved into a diverse community of forward-thinking individuals united by the Chonk spirit.

At the heart of Chonk is decentralization, organic growth, and a commitment to our community. No team wallets, no developer taxes – just pure Chonk power. We&apos;ve achieved everything through the strength of our community, embracing the ethos of &apos;utility through community&apos; that sets Chonk apart.

We&apos;re not just building a memecoin; we&apos;re crafting a legacy. Through market winters and bull runs, Chonk stands resilient, echoing the true spirit of what DeFi was meant to be. Join us in the Chonk revolution – where community, humor, and unity define the future of memecoins. Let&apos;s chonk it up!
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-2/3">
    <img
      src="/chonk_hero_image.jpg"  // Replace with the actual path to your image
      alt="Chonk Revolution"
      className="w-full h-auto"
    />
  </div>
</div>

    </div>
  </div>
</div>
  )
}

export default Hero3