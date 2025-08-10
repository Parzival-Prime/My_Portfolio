
import Image from 'next/image'

export default function PlaylistCard({playlist}) {
    return (
        <div className="flex items-center h-[8rem] w-[20rem] mt-5 gap-2 
        bg-white/20 backdrop-blur-md shadow-lg rounded-xl">
            {/* Image box */}
            <div className="w-[7rem] flex justify-center items-center 
                                        ">
                <Image
                    src={`/${playlist.image}`}
                    height='70'
                    width='70'
                    alt="Image"
                    className="rounded-md"
                />
            </div>
            {/* description box */}
            <div className="font-kanit w-[13rem] justify-center items-center">
                <h5 className="text-sm font-normal mb-1">{`${playlist.title}`}</h5>
                <p className="text-xs font-extralight">{`${playlist.description}`}</p>
                <span className=" text-xs font-normal">{`${playlist.by}`}</span>
            </div>
        </div>
    )
}
