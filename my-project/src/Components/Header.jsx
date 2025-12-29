import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gradient-to-r from-[#29A3AA]/20 to-[#5FD1D8]/20 backdrop flex justify-evenly item-center">

            <div className='text-white'>
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Doctor</a></li>
                    <li><a>My Accont</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 w-40 z-1">
                                <li><a>Home</a></li>
                                <li><a>About</a></li>
                                <li><a>Doctor</a></li>
                                <li><a>My Accont</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div >
                <button className='btn bg-[#29A3AA] text-white'>Make An Appointment</button>
            </div>
        </div>

    );
};

export default Header;