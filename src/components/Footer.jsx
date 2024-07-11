import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear(); // Get the current year dynamically

    return (
        <div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
            <div className='flex justify-between flex-wrap gap-4'>
                <p className='text-white text-center w-full sm:w-auto font-light'>© {year} Rohit. All rights reserved.</p>
                <div className='text-white flex justify-around sm:w-[250px] w-full'>
                    <a href="mailto:rm459567@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <FiMail className='text-xl' />
                    </a>
                    <a href="https://x.com/OrgIndia_?t=z2vdEO7-i1UVi-1RwfW7vg&s=08" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <FaTwitter className='text-xl' />
                    </a>
                    <a href="http://www.linkedin.com/in/rohit-mishra-9678292a6" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <AiFillLinkedin className='text-xl' />
                    </a>
                    <a href="https://github.com/rohitttttttttt" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
                        <FaGithub className='text-xl' />
                    </a>
                    <a href="https://www.instagram.com/rohitmishra3153?igsh=MTVncW5jcWhwbGNqNw==" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <AiFillInstagram className='text-xl' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
