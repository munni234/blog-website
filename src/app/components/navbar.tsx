import Link from 'next/link';

const Navbar = ()=> {
  return (
    <nav className=" text-white sticky w-auto top-0 sm:pl-11">
     <div className='sm:h-[80px] bg-gray-800 lg:pl-[300px]  lg:pr-[200px]  lg:flex sm:flex sm:justify-between justify-around pt-6 lg:w-auto sm:w-auto align-middle lg:h-[80px]'>
      <h5 className='text-3xl font-bold  sm:text-2xl  text-green-500'>{"My Blog"}</h5>
      <div className='lg:flex lg:gap-3 lg:justify-evenly sm:flex sm:gap-1 '>
      <ul className="lg:flex lg:space-x-12 sm:flex sm:gap-2">
          <li className='text-green-300'>
            <Link href="/">Home</Link>
          </li>
         
          <li className='text-green-300'>
            <Link href="./aboutandcontact">Contact</Link>
          </li>

          <li className='text-green-300'>
            <Link href="/studio">Create Blog</Link>
          </li>

          <li className='text-green-300'>
            <Link href={"/"} >Available Blogs</Link>
          </li>
        </ul>
      </div>
     </div>
    </nav>
  );
};

export default Navbar;