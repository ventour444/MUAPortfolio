import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div name='Contact' className='w-full h-screen bg-slate-300 text-gray-600'>
      <div className='max-w-3xl mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='border-b-4 mb-10 font-bold'>Contact</div>
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md'>
          <label className='block mb-4'>
            <span className='text-gray-700'>Name:</span>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 p-2 w-full border rounded-md'
              required
            />
          </label>

          <label className='block mb-4'>
            <span className='text-gray-700'>Email:</span>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 p-2 w-full border rounded-md'
              required
            />
          </label>

          <label className='block mb-4'>
            <span className='text-gray-700'>Message:</span>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='mt-1 p-2 w-full border rounded-md'
              rows='4'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
