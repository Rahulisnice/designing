import { Mail, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

const ContactContent = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="p-6 sm:p-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center animate-fade-in-up">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10 border-b-2 border-purple-500 pb-2">
        Get In Touch
      </h2>
      <div className="bg-gray-800 rounded-xl p-6 sm:p-10 shadow-2xl border border-gray-700 max-w-xl w-full">
        <p className="text-gray-400 text-center mb-6">
          Feel free to reach out to me with any questions or collaboration
          opportunities.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full pr-16 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            Send Message
            <Mail className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactContent;
