import React from 'react'
import Image from 'next/image';


const Hero = ({children}) => {
  return (
    <div>
  {/* <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-[100vh]
 pt-[100px] flex flex-col justify-start items-center"> */}
   <div className="w-full h-[120vh] lg:h-[80vh] bg-orange-700 flex flex-col justify-start items-center">


   <div class="flex flex-col lg:flex-row lg:mt-[35px] justify-between items-center space-x-20 space-y-10 py-20 text-white">
      {/* Text on the Left */}
      <div className="max-w-lg px-8">
        <h1 className="text-6xl font-bold mb-4">Chonk.</h1>
        <p className="text-lg mb-6">
        Embrace the Chonky revolution on the ZkSync layer 2 blockchain. Join a community-driven movement where utility meets community power.
        </p>
        <div className="bg-orange-500 text-white px-10 py-5 rounded-full hover:bg-orange-600 transition duration-300">
        Chonk, the Original Chonky Doge Coin on ZkSync. From meme token origins to a decentralized force on the blockchain. Explore the utility crafted by the Chonk community.
        </div>
      </div>

      {/* Image Box on the Right */}
      <div className="relative min-h-[400px] min-w-[500px]">
        <Image
          src="/chonkydoge.jpg"  // Replace with the actual path to your image
          alt="Chonky"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>




  </div>
</div>
  )
}

export default Hero