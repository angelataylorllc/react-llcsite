import '../global.css'
import logo from '/whitelogo.svg'
import lightbulb from '/lightbulb.png';
import trophy from '/trophy.png';
import team from '/team.png';
import abledesktop from '/ablenft-desktop-ad.png'
import ablemobile from '/ableNFTmint-phone.png'
import bizdesktop from '/simple-desktop-ad.png'
import bizmobile from '/simple-phone-ad.png'
import aboutme from '/aboutme.png'
import rightCurve from '/rightCurve.svg'

function App() {
  return (
    <main className="bg-black bg-cover w-lvw">
      <section className="min-h-screen min-w-full">

    {/* Nav section */}

      <nav className="flex flex-col text-white text-center py-10 mb-12 lg:flex-row lg::w-11/12 lg:mx-auto 2xl:pt-16">

        <div className="flex my-auto max-w-96 mx-auto lg:mx-0 xl:mx-6">
          <img className="resize px-4 h-10 sm:h-16 lg:mx-2 lg:h-12" src={logo} />
        </div>
                   
        <div>
          <ul className="flex text-white justify-evenly py-10 lg:gap-6 lg:mx-6 xl:gap-14 xl:mx-14 2xl:mr-60">
              <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" href="#Portfolio">Portfolio</a></div>
              <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" href="#AboutUs">About</a></div>
              <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" 
              href="https://www.linkedin.com/in/angela-taylor-78430538/">LinkedIn</a></div>
              <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" 
              href="https://github.com/angelataylorllc/">GitHub</a></div>
            </ul>
        </div>

        <div className="flex flex-grow justify-center lg:h-9 lg:my-auto ">
          <a className="bg-indigo-500 whitespace-nowrap px-4 py-1 rounded-md" href="mailto:hello@angelataylorllc.com">Contact us</a>
        </div>
      </nav>

      {/* Intro Text Section */}

      <div className="flex flex-col bg-[url('/public/striped-circle.svg')] 
      bg-no-repeat sm:bg-left-top lg:bg-right-top bg-[length:636px_636px] py-10  overflow-visible ">
        
        <div className="flex font-bold text-2xl px-5 text-center w-5/6 mx-auto sm:text-5xl sm:w-11/12 sm:leading-relaxed sm:text-left md:pr-10 md:px-6 
        md:text-4xl lg:w-8/12 lg:text-6xl lg:mx-20 lg:leading-normal 2xl:text-8xl 2xl:w-auto 2xl:leading-relaxed">
          <h1 className="text-white"><span className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 inline-block text-transparent bg-clip-text">
            Transforming</span> Your Ideas into Reality</h1>
        </div>
        
        <div className="w-5/6 mx-auto sm:flex sm:flex-col md:flex-row md:my-8 md:w-11/12 lg:my-auto xl:my-10 xl:px-2 2xl:my-1">
          <div className="flex my-auto sm:mt-12 sm:mb-8 md:mr-8 xl:m-auto">
            <a className="bg-indigo-500 text-white text-center -mt-8 rounded-md invisible whitespace-nowrap sm:visible sm:px-6 sm:py-3 
            lg:w-40 md:h-10 md:-mt-0 lg:h-12 2xl:text-xl" 
            href="mailto:hello@angelataylorllc.com">Work with us</a>
          </div>

          <div className="flex text-gray-400 text-center text-xl px-6 sm:px-0 md:pr-18 lg:pt-9 lg:w-7/12 lg:mx-20 xl:text-2xl xl:text-left xl:p-0 xl:mx-auto 
          2xl:text-3xl">
            <p>At Angela Taylor LLC, we&apos;re passionate about transforming ideas into digital reality. 
              With expertise in website and mobile application development, we empower small businesses 
              to thrive in the digital landscape.</p>
          </div>

        </div>
      <div className="overflow-hidden">
        <img className="ml-auto  invisible -mt-6 md:visible sm:-mt-36 sm:-mb-36" src={rightCurve} />
      </div>
      </div>

      {/* Features Section */}

      <div className="flex flex-col pb-14 lg:flex-row lg:mx-12 lg:mt-36 lg:mb-36">

        <div className="flex flex-col flex-1 px-3 py-6 ">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <img src={lightbulb} />
            </div>
            <h1 className="text-white text-base sm:text-xl font-bold m-auto p-2 whitespace-nowrap text-center 2xl:text-3xl">Creative Solutions</h1>
            <p className="text-gray-400 text-base p-3 text-center 2xl:text-xl" >Tailored websites and apps 
            reflecting your brand.</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-3 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <img src={trophy} />
            </div>
            <h1 className="text-white text-base sm:text-xl font-bold m-auto p-2 whitespace-nowrap 2xl:text-3xl">Results-Driven</h1>
            <p className="text-gray-400 text-base p-3 text-center 2xl:text-xl" >We focus on deliverying tangible 
            results for your business.</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-3 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <img src={team} />
            </div>
            <h1 className="text-white text-base sm:text-xl font-bold m-auto p-2 whitespace-nowrap lg:flex lg:flex-nowrap 2xl:text-3xl">Crafting Success Together</h1>
            <p className="text-gray-400 text-base p-3 text-center 2xl:text-xl" >Our skilled team collaborates 
            with you to shape a beautifully crafted digital product.</p>
          </div>
        </div>
      </div>

      {/* Project Example Section */}

      <h1 className="text-white text-3xl font-bold text-center py-6 lg:text-4xl xl:text-6xl xl:my-4">Work</h1> 

      <div id="Portfolio" className="flex flex-col w-5/6 mx-auto">

        <div className="flex flex-col bg-zinc-700 m-4 py-6 rounded-xl">
       
          <div className="flex flex-col m-4 lg:flex-row lg:mt-16">

          <div className="m-2 mx-auto 2xl:size-1/2">
            <img className="my-auto rounded-lg md:px-8 lg:h-72 2xl:h-full " src={abledesktop} />
          </div>

          <div className="text-white text-sm leading-tight md:my-6 md:leading-snug  lg:my-0 lg:flex lg:flex-1 lg:flex-col">
              <h1 className="text-xl sm:my-4 lg:text-2xl xl:text-3xl font-semibold my-2 lg:mb-6">AbleNFT Mint</h1>
              <p className=' lg:leading-snug lg:text-lg xl:text-xl font-light mb-6'>AbleNFT Mint is an NFT minting platform designed to provide a seamless user experience for minting and managing NFTs. 
                The site was designed collaboratively using Figma, and I took on the task of bringing the design to life using React and Tailwind CSS. 
                My focus was on creating a responsive, mobile-first design to ensure the site looks great on all devices. Throughout the development process, 
                I utilized modern development tools to achieve a polished, high-performance website.</p>
              <h1 className='lg:text-2xl font-light mb-2'>DEVELOPMENT TOOLS</h1>
              <ul className='list-disc list-inside lg:text-lg font-light mb-4'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
              </ul>
              <a  href='https://ablenftmint-react.netlify.app/' className='lg:text-lg font-light underline underline-offset-4'>View project → </a>
            </div>

          </div>
          <div className="flex ">

            <div className="invisible w-0 lg:w-full -mb-96  lg:-mb-0 lg:visible lg:flex lg:flex-1 lg:flex-col lg:px-10">
                <img className="my-10 mx-auto mr-10 h-60 rounded-lg lg:h-52" src={ablemobile} />
            </div>
          </div>

        </div>

        <div className="flex flex-col bg-zinc-700 m-4 py-6 rounded-xl my-20">
       
       <div className="flex flex-col m-4 lg:flex-row lg:mt-16">

       <div className=" m-2 mx-aut 2xl:size-1/2">
         <img className="my-auto rounded-lg md:px-8 lg:h-72 2xl:h-full " src={bizdesktop} />
       </div>

       <div className="text-white text-sm leading-tight md:my-6 md:leading-snug  lg:my-0 lg:mr-10 lg:flex lg:flex-1 lg:flex-col">
           <h1 className="text-lg sm:my-4 lg:text-2xl xl:text-3xl font-semibold my-2 lg:mb-6">Simple Business Ad</h1>
           <p className=' lg:leading-snug lg:text-lg xl:text-xl font-light mb-6'>Simple Business Ad is a promotional website created to showcase web development skills, 
           developed in collaboration with Collier Technologies. I was responsible for the entire design, which was then refined in Figma. 
           The site is built with a mobile-first approach using React and Tailwind CSS, ensuring a sleek and responsive user experience across all devices. 
           This project demonstrates my ability to deliver professional, high-quality websites for business promotion.</p>
           <h1 className='lg:text-2xl font-light mb-2'>DEVELOPMENT TOOLS</h1>
           <ul className='list-disc list-inside lg:text-lg font-light mb-4'>
             <li>React</li>
             <li>Tailwind CSS</li>
             <li>Node.js</li>
           </ul>
           <a  href='https://simple.colliertech.org/' className='lg:text-lg font-light underline underline-offset-4'>View project → </a>
         </div>

       </div>
       <div className="flex ">

         <div className="invisible w-0 lg:w-full -mb-96  lg:-mb-0 lg:visible lg:flex lg:flex-1 lg:flex-col lg:px-10">
             <img className="my-10 mx-auto mr-10 rounded-lg lg:h-72" src={bizmobile} />
         </div>
       </div>

     </div>

      </div>

      {/* Contact Us Section */}

      <div className="flex flex-col mt-16 pb-16 lg:w-9/12 lg:mx-auto">

      <div className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 rounded-md
        h-80 lg:h-96 ">

        <p className="text-gray-300 text-center text-base sm:text-lg pt-16 px-2 lg:pt-24 pb-4 lg:text-2xl 2xl:text-5xl">
          Want to work with us? Let&apos;s talk</p>

        <h1 className="text-white font-bold text-lg px-2 sm:text-2xl text-center py-6 lg:text-3xl lg:pb-10 2xl:text-4xl">
          hello@angelataylorllc.com</h1>

        <div className="flex justify-center">
          <a className="bg-white px-4 py-2 rounded-md lg:text-lg xl:text-xl" href="mailto:hello@angelataylorllc.com">Contact Us</a>
        </div>

      </div>

    </div>

    {/* Footer Section */}

    <div className="flex flex-col lg:flex-row lg:justify-between lg:w-9/12 lg:mx-auto lg:py-20">

      <div className="flex flex-col w-5/6 mx-auto lg:w-7/12 lg:mr-6">

        <div className="flex max-w-96 sm:mx-auto lg:mx-0 lg:mb-4 2xl:my-8">
          <img className="resize my-2 h-12 sm:h-16" src={logo} />  
        </div>

        <div id="AboutUs" className="2xl:my-6">
          <h1 className="text-gray-300 text-xl mx-2 my-4 font-semibold sm:h-9 sm:pl-6 xl:pl-0 xl:text-2xl">About Us</h1>
        </div>

        <div>
          <p className="text-gray-400 mx-2 my-4 sm:h-9 sm:pl-6 lg:mx-4 xl:pl-0 xl:text-xl 2xl:mr-8 2xl:leading-relaxed">At Angela Taylor LLC, we&apos;re your dedicated digital 
            partners. Our team is on a mission to empower small businesses through innovative websites and 
            mobile applications. With a focus on collaboration and tailored solutions, we turn your vision into 
            a digital reality. Our commitment is to provide not just services, but a personalized journey to success. 
            Join us at Angela Taylor LLC, where your digital aspirations take center stage.</p>
        </div>
        
      </div>
        
        <div className="flex flex-1 justify-center pb-10 m-8 sm:mt-36 lg:mx-0 lg:mt-8 ">
          <img className="opacity-80 resize lg:w-full xl:w-5/6 2xl:w-3/6" src={aboutme} />
        </div>

    </div>

      </section>
    </main>
  )
}

export default App
