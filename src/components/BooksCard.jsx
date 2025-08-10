
import Image from 'next/image'

function BooksCard({book}) {
    return (
        <div className="h-[16rem] w-[10rem] p-2 gap-2 flex flex-col pt-4 my-4
        bg-white/20 backdrop-blur-md  shadow-lg rounded-xl
                                    ">

            {/* Image */}
            <div className=" flex justify-center">
                <Image
                    src={`/${book.image}`}
                    height={150}
                    width={120}
                    alt='book image'
                />
            </div>

            {/* Title and Author */}
            <div className="font-kanit flex flex-col gap-2">
                <h5 className="text-[11px] font-normal">{book.title}</h5>
                <p className="text-[10px] flex self-end px-2"> by {book.author}</p>
            </div>
        </div>
    )
}

export default BooksCard
