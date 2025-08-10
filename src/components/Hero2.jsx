'use client'

import Image from "next/image"
import Projects from "./Sections/Projects"
import Footer from "./Sections/Footer"
import { Name, Brand } from "./Smallutils"
import PlaylistCard from "./PlaylistCard"
import BooksCard from "./BooksCard"
import Logo from "./Logo"

const languages = {
    'Python': 'python.svg',
    'JavaScript': 'javascript.svg',
    'C/C++': 'cpp.svg'
}

const famlib = {
    'PyTorch': 'pytorch.svg',
    'Tensorflow': 'tensorflow.svg',
    'Pandas': 'pandas.svg',
    'Numpy': 'numpy.svg',
    // 'Matplotlib': 'matplotlib.svg',
    'Scikit Learn': 'scikit-learn.svg',
    'NodeJS': 'nodejs.svg',
    'NextJS': 'nextjs.svg',
    'ReactJS': 'react.svg',
    'ExpressJS': 'express.svg',
    'MongoDB': 'mongodb.svg',
    'ReduxJS': 'redux.svg',
    'TailwindCSS': 'tailwind-css.svg'
}

const tools = {
    'GitHub': 'github.svg',
    'Docker': 'docker.svg',
    'Kubernetes': 'kubernetes.svg',
}

const YTplaylists = [
    {
        image: 'campusX.png',
        title: '100 Days of Machine Learning',
        description: 'This is a really good playlist for Machine Learning, it covers most of important topics in exact manner you need.',
        by: 'CampusX'
    },
    {
        image: 'campusX.png',
        title: '100 Days of Deep Learning',
        description: 'This is a really good playlist for Machine Learning, it covers most of important topics in exact manner you need.',
        by: 'CampusX'
    },
    {
        image: 'Youtube.png',
        title: 'The Ultimate MLOps Course',
        description: 'This is a really good playlist for Learning MLOps, creator has explained everything very well and taught with projects, he made it feel very easy to write such robust pipelines, all with proper code style with OOPs methodology.',
        by: 'CampusX'
    },
]

const Books = [
    {
        title: 'Machine Learning with Tensorflow and Scikit-Learn',
        author: 'Aurelien Geron',
        image: 'book1.jpg'
    },
    {
        title: 'Deep Learning Learning with Pytorch',
        author: 'Eli Stevens',
        image: 'book-2.png'
    },
    {
        title: 'Programming Pytorch for Deep Learning',
        author: 'Ian Pointer',
        image: 'book3.jpg'
    },
    {
        title: 'Modern Computer Vision with Pytorch',
        author: 'V Kishore Ayyadevara',
        image: 'book4.jpg'
    },
]

const otherCourses = [
    {
        image: 'udemy.png',
        title: '100 Days-of-Code: Complete Python Bootcamp',
        description: 'In this course python is taught from Beginner to Advanced level with so many projects. And many libraries like Pandas, Numpy, beautifulSoup and Matplotlib are taught.',
        by: 'Angela Yu'
    },
]

