import React from 'react'

const DriversDetails = () => {
    return (
        <div className='border-[1.5px] p-4 rounded-lg'>
            <div className="lg:w-2/3 ">
                <h2 className="text-2xl font-bold mb-4">Main driver&apos;s details</h2>
                <form >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold">Email address</label>
                        <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" required />
                        <h3><small>So we can send the confirmation email and voucher</small></h3>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-semibold">First name</label>
                        <input type="text" id="firstName" className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-semibold">Last name</label>
                        <input type="text" id="lastName" className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactNumber" className="block text-sm font-semibold">Contact number</label>
                        <input type="tel" id="contactNumber" className="mt-1 p-2 w-full border rounded-md" required />
                        <h3><small>So we can call if any problems come up</small></h3>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-sm font-semibold">Country of residence</label>
                        <select id="country" className="mt-1 p-2 w-full border rounded-md" >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Bangladesh">Bangladesh</option>

                        </select>

                    </div>
                    
                </form>
                <p className="text-sm text-gray-600">Our <span className='text-blue-500'>Privacy Statement</span> explains how we use your personal information.</p>
            </div>
        </div>
    )
}

export default DriversDetails