import React from 'react'
import { Link } from 'react-router-dom'
import Products from './shop/Products'

const sampleProducts = [
  { id: 1, title: 'Classic Tee', price: '$29', desc: 'Comfortable cotton tee.' },
  { id: 2, title: 'Leather Bag', price: '$89', desc: 'Premium leather satchel.' },
  { id: 3, title: 'Sport Sneakers', price: '$69', desc: 'Lightweight running shoes.' },
  { id: 4, title: 'Sunglasses', price: '$19', desc: 'UV protection shades.' },
]

const HomePage = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Find what you love at ShopSphere</h1>
          <p className="text-gray-600 mb-6">Curated products, great prices, and fast shipping. Explore our collections and discover your next favorite item.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Shop Now</Link>
            <Link to="/about" className="border border-gray-300 text-gray-800 px-4 py-2 rounded">Learn More</Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-tr from-gray-100 to-gray-200 rounded-lg p-8 shadow-lg">
            <div className="h-56 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">Hero Image</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
        <div className="text-center">
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-500">On orders over $50</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">Secure Payments</h3>
          <p className="text-sm text-gray-500">Multiple payment options</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-500">We're here to help</p>
        </div>
      </section>
         <Products/>
      {/* Featured products */}
      <section className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sampleProducts.map((p) => (
            <article key={p.id} className="bg-white rounded-lg shadow-sm p-3">
              <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400">Product</div>
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold">{p.price}</span>
                <Link to="/" className="text-sm text-blue-600 hover:underline">View</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-3xl mx-auto bg-blue-600 text-white rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-2">Join our newsletter</h3>
        <p className="text-sm mb-4">Get exclusive offers and latest product drops.</p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded text-gray-800" />
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">Subscribe</button>
        </form>
      </section>
    </main>
  )
}

export default HomePage