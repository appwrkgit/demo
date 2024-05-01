"client"

import { getUser } from '@/Services/user.service';
import Header from '@/components/header/Header'
import { useAuth } from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Dashboard = () => {    
    const { auth } = useAuth();
    const userData = auth?.user;
    console.log(auth?.user)

    // const getUserData = async () => {
    //     const result = await getUser();
    //     if (result.status) {
    //         setUserData(result?.data)
    //     } else {
    //         toast.error(result.error);
    //     }
    // }

    // useEffect(() => {
    //     getUserData()
    // }, []);


    return (
        <div className="bg-white border-gray-200 dark:bg-gray-900">
            <Header />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex mt-20 h-screen w-full justify-center">

                    <div className="w-96">
                        <div className="bg-white shadow-xl shadow-red-200 rounded-lg py-3">
                            {/* <div className="photo-wrapper p-2">
                                <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                            </div> */}
                            <div className="p-2">
                                {/* <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                <div className="text-center text-gray-400 text-xs font-semibold">
                                    <p>Web Developer</p>
                                </div> */}
                                <table className="text-xs my-3">
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-900 font-bold">Name:</td>
                                            <td className="px-2 py-2 font-bold">{userData?.firstName + " " + userData?.lastName }</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-900 font-bold">Email:</td>
                                            <td className="px-2 py-2 font-bold">{userData?.email}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard