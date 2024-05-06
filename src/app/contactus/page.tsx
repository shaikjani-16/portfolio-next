// components/ContactForm.js

"use client"
import { motion } from "framer-motion";

import { AuroraBackground } from '@/components/ui/aurora-background';
import { AuroraBackgroundDemo } from '@/components/aurora-background';
import React, { useState } from 'react';

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('skmj2505@gmail.com');
  const [body, setBody] = useState('');

  const handleEmailLink = () => {
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(body);
    const mailtoUrl = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoUrl;
  };

  return (
    
        <AuroraBackground>
            <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-1/2"
      >
        
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4 w-full">
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-black font-thin-bold"
      />
      {/* <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-black"
      /> */}
      <textarea
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 h-32 text-black font-thin-bold"
      />
      <button
        type="button"
        onClick={handleEmailLink}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-60"
      >
        Send Email
      </button>
    </form>
    </motion.div>
    </AuroraBackground>
    
  );
};

export default ContactForm;
