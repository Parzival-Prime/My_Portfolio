'use client'

import Image from "next/image"
import Projects from "./Sections/Projects"
import Footer from "./Sections/Footer"
import { Name, Brand } from "./Smallutils"

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
    'Kubernetes': 'kubernetes.svg'
}

function Hero2() {
    return (
        <div className="relative min-h-screen overflow-auto">

            {/* Background with Gradient */}
            <div className="fixed inset-0 bg-chocolate-gradient z-[-1]"></div>

            <div className="">
                <div className="mt-3 ml-3">
                    <Brand />
                </div>

                <div className="flex-auto ml-4 mt-[6rem] text-4xl font-chakraPetch"> Hi I am <Name /></div>

                {/* MAIN */}
                <div className='ml-4 mt-1'>


                    {/* Skill Area */}

                    <div className='font-kanit mt-[3rem] pl-3 mb-4'>

                        <h4 className="text-xl">My Fields of Knowledge</h4>

                        {/* Skills Buttons Area */}
                        <div className="ml-9 mt-4">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                            mt-3 "
                                disabled>
                                Machine Learning Engineering
                            </button>

                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 
                            mt-3"
                                disabled>
                                Full Stack Development
                            </button>
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


                    {/* Detailing Paragraph */}

                    {/* I think I should not put detail on top it should only be on About Page. So right now I am just commenting it. Think about it. Although it is looking too straight, to jump directly onto field */}

                    {/* <p className='text-base font-inconsolata p-1 mt-8'>
                        I’m a Computer Science student, passionate about Artificial Intelligence & Next-Gen Technologies.
                        <br />
                        Currently, I’m diving deep into Neural Networks (CNNs, RNNs) and learning to craft futuristic AI-driven solutions
                    </p> */}



                    {/* Projects Area */}

                    <Projects />

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Hero2
