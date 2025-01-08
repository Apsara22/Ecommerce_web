export default function Recent(){
    return(
        <>
        <div className=" bg-[#EDF7FA] space-y-5">
            <div className="justify-between flex pl-20 ">
            <h2>Recent Post</h2>
            <p className="pr-16 text-sky-500 hover:text-xl cursor-pointer ">view All</p>

            </div>
           
            <div className="grid md:grid-cols-2 sm:grid-cols-1 pl-20 space-x-16 pb-10 pr-16">
                <div className="bg-white text-sm px-8 py-6 rounded">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem enim facere itaque qui,
                     sunt alias corporis ea totam, est aliquam cumque dolore id aperiam ut omnis similique odio rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim necessitatibus minus assumenda dolorem 
                     voluptates dolores iusto tempore eos delectus. Hic quidem, excepturi nam facilis iste dolorem officiis soluta libero iusto.
                </div>
                <div className="bg-white text-sm px-8 py-6 rounded">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem enim facere itaque qui,
                     sunt alias corporis ea totam, est aliquam cumque dolore id aperiam ut omnis similique odio rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim necessitatibus minus assumenda dolorem 
                     voluptates dolores iusto tempore eos delectus. Hic quidem, excepturi nam facilis iste dolorem officiis soluta libero iusto.
                </div>
            </div>

        </div>
        </>
    )
}