import React from "react";
import { ConnectWallet, useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {

  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="/img/00.png"
              alt=""
            ></img>
          </div>

          <div className="space-y-2 text-center p-5">
            <h1 className="text-4xl font-bold text-white"> Franco Apes </h1>
            <h2 className="text-xl text-gray-300">
              A collection of FrancoApes who live & breathe react
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between">
          <h2 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline uppercase decoration-pink-600/50">
              Franco's
            </span>{" "}
            NFT Market Place
          </h2>
            <ConnectWallet></ConnectWallet>
        </header>

        <hr className="my-2 border" />

        {/* content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h2 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Franco Ape Coding Club | NFT Drop
          </h2>
          <p className="p2 text-xl text-gray-500 pt-10">13 / 21 NFT's Claimed</p>
        </div>

        {/* mint button */}
        <button className="h-16 w-full bg-gradient-to-r from-cyan-800 to-rose-500 text-white rounded-full mt-10 font-bold">
          Mint NFT (0.01 ETH)
        </button>

      </div>
    </div>
  );
}

export default NFTDropPage;
