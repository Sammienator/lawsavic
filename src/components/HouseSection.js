import React, { useState } from 'react';
import { FaBed, FaBath, FaCar } from 'react-icons/fa';
import house1 from '../assets/home1.jpg';
import house2 from '../assets/home2.jpg';
// Import other house images...

const houseData = [
  { id: 1, title: 'Modern Family Home', img: house1, price: 500000, beds: 3, baths: 2, garages: 1 },
  { id: 2, title: 'Luxury Villa', img: house2, price: 1200000, beds: 5, baths: 4, garages: 2 },
  // Add 16 more house objects...
  { id: 3, title: 'Cozy Cottage', img: house1, price: 300000, beds: 2, baths: 1, garages: 1 },
  { id: 1, title: 'Modern Family Home', img: house1, price: 500000, beds: 3, baths: 2, garages: 1 },
  { id: 2, title: 'Luxury Villa', img: house2, price: 1200000, beds: 5, baths: 4, garages: 2 },
  // Add 16 more house objects...
  { id: 3, title: 'Cozy Cottage', img: house1, price: 300000, beds: 2, baths: 1, garages: 1 },
  { id: 1, title: 'Modern Family Home', img: house1, price: 500000, beds: 3, baths: 2, garages: 1 },
  { id: 2, title: 'Luxury Villa', img: house2, price: 1200000, beds: 5, baths: 4, garages: 2 },
  // Add 16 more house objects...
  { id: 3, title: 'Cozy Cottage', img: house1, price: 300000, beds: 2, baths: 1, garages: 1 },
  { id: 1, title: 'Modern Family Home', img: house1, price: 500000, beds: 3, baths: 2, garages: 1 },
  { id: 2, title: 'Luxury Villa', img: house2, price: 1200000, beds: 5, baths: 4, garages: 2 },
  // Add 16 more house objects...
  { id: 3, title: 'Cozy Cottage', img: house1, price: 300000, beds: 2, baths: 1, garages: 1 },
  // ...
];

const HouseSection = () => {
  const [search, setSearch] = useState({ price: '', beds: '' });
  
  const filteredHouses = houseData.filter(house => {
    return (
      (search.price ? house.price <= search.price : true) &&
      (search.beds ? house.beds >= search.beds : true)
    );
  });

  return (
    <div id="houses" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Newest Deals</h2>
        
        <div className="mb-8 text-center">
          <input
            type="number"
            placeholder="Max Price"
            value={search.price}
            onChange={(e) => setSearch({ ...search, price: e.target.value })}
            className="border p-2 rounded mr-2"
          />
          <input
            type="number"
            placeholder="Min Bedrooms"
            value={search.beds}
            onChange={(e) => setSearch({ ...search, beds: e.target.value })}
            className="border p-2 rounded mr-2"
          />
          <button onClick={() => setSearch({ price: '', beds: '' })} className="bg-blue-500 text-white px-4 py-2 rounded">Clear Filters</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHouses.map(house => (
            <div key={house.id} className="bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
              <img src={house.img} alt={house.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold ">{house.title}</h3>
                <p className="text-gray-600">${house.price.toLocaleString()}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <FaBed /><span>{house.beds} Beds</span>
                  <FaBath /><span>{house.baths} Baths</span>
                  <FaCar /><span>{house.garages} Garage</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HouseSection;
