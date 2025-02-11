import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const apiUrl = import.meta.env.VITE_API_URL;

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const { data } = await axios.post(`${apiUrl}/chat`, { message: input });
            setMessages([...newMessages, { sender: "bot", text: data.reply }]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-gray-100 rounded-lg shadow-lg relative">
            <h2 className="text-center text-2xl font-bold mb-4 text-red-600">Blood Donation Chatbot</h2>
            <motion.div 
                className="border border-gray-300 bg-white p-4 h-80 overflow-y-auto rounded-lg shadow-md"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {messages.map((msg, index) => (
                    <motion.div 
                        key={index} 
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} my-2`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`p-3 rounded-lg text-white ${msg.sender === "user" ? "bg-green-500" : "bg-red-500"}`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className="flex mt-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                />
                <button onClick={sendMessage} className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition-all">Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
