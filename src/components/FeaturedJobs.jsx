import { Search, MapPin, Building2, DollarSign } from 'lucide-react';


function FeaturedJobs({ jobs }) {
   
    const featuredJobs = [
       {
         id: 1,
         title: 'Senior Frontend Developer',
         company: 'TechCorp',
         location: 'Remote',
         type: 'Full-time',
         salary: '$120k - $150k',
       },
       {
         id: 2,
         title: 'Product Manager',
         company: 'StartupXYZ',
         location: 'Lagos, NG',
         type: 'Full-time',
         salary: '$80k - $100k',
       },
       {
         id: 3,
         title: 'UX Designer',
         company: 'DesignHub',
         location: 'Hybrid',
         type: 'Contract',
         salary: '$60k - $90k',
       },
       {
         id: 4,
         title: 'Data Scientist',
         company: 'DataFlow',
         location: 'Remote',
         type: 'Full-time',
         salary: '$100k - $130k',
       },
     ];
    
    return (

       <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Jobs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building2 size={16} />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('profile')}
                  className="mt-4 w-full bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
    )
};

export default FeaturedJobs;