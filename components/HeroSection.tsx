import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/heroImage.png';
import { Button } from './ui/button';
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <main>
      <header className='max-w-6xl'>
        {/* <Image src={} alt='site logo' /> */}
      </header>
      <section className='max-w-7xl mx-auto px-20 h-screen grid lg:grid-cols-[1fr,400px] items-center'>
        <div className="flex flex-col gap-y-12 h-[30%]">
          <h1 className='capitalize text-4xl  md:text-6xl lg:self-center font-bold'>
            Welcome to Whatchagot
          </h1>
          <p className='text-lg lg:self-end px-20'>
            Whatchagot is your personal AI assisted chef. It&apos;s as simple as telling us whatchagot and we&apos;ll tell you what&apos;s for dinner!
          </p>
        </div>
        <Image src={heroImage} alt='landing image' className='hidden lg:block lg:rounded-3xl self-end' />
        <div className="flex mt-6 self-start justify-center">
          <p className='flex max-w-lg items-center mr-4'>
            Discover new dishes or create your own original recipes!
          </p>
          <Button asChild className='justify-center md:justify-end lg:justify-end'>
            <Link href='/#'>
              Start Cooking!
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
