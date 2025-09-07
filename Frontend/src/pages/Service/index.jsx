import React,{ useState,useEffect } from 'react';
import Footer from '../../components/Footer';
import {
  FaBookOpen,
  FaUsers,
  FaCalendarAlt,
  FaSearch,
  FaCloudUploadAlt,
  FaBookmark,
  FaHeadset,
  FaLaptop,
} from 'react-icons/fa';
import {motion} from 'framer-motion';
const Features=[
   {
    id:1,
    title:"Book Borrowing",
    description:"Easily borrow books from our extensive library collection with just a few clicks.",
    icon:<FaBookOpen className='text-4xl text-blue-500 mb-4'/>,
   },
   {
    id:2,
    title:"MemberShip Plans",
    description:"Choose from a variety of membership plans tailored to your reading needs.",
    icon:<FaUsers className='text-4xl text-green-500 mb-4'/>,
   },
   {
    id:3,
    title:"Online Reservations",
    description:"Reserve your favorite books online and pick them up at your convenience.",
    icon:<FaCalendarAlt className='text-4xl text-purple-500 mb-4'/>,
   },
   {
    id:4,
    title:"Advanced Search",
    description:"Find books quickly with our advanced search and filtering options.",
    icon:<FaSearch className='text-4xl text-red-500 mb-4'/>,
   },
   {
    id:5,
    title:"Digital Upload",
    description:"Upload and access digital versions of books and resources anytime, anywhere.",
    icon:<FaCloudUploadAlt className='text-4xl text-yellow-500 mb-4'/>,
   },
   {
    id:6,
    title:"Personalized Bookmarks",
    description:"Keep track of your favorite books and reading progress with personalized bookmarks.",
    icon:<FaBookmark className='text-4xl text-pink-500 mb-4'/>,
   },
   {
    id:7,
    title:"24/7 Support",
    description:"Get assistance anytime with our round-the-clock customer support.",
    icon:<FaHeadset className='text-4xl text-teal-500 mb-4'/>,
   },
   {
    id:8,
    title:"Multi-Device Access",
    description:"Access your library account and resources from any device, anywhere.",
    icon:<FaLaptop className='text-4xl text-indigo-500 mb-4'/>,
   }
];

const index = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col'>

      </div>
    </>
  )
}

export default index
