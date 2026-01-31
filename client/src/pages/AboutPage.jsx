import React from 'react'

const team = [
  { id: 1, name: 'Alice Johnson', role: 'Founder & CEO' },
  { id: 2, name: 'Michael Lee', role: 'CTO' },
  { id: 3, name: 'Sara Kim', role: 'Head of Design' },
]

const AboutPage = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16">
      <section className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">About ShopSphere</h1>
          <p className="text-gray-600 mb-4">ShopSphere is a modern eCommerce demo built with React, Tailwind CSS, Node, Express, and MongoDB. We focus on fast, reliable shopping experiences and clean design.</p>
          <p className="text-gray-600">Our mission is to make online shopping simple and enjoyable for everyone — from browsing to checkout.</p>
        </div>

        <div className="bg-gradient-to-tr from-gray-100 to-gray-200 rounded-lg p-6 shadow-md">
          <h3 className="font-semibold mb-2">Our Values</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Customer first — we design for trust and convenience.</li>
            <li>Quality — we highlight well-made products.</li>
            <li>Transparency — clear pricing and policies.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Meet the team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.id} className="bg-white rounded-lg shadow p-4 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 mb-4 flex items-center justify-center text-gray-400">Photo</div>
              <h4 className="font-semibold">{m.name}</h4>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8">
        <h2 className="text-xl font-bold mb-3">Join our mission</h2>
        <p className="text-gray-600 mb-4">We're always looking for talented people. If you're excited about building delightful shopping experiences, we'd love to hear from you.</p>
        <div>
          <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">View open roles</a>
        </div>
      </section>
    </main>
  )
}

export default AboutPage