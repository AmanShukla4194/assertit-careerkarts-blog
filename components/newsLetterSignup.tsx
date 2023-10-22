import { useState } from 'react';

export default function NewsletterSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement your subscription logic here
    // For example, make an API request to subscribe the user

    // After successful subscription, you can clear the form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="container mx-auto flex" style={{border: "2px solid"}}>
      <input style={{border: "2px solid"}}
        className="flex-grow shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <input style={{border: "2px solid"}}
        className="flex-grow mx-2 shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="youremail@example.com"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleSubmit}
      >
        Subscribe
      </button>
    </div>
  );
}
