import { Search, MapPin, Building2, DollarSign } from 'lucide-react';
import Navigation from './Navigation';
import FeaturedJobs from './FeaturedJobs';

export default function HomePage({ onNavigate }) {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thousands of opportunities from top companies waiting for you
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <MapPin className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="bg-transparent outline-none w-full"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Search Jobs
            </button>
          </div>
        </div>

        <FeaturedJobs onNavigate={onNavigate} />
      </div>
    </div>
  );
}