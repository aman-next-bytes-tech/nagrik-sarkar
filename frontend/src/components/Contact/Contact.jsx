import React from 'react'
import { Facebook, Instagram, Mail, MessageSquare, Phone, Twitter } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    type: 'Call Us',
    details: '+91 8227008227',
  },
  {
    icon: Mail,
    type: 'Email Us',
    details: 'info@nagriksarkar.com',
  },
  {
    icon: MessageSquare,
    type: 'X / Twitter',
    details: '@NagrikSarkar',
  },
  {
    icon: Facebook,
    type: 'Facebook',
    details: '@NagrikSarkar',
  },
  {
    icon: Instagram,
    type: 'Instagram',
    details: '@NagrikSarkar',
  },
];

const inputClass =
  'mt-2 block min-h-12 w-full rounded-[8px] border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10';

const ContactItem = ({ icon: Icon, type, details }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-slate-700 bg-slate-900 text-slate-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-bold text-white">{type}</p>
        <p className="mt-1 text-sm font-medium text-slate-300">{details}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h4 className="mb-4 text-[1.4rem] font-[500] text-indigo-500">
          Contact Us!
        </h4>
        <p className="mx-auto mb-10 hidden max-w-4xl text-base leading-8 text-slate-600 md:block">
          Empowering Citizens with Essential Welfare Services, Support Programs,
          and Opportunities for a Better, Inclusive Future.
        </p>
      </div>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-[8px] bg-slate-950 text-white shadow-2xl shadow-slate-300/50">
        <div className="grid gap-6 border-b border-slate-800 p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
          <h3 className="text-2xl font-black text-white">Get in touch</h3>
          <p className="text-base leading-8 text-slate-200">
            We are here to assist you with any questions or concerns you may
            have. Our team is dedicated to providing support and ensuring your
            needs are met.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8 p-6 sm:p-8 lg:p-10">
            {contactItems.map((item) => (
              <ContactItem key={item.type} {...item} />
            ))}
          </div>

          <form className="border-t border-slate-800 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold text-white">Name</span>
                <input className={inputClass} type="text" placeholder="Full Name" />
              </label>

              <label className="block">
                <span className="text-xs font-bold text-white">Email</span>
                <input className={inputClass} type="email" placeholder="example@email.com" />
              </label>

              <label className="block">
                <span className="text-xs font-bold text-white">Phone</span>
                <input className={inputClass} type="tel" placeholder="(123)456-789" />
              </label>

              <label className="block">
                <span className="text-xs font-bold text-white">Company</span>
                <input className={inputClass} type="text" />
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-bold text-white">
                Leave us a message
              </span>
              <textarea
                className={`${inputClass} min-h-40 resize-none`}
                placeholder="Please type your message here..."
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact
