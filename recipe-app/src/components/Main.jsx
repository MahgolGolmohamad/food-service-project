import React from "react";

function Main() {
    return (
        <div className=" max-w-[1640px] mx-auto p-4">
            <div className=" max-h-[500px] relative">
                {/*overlay over the image */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col bg-black/40 justify-center" >
                    <h1 className=" py-2 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> 

                    <span className=" text-orange-600"> تهران </span>
                    <span>فود</span>
                    </h1>
                    <h1 className=" py-2 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"  >
                        food <span className=" text-orange-600">delivered</span>
                    </h1>
                </div>
                <img className=" w-full max-h-[500px] object-cover"
                src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
            />
            </div>

        </div>
    );
}

export default Main;
