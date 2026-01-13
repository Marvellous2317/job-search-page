import { Briefcase } from 'lucide-react';

export default function Navigation({ onNavigate, showPostJobsButton = true }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <Briefcase className="text-blue-600" size={28} />
            <span className="text-2xl font-bold text-gray-900">JobSearch</span>
          </button>
          {showPostJobsButton && (
            <div className="flex gap-4">
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Find Jobs
              </button>
              <button
                onClick={() => onNavigate('register')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Post Jobs
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}