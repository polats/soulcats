import Link from "next/link";
import type { NextPage } from "next";
import { BoltIcon, GiftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw]">
       <Image 
          src="/assets/soulcat.png"
          className="absolute right-10 -bottom-40 animate-bouncycat" 
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
                
                Don't miss your chance to <b>Adopt a SoulCat</b> when the{" "} 
                <b className="rainbow-text">Portal</b> is active!<br/><br/>
                Only a few cross over every time. Each wallet can only adopt a SoulCat once.
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
                💖<b className="love-text">LOVE</b>💖 can be used to adopt a new SoulCat{" "} 
                <b>even if the <b className="rainbow-text">Portal</b> is closed</b>.
              </p>
            </div>
          </div>
        </div>

        
      </div>
      
    </div>
  );
};

export default Home;
