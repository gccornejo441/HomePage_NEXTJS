import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Image from 'next/image';

export default () => {

  return (
  <>
  <Head/>
    <Nav />
    <h1 class="text-2xl"></h1>
    <div class="bg-gray-500 text-center flex justify-center h-full">
        <Image src="/static/smokey-wood.jpg" height="750" width="1700"/>
      </div>

      <div class="bg-yellow-100 text-center flex justify-center h-96 my-12">
        <div class="text-gray-900 font-thin w-1/3 uppercase text-xs py-4 h-96">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div>
      <div class="bg-yellow-100 text-center flex justify-center h-96 my-12">
        <div class="text-gray-900 font-thin w-1/3 uppercase text-xs py-4 h-96">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div>

      <div class="bg-yellow-100 text-center flex justify-center h-96 my-12">
        <div class="text-gray-900 font-thin w-1/3 uppercase text-xs py-4 h-96">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div>

      <div class="bg-yellow-100 text-center flex justify-center h-96 my-12">
        <div class="text-gray-900 font-thin w-1/3 uppercase text-xs py-4 h-96">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div>

      <div class="bg-yellow-100 text-center flex justify-center h-96 my-12">
        <div class="text-gray-900 font-thin w-1/3 uppercase text-xs py-4 h-96">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div>
  </>
  )
};
