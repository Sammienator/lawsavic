import React, { useState } from 'react';
import { FaBed, FaBath, FaCar } from 'react-icons/fa';
import house1 from '../assets/home1.jpg';
import house2 from '../assets/home2.jpg';
// Import other house images...

const houseData = [
  { id: 1, title: 'Modern Family Home', img: house1, price: 500000, beds: 3, baths: 2, garages: 1 },
  { id: 2, title: 'Luxury Villa', img: house2, price: 1200000, beds: 5, baths: 4, garages: 2 },
  { id: 3, title: 'Cozy Cottage', img: house1, price: 300000, beds: 2, baths: 1, garages: 1 },

  {id: 4, title: 'Modern  Home', img: house1, price: 1000000, beds: 6, baths: 4, garages: 2 },
  { id: 5, title: 'Luxury ', img: house2, price: 2400000, beds: 9, baths: 7, garages: 3 },
  { id: 6, title: 'Cozy ', img: house1, price: 600000, beds: 4, baths: 2, garages: 2 },


  // Add more house objects with unique ids...
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
        <h2 className="text-7xl font-extrabold text-center mb-8 ">Newest Deals</h2>

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
          <button onClick={() => setSearch({ price: '', beds: '' })} className="bg-black text-white m-4 rounded">Clear Filters</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredHouses.map(house => (
            <div key={house.id} className="bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
              <img src={house.img} alt={house.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <p className="text-2xl font-bold">{house.title}</p>
                <p className="text-gray-600">Kshs {house.price.toLocaleString()}</p>
                <p className="text-gray-500">House {house.id}</p>
                <div className="flex items-center space-x-2 font-extrabold mt-2">
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
