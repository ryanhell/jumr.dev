import { HiClipboardList, HiInboxIn } from 'react-icons/hi';
import { AiOutlineFacebook } from 'react-icons/ai';


export default function Footer() {
  return (
    <footer className="bg-accent-1 bg-neutral-400 border-t border-accent-2">
      <div className="container mx-auto">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            T. Savage Construction, LLC
          </h3>
          <h2>West Philadelphia</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="tel:+12677709649"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Call Us
            </a>
            <span className="border border-gray-300 rounded-full px-2 text-sm text-black-400 py-0.5">
              License number 
              PA 118494  
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-8">
        <p className="text-xs font-thin float-right">Website Caringly Assembled by Friend in Seattle, Ryan @www.ryanhell.com</p>
      </div>
    </footer>
  )
}