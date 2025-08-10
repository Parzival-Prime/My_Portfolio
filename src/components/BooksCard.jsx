
import Image from 'next/image'

function BooksCard() {
    return (
        <div className="h-[16rem] w-[10rem] p-2 gap-2 flex flex-col pt-4
        bg-white/20 backdrop-blur-md  shadow-lg rounded-xl
                                    ">

            {/* Image */}
            <div className=" flex justify-center
                                        ">
                <Image
                    src="/book1.jpg"
                    height={150}
                    width={120}
                    alt='book image'
                />
            </div>

            {/* Title and Author */}
            <div className="font-kanit flex flex-col gap-2">
                <h5 className="text-[11px] font-normal">Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow</h5>
                <p className="text-[8px] flex self-end px-2"> by Aurelien Geron</p>
            </div>
        </div>
    )
}

export default BooksCard
