import React from 'react'

const BillingAddress = () => {
    return (
        <div className='border-[1.5px] p-4 rounded-lg'>
            <div className="lg:w-2/3 ">
                <h2 className="text-2xl font-bold mb-4">Billing Address</h2>
                <form >

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

                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-sm font-semibold">Country of residence</label>
                        <select id="country" className="mt-1 p-2 w-full border rounded-md" >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Bangladesh">Bangladesh</option>

                        </select>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-semibold">Address</label>
                        <input type="text" id="lastName" className="mt-1 p-2 w-full border rounded-md" placeholder='House/Apartment number and street name' required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-semibold">City</label>
                        <input type="text" id="lastName" className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-semibold">Postcode</label>
                        <input type="text" id="lastName" className="mt-1 p-2 w-full border rounded-md" required />

                    </div>
                    <div className='flex items-center gap-5'>
                        <input type="radio" name="radio-5" className="radio radio-primary"  />Yes
                        <input type="radio" name="radio-5" className="radio radio-primary" checked />No
                    </div>

                </form>

            </div>
        </div>
    )
}

export default BillingAddress