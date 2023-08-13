import type { NextPage } from "next";
import { BoltIcon, GiftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Image from "next/image";
import { useState } from 'react';
import { 
  useScaffoldContractWrite,
  useGenerateArt
} from "~~/hooks/scaffold-eth";
import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");

  const { data, loading, error, fetchData } = useGenerateArt(firstWord, secondWord)

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw]">
       <Image 
          src="/assets/soulcat.png"
          className="fixed right-10 -bottom-20 animate-bouncycat" 
          width={250}
          height={250}
          alt="meow"/>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">SoulCats 😽</span>
            <span className="block text-2xl mb-2">Spreading 💖LOVE💖 across the Superchain ⛓️</span>
          </h1>
        </div>

        <div className="flex-grow w-full mt-2 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BoltIcon className="h-8 w-8 fill-secondary" />
              <p>
                
                Don{"'"}t miss your chance to <b>Adopt a SoulCat</b> when the{" "} 
                <b className="rainbow-text">Portal</b> is active!<br/><br/>
                Only a few SoulCats cross over every time.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <GiftIcon className="h-8 w-8 fill-secondary" />
              <p>
                When a SoulCat crosses over it brings two gifts, one in each hand.<br/><br/>
                There are 4 types of gifts: <br/>
                <b className="care">Care</b>{", "}
                <b className="respect">Respect</b>{", "}
                <b className="responsibility">Responsibility</b>{", and "}
                <b className="knowledge">Knowledge</b>{"."}
                <br/><br/>Trade gifts with other SoulCat owners to complete the set!
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <HeartIcon className="h-8 w-8 fill-secondary" />
              <p>
                Collecting all 4 gifts will allow you to create <br/>
                💖<b className="love-text">LOVE</b>💖.<br/><br/>
                💖<b className="love-text">LOVE</b>💖 can be used to adopt a new SoulCat {" "} 
                <b>even if the <b className="rainbow-text">Portal</b> is closed</b>.
              </p>
            </div>
            
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-center mb-8">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">
              The <b className="rainbow-text">Portal</b> is currently OPEN
              </span>
            <span className="block text-2xl mb-2 py-2">Two words form in your mind...</span>
          </h1>
          </h1>

          <input
              type="text"
              placeholder="Write the 1st word here (a color, perhaps?)"
              className="mb-2 input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-xl placeholder-white uppercase"
              onChange={e => setFirstWord(e.target.value)}              
              />
            <input
              type="text"
              placeholder="and write the 2nd one here (a noun, maybe?)"
              className="mb-6 input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-xl placeholder-white uppercase"
              onChange={e => setSecondWord(e.target.value)}              
            />              

          <h1 className="text-center">
            <span className="block text-2xl mb-2 py-2">Now press the button to CALL a SoulCat!</span>
          </h1>
          <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
            <div className="flex rounded-full border-2 border-primary p-1">

              <button
                className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                  loading ? "loading" : ""
                }`}
                onClick={() => fetchData()}
              >
                {!loading && (
                  <>
                    Call <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                  </>
                )}
              </button>            
              </div>

              {data && <div><img src={data} alt="Fetched content" /></div>}              
            </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
