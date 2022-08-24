import React, { useEffect, useState } from 'react'
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {

        let headersList = {
            "Accept": "*/*",
        }

        let reqOptions = {
            url: "https://assessment.api.vweb.app/users",
            method: "GET",
            headers: headersList,
        }


        try {
            const response = await axios.request(reqOptions)
            setUsers(response.data)
        } catch (error) {
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    console.log(users);

    return (
        <div>
            <section className="container mx-auto pt-20 p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className=" font-thin text-sm px-7 py-3">Users</th>
                                    {/* <th type="button" className=" px-4 py-1 text-base text-purple-800">
                                        <button className='my-4' onClick={() => exportToCsv(brands, "brands.csv")}>Download csv</button>
                                    </th> */}
                                </tr>
                            </thead>
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">user Id</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Phone</th>
                                    <th className="px-4 py-3">Email</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {users.map((b) => (
                                    <>
                                        <tr className="text-gray-700">
                                            <td className="px-4 py-3 border">
                                                <div className="flex items-center text-sm">
                                                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                        {/* <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" /> */}
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                    <div>
                                                        <p className=" font-semibold text-black">{b.user_id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm  border">{b.name}</td>
                                            <td className="px-4 py-3 text-xs border">
                                                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> n/a </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm border">n/a</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Users