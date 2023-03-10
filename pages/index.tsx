import Head from 'next/head'
import { BsFillPhoneFill, BsFillMoonStarsFill, BsMoonStarsFill, BsGlobe, BsMap, BsPhone, BsPhoneFill, BsMapFill, BsPinMap, BsPinMapFill, BsFillCameraFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillRead } from 'react-icons/ai'
import { MdLocalMovies, MdPets } from 'react-icons/md'
import { TbBeach } from 'react-icons/tb'

import Image from 'next/image'
import avatar from '../public/dev.png'
import awcars from '../public/works/awcars.png'
import herawedding from '../public/works/herawedding.png'
import themorningpink from '../public/works/themorningpink.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>UIXWEBDESIGNS | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-lightGray'>

        {/* Heading */}
        <section>
          <nav className='px-10 py-5 bg-beige flex justify-between'>
            <h1 className='font-tanpearl'>Developped by uixwebdesigns</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
              <li><a href='#resume' className=' font-tanpearl text-black px-4 py-2 rounded-sm ml-8'>Resume</a></li>
            </ul>
          </nav>
        </section>

        {/* About */}
        <section className=''>
          <div className='text-center py-10'>
            <h2 className='text-xl text-black font-tanpearl '>Danisha Soobhen</h2>
            <h3 className='text-xl py-1 text-darkBeige'>Software Engineer.</h3>
            <p className='text-md leading-8 py-5 '>Freelancer providing services for programming needs and design content needs. Join me down below and let's get cracking!</p>
            <div className='text-5xl font-medium flex justify-center gap-16 text-primaryDark'>
              <a href="https://www.linkedin.com/in/danisha-s-36143b148" target="_blank" > <AiFillLinkedin /></a>
              <AiFillGithub />
              <a href='#contact'> <AiFillMail /> </a>
            </div>
          </div>
          <div className='relative rounded-full w-80 h-100 mx-auto overflow-hidden'>
            <Image src={avatar} alt={''} className="object-cover" />
          </div>

        </section>

        {/* Choose */}
        <section className='py-4'>
          <div className='text-center flex justify-evenly'>
            <div className=" m-4 text-white cursor-pointer w-24 h-24 md:w-64 md:h-64 bg-black rounded-full flex justify-center items-center">
              <a href='#creative' className='text-sm md:text-2xl font-tanpearl'>Creative</a>
            </div>
            <div className=" m-4 text-black cursor-pointer w-24 h-24 md:w-64 md:h-64 bg-beige rounded-full flex justify-center items-center">
              <a href='#career' className='text-sm md:text-2xl font-tanpearl'>Career</a>
            </div>
            <div className=" m-4 text-white cursor-pointer w-24 h-24 md:w-64 md:h-64 bg-black rounded-full flex justify-center items-center">
              <a href='#services' className='text-sm md:text-2xl font-tanpearl'>Services</a>
            </div>
          </div>
        </section>

        {/* Creative */}
        <section id="creative">
          <div className=''>
            <h3 className='text-xl text-center py-4 font-tanpearl'>Creation</h3>
            <div className='bg-beige text-black px-10 min-h-screen py-10'>

              <h3 className='text-xl text-center py-4 font-tanpearl'>Latest Projects</h3>
              <p className='text-center py-10 font-tanpearl'>Informative | Shop & Blog website design </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <Image src={awcars} className="rounded-lg" alt='' />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">AWCARS</h5>
                      <p className="text-gray-700 text-base mb-4">
                        This website was build for a professional car dealership in Mauritius.
                      </p>
                      <a href='https://awcars.mu/' className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-beige hover:shadow-lg focus:bg-beige focus:shadow-lg focus:outline-none focus:ring-0 active:bg-beige active:shadow-lg transition duration-150 ease-in-out">Visit Site</a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <Image src={herawedding} className="rounded-lg" alt='' />
                    </a>

                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Hera Wedding</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Wedding portfolio and informative website.
                      </p>
                      <a href='https://hera.wedding/' className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-beige hover:shadow-lg focus:bg-beige focus:shadow-lg focus:outline-none focus:ring-0 active:bg-beige active:shadow-lg transition duration-150 ease-in-out">Visit Site</a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <Image src={themorningpink} className="rounded-t-lg" alt='' />
                    </a>

                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">TheMorningPink</h5>
                      <p className="text-gray-700 text-base mb-4">
                        A lovely project for a small business owner selling fashionable clothing.
                        Site not live yet, still in preprod mode.
                      </p>
                      <a href='http://www.prelaunch.themorningpink.com/' className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-beige hover:shadow-lg focus:bg-beige focus:shadow-lg focus:outline-none focus:ring-0 active:bg-beige active:shadow-lg transition duration-150 ease-in-out">Visit Site</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <p className='text-center py-10 font-tanpearl'>Technology: React JS</p>
              <p className='text-center text-white bg-black py-10 font-tanpearl'>Coming Soon !</p> */}
              {/* <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                      </p>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                      </p>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                  </div>
                </div>


                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                      </p>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <p className='text-center py-10 font-tanpearl'>Technology: React Native</p> */}
              {/* <p className='text-center text-white bg-black py-10 font-tanpearl'>Coming Soon !</p> */}

              {/* <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                      </p>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                      </p>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                      </p>
                      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" >
          <div className=''>
            <h3 className='text-xl text-center py-4 font-tanpearl'>Resume</h3>
            <div className='bg-beige text-black px-10 py-10 md:flex md:justify-center'>

              <div className='bg-lightGray rounded-lg shadow-lg block p-6 md:w-1/2'>
                <div className=' py-4 px-10'>
                  <h1 className='text-xl font-tanpearl'>Danisha Soobhen</h1>
                  <p>Web designer & developer</p>
                </div>

                <div className=' py-4 px-10'>
                  <ul className=''>
                    <li className='flex items-center'><BsPinMapFill className='mr-2' />  Avenue Des Ibis Mayflower Building Sodnac Quatre Bornes.</li>
                    <li className='flex items-center'><BsPhoneFill className='mr-2' /> +230 58171024</li>
                    <li className='flex items-center'><AiFillMail className='mr-2' /> danisha661@live.co.uk | uixwebdesigns@gmail.com</li>
                    <li className='flex items-center'><BsGlobe className='mr-2' /> - </li>
                  </ul>
                </div>

                <div className=' py-4 px-10'>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 w-0  px-10"></div>
                  </div>
                  <h1 className='text-xl font-tanpearl py-4'>Professional <br /> Statement</h1>
                  <p>Skilled and reliable Software Engineer with proven ability to resolve project issues efficiently with a solid background in technology and 4 years of experience managing web/programming projects. Successful troubleshooter with experience debugging Javascript and Php codes.
                    Proven ability to work with database management tools such as HeidiSQL and MySQL. Dedicated and enthusiastic team player. </p>
                </div>

                <div className=' py-4 px-10'>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 w-0  px-10"></div>
                  </div>

                  <h1 className='text-xl font-tanpearl py-4'>Work <br /> Experience</h1>
                  <ol className="border-l border-gray-300">
                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">2021-Current</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Full Stack Developer BOCASAY MAURITIUS</h4>
                        <p className="text-gray-500 mb-3">PHP Symfony Technology (Symfony Version 3, 5) | Front End development (React JS | Html5 | Css, Css3, Sass | Javascript| Responsive Web design | Wordpress) </p>
                      </div>
                    </li>

                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">2019-2021</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Software Engineer IQERA</h4>
                        <p className="text-gray-500 mb-3">ExtJS (Javascript Framework) | Code maintenance | New Components/Features creation | Agile methodology | Project refinement | Debugging | Team work | Deployment | Leading freshers on project</p>
                      </div>
                    </li>

                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">2019</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5"> Front end engineer Proximity BBDO Indian Ocean</h4>
                        <p className="text-gray-500 mb-3">Html | Css | JQuery | Javascript | Campaign websites creation from PSD mockups | Slicing images from PSD </p>
                      </div>
                    </li>

                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">27 September 2018 ??? 30 November 2018</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Web Developer Trainee at Rogers Capital</h4>
                        <p className="text-gray-500 mb-3">Worked on Codeigniter framework | SQLSERVER | PHP | MYSQL | Participated in front end tasks | Integrating materialize css, bootstrap 4 on projects </p>
                      </div>
                    </li>

                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">06 August 2018 ??? 23 August 2018</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Front-End Developer Trainee at Sphere Media Technologies Co. Ltd</h4>
                        <p className="text-gray-500 mb-3">Wordpress design and development | Learn about server deployment on cPanel | graphic designs on photoshopCS6</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className=' py-4 px-10'>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 w-0  px-10"></div>
                  </div>
                  <h1 className='text-xl font-tanpearl py-4'>Education</h1>
                  <ol className="border-l border-gray-300">
                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">2016 - December 2018 </p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Enrolled in BSc (Hons) Web Technologies at University of Technology Mauritius</h4>
                        <p className="text-gray-500 mb-3">First Class Degree Certificate</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">2009 - 2015 </p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Belle Rose State Secondary School (BRSSS)</h4>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-start items-center pt-2">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">March 2016</p>
                      </div>
                      <div className="mt-0.5 ml-4 pb-5">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">IELTS British Council Mauritius</h4>
                        <p className="text-gray-500 mb-3">Score of 6.5</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-start items-center pt-2">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">January 2016</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Higher School Certificate (HSC)</h4>
                        <p className="text-gray-500 mb-3">Main: Computer science, French, Principle of Accounts & Sub: Mathematics, General Paper</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 text-sm">Decmber 2013</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">School Certificate (SC)</h4>
                        <p className="text-gray-500 mb-3">Computer studies, English, French, Mathematics, Principle of Accounts, Art & Design, French Literature</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className=' py-4 px-10'>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 w-0  px-10"></div>
                  </div>
                  <h1 className='py-4 text-xl font-tanpearl'>Professional Skills</h1>


                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> HTML5 </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>


                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> CSS | CSS3 </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>80%</span>
                    <p> SASS </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-80 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>60%</span>
                    <p> REACT JS </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-60 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> JAVASCRIPT ES5 | ES6 </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>50%</span>
                    <p> SYMFONY 3 | 5 | 6 </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-56 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> PHP 7 | 8 </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>40%</span>
                    <p> NEXT JS </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-40 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>60%</span>
                    <p> TAILWIND CSS </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-60 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>90%</span>
                    <p> WORDPRESS </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-96 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> TEAM WORK </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> AGILE METHODOLOGY </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>

                  <div className='py-4'>
                    <span className='float-right'>100%</span>
                    <p> COMMUNICATION </p>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-darkBeige h-1 w-100 px-10"></div>
                    </div>
                  </div>

                </div>
                <div className=' py-4 px-10'>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 w-0  px-10"></div>
                  </div>
                  <h1 className='py-4 text-xl font-tanpearl'>Interests</h1>
                  <div className='flex py-2'>
                    <MdLocalMovies className='mr-2' />
                    <MdPets className='mr-2' />
                    <TbBeach className='mr-2' />
                    <BsFillCameraFill className='mr-2' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career */}
        {/* <section id="career">
          <div className=''>
            <h3 className='text-xl text-center py-4 font-tanpearl'>Career</h3>
            <div className='bg-beige text-black px-10 min-h-screen py-10'>

              <p className='text-center py-10 font-tanpearl'>Technology: PHP Symfony</p>
              <p className='text-center text-white bg-black py-10 font-tanpearl'>Coming Soon !</p>

              <p className='text-center py-10 font-tanpearl'>Technology: Html5 + Css3 + Javascript</p>
              <p className='text-center text-white bg-black py-10 font-tanpearl'>Coming Soon !</p>

            </div>
          </div>
        </section> */}

        {/* Services */}
        <section id="services">
          <div className=''>
            <h3 className='text-xl text-center py-4 font-tanpearl'>Services</h3>
            <div className='bg-beige text-black px-10 min-h-screen py-10'>
              {/* <p className='text-center py-10 font-tanpearl'>Technology: PHP Symfony</p> */}
              <p className='text-center text-white bg-black py-10 '>Want to work with me ?
                <br />
                <br /> 
                <span className="bg-beige p-3 text-black">Coming soon !</span>
                {/* <span className="bg-beige p-3 text-black">Checkout our pricing plan for website design & development</span> */}
              </p>


              {/* <div className="grid md:grid-cols-3 gap-4 text-center py-5 ">
                <div className="p-9 bg-white">
                  <div className="flex flex-wrap -m-8">
                    <div className="w-full sm:w-1/2 p-8">
                      <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Basic Package</span>
                      <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses</p>
                    </div>
                    <div className="w-full sm:w-1/2 p-8">
                      <div className="sm:max-w-max ml-auto">
                        <p className="font-bold">
                          <span className="text-5xl leading-tight tracking-px-n">Rs 15,000</span> */}
                          {/* <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span> */}
                        {/* </p>
                        <p className="font-medium text-gray-500 leading-relaxed">One-time payment</p>
                      </div>
                    </div> */}

                    {/* <div className='w-full'>
                      <ul>
                        <li> - Domain name (.com, .mu)</li>
                        <li> - Shared hosting</li>
                        <li> - Homepage </li>
                        <li> - About </li>
                        <li> - Contact Form</li>
                      </ul>
                    </div> */}



                  {/* </div>
                  <div className="mt-9">
                    <button className="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-beige hover:bg-black transition ease-in-out duration-200" type="button">Start 14 days free trial</button>
                  </div>
                </div> */}

                {/* <div className="p-9 bg-white">
                  <div className="flex flex-wrap -m-8">
                    <div className="w-full sm:w-1/2 p-8">
                      <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Advanced Package</span>
                      <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses for a shopping experience</p>
                    </div>
                    <div className="w-full sm:w-1/2 p-8">
                      <div className="sm:max-w-max ml-auto">
                        <p className="font-bold">
                          <span className="text-5xl leading-tight tracking-px-n">Rs 25,000</span> */}
                          {/* <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span> */}
                        {/* </p>
                        <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-9">
                    <button className="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-black hover:bg-beige transition ease-in-out duration-200" type="button">Start 14 days free trial</button>
                  </div>
                </div> */}

                {/* <div className="p-9 bg-white">
                  <div className="flex flex-wrap -m-8">
                    <div className="w-full sm:w-1/2 p-8">
                      <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Pro Package</span>
                      <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses</p>
                    </div>
                    <div className="w-full sm:w-1/2 p-8">
                      <div className="sm:max-w-max ml-auto">
                        <p className="font-bold">
                          <span className="text-5xl leading-tight tracking-px-n">Rs 50,000</span> */}
                          {/* <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span> */}
                        {/* </p>
                        <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-9">
                    <button className="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-beige hover:bg-black transition ease-in-out duration-200" type="button">Start 14 days free trial</button>
                  </div>
                </div> */}
{/* 
              </div> */}

            </div>
          </div>
        </section>

        {/* <section id="contact">
          <div className=''>
            <h3 className='text-xl text-center py-4 font-tanpearl'>Get a quote !</h3>

            <p> Form with your requirements </p>
            <p> Budget </p>
            <p> Website design preferences </p>
            <p> Deadline </p>
            


          </div>
        </section> */}

        {/* Footer */}
        <section className='py-2 px-10 text-center p-10 bg-black text-white'>
          <footer>
            <p> ?? Copyright 2023 Danisha Soobhen Personal Portfolio | <br /> All Rights Reserved. </p>
          </footer>
        </section>

      </main>
    </>
  )
}
