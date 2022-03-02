function Information() {
    return (
        <div className='flex flex-row mx-48'>
            <div>
                <h2 className='text-xl mb-2'>From the firehose</h2>
                <div className='py-8'>
                    <h1 className='text-4xl mb-3'>Sample blog post</h1>
                    <div className='pb-4'>
                        <em>April 1, 2020 by </em><span className='text-blue-600 underline'>Olivier</span>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis nihil maiores quam pariatur, vel architecto consectetur rem, provident at voluptatem quidem officiis similique assumenda repellat reiciendis ab suscipit totam itaque sed? Vitae numquam, architecto non nisi aspernatur explicabo, iure hic molestias facere autem enim dicta laudantium nemo reiciendis magni sint, blanditiis fuga rerum ab. Architecto doloremque tenetur necessitatibus odit minus voluptatem odio aliquid iste repellendus sunt nemo cum nobis molestias facilis nulla fuga dolore itaque, quae aspernatur laboriosam dignissimos voluptate. Tempore perferendis corporis repudiandae recusandae, veritatis pariatur hic architecto fugiat quo sed odit accusantium quasi facilis eum! Quos recusandae provident dicta, aliquid hic consectetur cum rem eveniet nihil inventore. Atque suscipit, vero sunt, beatae officia incidunt ea cum consequuntur animi, autem eligendi odio mollitia quidem itaque quis fugit eaque voluptate sint! Dolor unde sit earum, maiores quisquam sequi error fugit. Officia harum itaque alias quos? Autem ipsum, temporibus iste labore voluptatem est neque suscipit voluptatibus doloremque atque perferendis accusantium fugiat cupiditate sunt. Magni ducimus iste fugit esse excepturi consequuntur inventore tenetur optio, voluptatum, dolores dolor natus repellat? Vel, ratione quisquam. Perferendis tenetur quis aperiam quibusdam optio doloremque, ipsa quidem quos voluptatem sed minima? Earum maiores laborum quos dolor natus!</p>
                </div>
            </div>
            <div className='pt-10 pl-10'>
                <div className='border p-4 justify-items-center hover:bg-gray-300 rounded-md'>
                    <div className='w-66 h-32'>
                        <h4 className='text-xl font-normal'>Featured post</h4>
                        <p className=' text-base font-normal'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam reprehenderit
                            Lorem ipsum, dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='mt-6 mb-2 semibold text-2xl'>Archives</h1>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>March 2021</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>February 2021</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>January 2021</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>December 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>November 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>October 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>September 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>August 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>July 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>June 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>May 2020</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'>April 2020</a>
                </div>
                <div className='flex flex-col '>
                    <h1 className='mt-6 mb-2  semibold text-2xl'>Social</h1>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'><i class="fa fa-github fa-2x pr-4" aria-hidden="true"></i>Github</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'><i class="fa fa-twitter fa-2x  pr-4" aria-hidden="true"></i>Twitter</a>
                    <a href='#' className='underline text-blue-400 hover:text-blue-600'><i class="fa fa-facebook-official fa-2x  pr-4" aria-hidden="true"></i>Facebook</a>
                </div>
            </div>
        </div>
    );

}

export default Information;