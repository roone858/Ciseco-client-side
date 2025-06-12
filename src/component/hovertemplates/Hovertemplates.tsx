import './hovertemplates.css'
import DiscoverCard from '../Cards/DiscoverCard'
import dog from './../../assets/dog.webp'

export default function Hovertemplates() {
    return (

        <div className='grid grid-cols-12 gap-4 w-full space-y-2'>
            <div className='col-span-2  space-y-2 '>


                <h2 className='font-bold'>Home Page</h2>
                <a href="" className='block'>Home 1</a>
                <a href="" className='block' >Home 2 <span className='badge rounded-md text-white p-1 bg-red-500'> new!</span></a>
                <a href="" className='block' >Header 1</a>
                <a href="" className='block'>Header 2 <span className='badge  rounded-md text-white p-1 bg-red-500'> new!</span></a>
                <a href="" className='block' >Comming soon </a>

            </div>
            <div className='col-span-2 space-y-2'>
                <h3 className='font-bold'>Shop Pages</h3>
                <a href="" className='block'>Category Page 1</a>
                <a href="" className='block' >Category Page 2</a>
                <a href="" className='block' >Product Page 1</a>
                <a href="" className='block'>Product Page 2</a>
                <a href="" className='block' >Cart page </a>
                <a href="" className='block' >Checkout Page </a>

            </div>
            <div className='col-span-2 space-y-2'>
                <h3 className='font-bold'>Other Pages</h3>
                <a href="" className='block'>Checkout Page</a>
                <a href="" className='block' >Search Page</a>
                <a href="" className='block' >Cart Page</a>
                <a href="" className='block'>Accout Page</a>
                <a href="" className='block' >Order Page </a>
                <a href="" className='block' >Subscription </a>


            </div>
            <div className='col-span-2 space-y-2'>
                <h3 className='font-bold'>Blog Page</h3>
                <a href="" className='block'>Blog Page</a>
                <a href="" className='block' >Blog Single</a>
                <a href="" className='block' >About Page</a>
                <a href="" className='block'>Contact Page</a>
                <a href="" className='block' >Login </a>
                <a href="" className='block' >Signup </a>
                <a href="" className='block' >Forgot Password </a>

            </div>
            <div className="col-span-4 space-y-2">
                <DiscoverCard color={"lightgrey"} image={dog} />
            </div>

        </div>



    )
}
