import React, { useState } from 'react'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: '',
        totalAmount: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleAddOrder = () => {
        if (!formData.customerName || !formData.email || !formData.phone || !formData.totalAmount) {
            alert('กรุณากรอกข้อมูลให้ครบ')
            return
        }

        setOrders([...orders, formData])

        setFormData({
            customerName: '',
            email: '',
            phone: '',
            totalAmount: ''
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="bi bi-cart-fill text-orange-600"></i>
                    จัดการคำสั่งซื้อ
                </h1>

                {/* ===== Form ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        value={formData.customerName}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                    />

                    <input
                        type="number"
                        name="totalAmount"
                        placeholder="Total Amount"
                        value={formData.totalAmount}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                    />
                </div>

                <button
                    onClick={handleAddOrder}
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                    เพิ่มคำสั่งซื้อ
                </button>

                {/* ===== Table ===== */}
                <div className="overflow-x-auto mt-6">
                    <table className="w-full border">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2">Customer</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Phone</th>
                                <th className="border px-4 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">
                                        ยังไม่มีคำสั่งซื้อ
                                    </td>
                                </tr>
                            ) : (
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{order.customerName}</td>
                                        <td className="border px-4 py-2">{order.email}</td>
                                        <td className="border px-4 py-2">{order.phone}</td>
                                        <td className="border px-4 py-2">{order.totalAmount}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders