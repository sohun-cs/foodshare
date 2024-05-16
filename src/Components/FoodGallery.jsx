


const FoodGallery = () => {
    return (
        <div>

            <div className="xl:mb-20">
                <h1 className="text-green-600 text-5xl font-bold text-center">Share, Because We Care</h1>
            </div>

            <div className="carousel w-full h-[720px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/tH4sg6g/vegegetables.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/rZRCRsS/fruits-01.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/mHsDzcs/pizza.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/rZRCRsS/fruits-01.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default FoodGallery;