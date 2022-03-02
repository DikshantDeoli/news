
function Header() {
    return (
        <div className="flex flex-row justify-center w-full pt-6 pb-2 px-48 border-b-2">
            <div className='flex justify-center w-full '>
                {/* button to subcribe */}
                <button className='text-blue-600 text-sm font-semibold '>SUBCRIBE</button>
            </div>
            <div className='flex justify-center items-center w-full'>
                {/* center title and search  */}
                <p className='text-2xl font-bold'>News</p>
            </div>
            <div className='flex justify-center items-center w-full '>
                <i class="fa fa-search fa-lg px-6" aria-hidden="true"></i>
                <button className='border-2 border-[#1976d2] py-1 px-2 rounded-md  hover:border-indigo-200 hover:shadow-lg hover:shadow-blue-500/50 bg-blue-300 text-white'> Sign up</button>
            </div>
        </div>
    );
}

export default Header;