function Hero2() {
    return (
        <div className="relative min-h-screen overflow-auto text-[#A5CF61]">

            {/* Background with Gradient */}
            {/* <div className="fixed inset-0 bg-chocolate-gradient z-[-1]"></div> */}
            <div className="fixed inset-0 h-screen bg-[url('/blob-scene-haikei-2.png')] bg-cover bg-center z-[-1]"></div>

            <div className="">
                <div className="mt-3 ml-3">
                    <Brand />
                </div>

                <div className="flex-auto ml-4 mt-[6rem] text-4xl  font-chakraPetch"> Hi I am <Name /></div>

                {/* MAIN */}
                <div className='ml-4 mt-1'>


                    {/* Skill Area */}

                    <div className='font-kanit mt-[3rem] pl-3 mb-4'>

                        <h4 className="text-xl">My Fields of Knowledge</h4>


                        {/* Skills Buttons Area */}
                        <div className="ml-9 mt-4">
                            <ul className="steps steps-vertical">
                                <li className="step step-neutral" data-content="">
                                    <span className="step-icon"> 
                                        <Logo/>
                                    </span>
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                            mt-3 "
                                        disabled>
                                        MLOps
                                    </button>
                                </li>
                                <li className="step step-neutral" data-content="">
                                    <span className="step-icon"> 
                                        <Logo/>
                                    </span>
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                            mt-3 "
                                        disabled>
                                        Machine Learning Engineering
                                    </button>
                                </li> 
                                <li className="step step-neutral" data-content="">
                                    <span className="step-icon"> 
                                        <Logo/>
                                    </span>
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 
                            mt-3"
                                        disabled>
                                        Full Stack Web Development
                                    </button>
                                </li>
                            </ul>





                        </div>







                        {/* Languages, Libraries and Frameworks Area */}

                        <div className="mt-11">
                            <h4 className="text-xl">Languages I work with</h4>

                            <div className="pt-4 ">

                                {Object.entries(languages).map(([key, image]) => (
                                    <button className="bg-slate-800 no-underline group relative shadow-2xl shadow-zinc-900 rounded-full p-px text-[15px] font-semibold leading-7  text-white inline-block"
                                        key={key}
                                    >
                                        <span className="absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        </span>
                                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                            <span className="flex gap-2">
                                                <Image
                                                    src={`/${image}`}
                                                    width='20'
                                                    height='20'
                                                    alt='image'
                                                />
                                                {key}
                                            </span>
                                        </div>
                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                    </button>
                                ))}



                            </div>

                        </div>



                        <div className="mt-11">
                            <h4 className="text-xl">Frameworks and Libraries I use</h4>

                            {/* chips */}
                            <div className="pt-4 ">

                                {Object.entries(famlib).map(([key, image]) => (
                                    <button className="bg-slate-800 no-underline group relative shadow-2xl shadow-zinc-900 rounded-full p-px text-[15px] font-semibold leading-7  text-white inline-block"
                                        key={key}
                                    >
                                        <span className="absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        </span>
                                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                            <span className="flex gap-2">
                                                <Image
                                                    src={`/${image}`}
                                                    width='20'
                                                    height='20'
                                                    alt='image'
                                                />
                                                {key}
                                            </span>
                                        </div>
                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                    </button>
                                ))}

                            </div>
                        </div>


                        <div className="mt-11">
                            <h4 className="text-xl">Tools I use for DevOps & MLOPs</h4>

                            <div className="pt-4">
                                {/* Github Chip */}
                                {Object.entries(tools).map(([key, image]) => (
                                    <button className="bg-slate-800 no-underline group relative shadow-2xl shadow-zinc-900 rounded-full p-px text-[15px] font-semibold leading-7  text-white inline-block"
                                        key={key}
                                    >
                                        <span className="absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        </span>
                                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                            <span className="flex gap-2">
                                                <Image
                                                    src={`/${image}`}
                                                    width='20'
                                                    height='20'
                                                    alt='image'
                                                />
                                                {key}
                                            </span>
                                        </div>
                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                    </button>
                                ))}
                            </div>

                        </div>


                    </div>

                    <Projects />


                    {/* Resources */}
                    <div className="font-kanit pl-3 mt-11">
                        <h4 className="text-2xl">Resources I've Learned from</h4>

                        <div className="font-mono my-5 pl-2">

                            {/* YouTube Playlists */}
                            <div className="my-5">
                                <h3 className="mb-2 text-lg">YouTube Playlists</h3>
                                {/* List */}
                                {YTplaylists.map((playlist) => (
                                    <PlaylistCard
                                        key={playlist.title}
                                        playlist={playlist}
                                    />
                                ))}

                            </div>


                            {/* Books */}
                            <div className="my-7">
                                <h3 className="mb-2 text-lg">Books</h3>
                                {/* List */}
                                <div className="grid grid-cols-2">
                                    {Books.map((book) => (
                                        <BooksCard book={book} key={book.title} />
                                    ))}
                                </div>
                            </div>


                            <div className="my-4">
                                <h3 className="mb-2">Other Courses</h3>

                                {otherCourses.map((playlist) => (
                                    <PlaylistCard
                                        key={playlist.title}
                                        playlist={playlist}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Hero2
