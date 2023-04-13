import React, {useState} from "react";
import Button from "../UI/button";

const NavBar = () => {
    const navigation = [
        {name: 'About Us', page: '/'},
        {name: 'Weekly Service', page: '/'},
        {name: 'Get Connected', page: '/'},
        {name: 'Resources', page: '/'},
    ]

    const [open, setOpen] = useState(false)
    return (
        <>
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="cursor-pointer flex items-center">
                    <span>
                        <img src='/epf_logo.png' alt="epf_logo" className="h-12"/>
                    </span>
                </div>
                <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden">
                    <img  src={`/${open ? 'close' : 'menu'}-outline.png`} alt={open ? 'close' : 'menu'} className="h-10"/>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-1oo' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                    {
                        navigation.map((nav) => {
                            return (
                            <li key={nav['name']} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={nav['page']} className="text-gray-800 hover:text-gray-400 duration-500">{nav['name']}</a>
                            </li>
                            )
                        })
                    }
                    <Button>
                        Give
                    </Button>
                </ul>
            </div>
        </div>
        </>
    );
}



export default NavBar