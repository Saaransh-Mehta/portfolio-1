import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSending(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-yellow-500  flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h2 className="font-orbitron text-4xl tracking-wide text-gray-900 mb-2">CONTACT</h2>
                <p className="text-gray-600">We'd love to hear from you. Send us a message.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 
                        ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 
                        ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 resize-none
                      ${errors.message ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-orbitron tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {sending ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>SEND</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;