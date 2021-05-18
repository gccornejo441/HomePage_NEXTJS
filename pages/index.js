import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Products from '../components/products';

export default () => {

  return (
  <>
  <Head/>
    <Nav />
    <h1 class="text-2xl"></h1>
    <div class=" text-center flex justify-center h-full">
        <img class="relative z-0 top-50" src="/smokey-wood.jpg" height="800" width="1900"/>
      </div>
        <div class="text-center flex justify-evenly">
          <div class="uppercase font-bold text-2xl my-5">New Arrivals</div>
        </div>
      {/* <div class="bg-yellow-100 text-center flex justify-center h-96 my-12 relative">
        <div class="text-gray-800 font-thin w-1/3 uppercase text-xs py-4 h-96">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div> */}
      <Products/>
  </>
  )
};
