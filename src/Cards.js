
function Cards() {
    return (
        <div className='mt-70 grid grid-flow-row grid-cols-2  mx-48  px-6 mb-16'>
            <div className='flex flex-row border p-6 m-2 justify-items-center hover:bg-gray-300 rounded-md'>
                <div>
                    <h4 className='text-2xl font-normal'>Featured post</h4>
                    <h5 className='text-base font-normal text-gray-600'>Nov 12</h5>
                    <p className='mb-4 text-base font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <h5 className='py-3 font-semibold text-blue-700 text-base'>
                        Continue reading ...
                    </h5>
                </div>
                <div>
                    <img src='https://picsum.photos/161/194' alt='' />
                </div>
            </div>
            <div className='flex flex-row border p-6 m-2 justify-items-center hover:bg-gray-300 rounded-md'>
                <div>
                    <h4 className='text-2xl font-normal'>Featured post</h4>
                    <h5 className='text-base font-normal text-gray-600'>Nov 12</h5>
                    <p className='mb-4 text-base font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <h5 className='py-3 font-semibold text-blue-700 text-base'>
                        Continue reading ...
                    </h5>
                </div>
                <div>
                    <img src='https://picsum.photos/161/194' alt='' />
                </div>
            </div>
        </div>
    );
}

export default Cards;
