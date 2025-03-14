'use client'

function Brand() {
    return (<div className="font-dancingScript text-3xl font-black green-glow w-min p-2 text-green-200">
        ParzivalPrime
    </div>)
}

function Name() {
    return (<span
        className={`
      font-extrabold 
      font-dancingScript
      text-6xl
      text-green-200
      green-glow
      `}
    >Divyanshu</span>)
}

function Hero2() {
    return (
        <div className="relative min-h-screen overflow-auto">
            <div className="fixed inset-0 

             bg-chocolate-gradient
            z-[-1]"></div>

            <div className="h-[200vh]">
                <div className="mt-3 ml-3">
                    <Brand />
                </div>

                <div className="flex-auto ml-4 mt-[6rem] text-4xl font-chakraPetch"> Hi I am <Name /></div>

                {/* MAIN */}
            <div className='ml-4'>
                <p className='font-kanit'>
                    I am <br /> A <span className='bg-gradient-to-r from-[#FFC300] to-[#ffd460] bg-clip-text text-transparent text-xl'>
                        Machine Learning Practitioner {' '}
                    </span>
                    <br />
                    A <span className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-xl'>
                        {' '}MERN Stack Web Developer
                    </span>
                </p>
                <p className='text-sm font-inconsolata'>I’m a Computer Science student from UP, India, passionate about Artificial Intelligence & Next-Gen Technologies<br />
                    Currently, I’m diving deep into Neural Networks (CNNs, RNNs) and learning to craft futuristic AI-driven solutions</p>
                <br />
                {/* <h2 className='font-chakraPetch'>🔺 Sync Rate: 400% with Tech & Creativity</h2> */}
            </div>

            </div>

            
        </div>
    )
}

export default Hero2
