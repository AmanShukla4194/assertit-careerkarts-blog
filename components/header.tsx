import Link from 'next/link'
import Searchbar from './searchbar'

export default function Header() {
  return (
    <>
    <div className="bg-[#fffff] py-3 border-b-[1px] border-black">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="flex gap-4">
              {/*CareerKart Logo*/}
              <Link href='/'>
                <img src="/Images/careerkarts 1.png"></img>
              </Link>
              {/*Search Button*/}
              <Searchbar />
            </div>

            <div className="flex gap-5">
              <div className="flex text-base text-black gap-8 my-auto">
                <div>
                  <Link href='/education'>Education</Link>
                </div>
                <div>
                  <Link href='/Future'>Future</Link>
                </div>
                <div>
                  <Link href='/career'>Career</Link>
                </div>
                <div>
                  <Link href='/AI'>AI</Link>
                </div>
                <div>
                  <Link href='/India'>India</Link>
                </div>
                <div>
                  <Link href='/data science'>Data Science</Link>
                </div>
                <div>
                  <Link href='/Technology'>Technology</Link>
                </div>
              </div>

              <div className="">
                <button className=" px-8 py-3 border-collapse bg-black text-white rounded-[22px]">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
    </div>
    </>
  )
}
