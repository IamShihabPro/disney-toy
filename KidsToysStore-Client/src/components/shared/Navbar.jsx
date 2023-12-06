import React, { useContext, useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCarts from '../hooks/useCarts';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut,} = useContext(AuthContext)

  const [carts] = useCarts()

    // console.log(cart.length);

  const navItems = [
    {
        id: 1,
        link: '/',
        title: 'Home'
    },
    // {
    //     id: 2,
    //     link: '/myToys',
    //     title: 'My Toys'
    // },
    // {
    //     id: 3,
    //     link: '/add',
    //     title: 'Add Toys'
    // }
]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err) )
  }


  return (
    <nav className="bg-gray-900 top-0 inset-x-0 z-50">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
            <div className='flex items-center justify-between h-16'>
                <div className=''>
                    <h1 className='text-gray-400 font-bold text-3xl'>Disney Toys</h1>
                </div>

                <div className='hidden md:block lg:block'>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navItems.map(({id, link, title})=> (
                                <Link to={link}  key={id} className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md font-medium text-base">
                                {title}
                                </Link>
                            ))
                        }


                        {
                            user ? <> 
                            <> <Link to='/myToys' className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-4"> My Toys </Link> </>
                            <> <Link to='/add' className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-4"> Add Toys </Link> </>
                            <> <Link to='/review' className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-4"> Reviews </Link> </>
                            <Link  onClick={handleLogOut} className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-2">Logout</Link>


                             </> : <> <Link to='/login' className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-4"> Login </Link> </>

                             
                        }

                       
                    </div>
                </div>


                <div className='-mr-2 flex md:hidden'>
                    <button onClick={toggleNavbar} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out' aria-label="Toggle navigation">
                    {
                        isOpen ? (
                        <FaTimes className="h-6 w-6" />) : 
                        (<FaBars className="h-6 w-6" /> )
                    }
                    </button>

                </div>

            </div>


            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden `}>
                <div>
                    {
                        navItems.map(({id, link, title})=>(
                            <Link to={link} key={id} className="block text-sky-400 hover:text-white px-3 py-3 rounded-md text-base font-medium">
                            {title}
                            </Link> 
                        ))
                    }


                    {
                            user ? <> 
                            <Link to='/myToys' className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium ">My Toys</Link>       
                            <Link to='/add' className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium ">Add Toys</Link>       
                            <Link to='/review' className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium ">Reviews</Link>       
                            <Link  onClick={handleLogOut} className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium ">Logout</Link>       
                             </> : <> <Link to='/login' className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium "> Login </Link> </>

                             
                    }
                </div>


            </div>

        </div>
    </nav>
  );
};

export default Navbar;