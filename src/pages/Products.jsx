import React, { useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAddProduct = () => {
    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      alert('กรุณากรอกข้อมูลให้ครบ')
      return
    }

    setProducts([...products, formData])

    setFormData({
      name: '',
      category: '',
      price: '',
      stock: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <i className="bi bi-box-seam-fill text-green-600"></i>
          จัดการข้อมูลสินค้า
        </h1>

        {/* ===== Form ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleAddProduct}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          เพิ่มสินค้า
        </button>

        {/* ===== Table ===== */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    ยังไม่มีสินค้า
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.category}</td>
                    <td className="border px-4 py-2">{product.price}</td>
                    <td className="border px-4 py-2">{product.stock}</td>
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

export default Products