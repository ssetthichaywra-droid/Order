import React, { useState, useEffect } from 'react'
import api from '../services/api'

const Members = () => {
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const fetchMembers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get('/members');
            setMembers(response.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
const { name, value } = e.target
setFormData(prev => ({
...prev,
[name]: value
}))
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post('/members', formData);

            setFormData({
                firstName: '',
                lastName: '',
                email: ''
            })

            fetchMembers();
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <i className="bi bi-people-fill text-blue-600"></i>
                        จัดการข้อมูลสมาชิก
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First name ของ You' required />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last name ของ You' required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email ของ You' required />
                        <button type='submit'>Enter</button>
                    </form>

                    {loading && <p>Loading....</p>}

                    {error && (
                        <p className='text-red-600'>{error}</p>
                    )}

                    {!loading && !error && (
                        <table className="min-w-full border">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">ID</th>
                                    <th className="border px-4 py-2">ชื่อ</th>
                                    <th className="border px-4 py-2">นามสกุล</th>
                                    <th className="border px-4 py-2">อีเมล</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    <tr key={member.id}>
                                        <td className='border px-4 py-2'>{member.id}</td>
                                        <td className='border px-4 py-2'>{member.firstName}</td>
                                        <td className='border px-4 py-2'>{member.lastName}</td>
                                        <td className='border px-4 py-2'>{member.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    )
}

export default Members