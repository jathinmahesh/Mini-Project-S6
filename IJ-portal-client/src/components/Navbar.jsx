import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navItems = [
        {path: "/", title: "Start a search"},
        {path: "/my-job", title: "My Internships and Jobs"},
        {path: "/resume", title: "Create my resume"},
        {path: "/post-job", title: "Post a job"}
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            <a href="/" className='flex items-center gap-2 text-2xl text-black'> 
            <svg xmLns="https://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4"/>
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/>
            </svg> <span>Internship + Job Portal </span></a>
            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path,title}) => (
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                    to={path}
                    className={({ isActive}) =>
                      isActive
                        ? "active"
                        : ""
                    }
                  >
                    {title}
                  </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* Signup and login button*/}
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
                <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar