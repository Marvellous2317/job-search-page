import { Building2, MapPin, DollarSign, Clock } from 'lucide-react';
import Navigation from './Navigation';

export default function CompanyProfilePage({ onNavigate }) {
  const companyProfile = {
    name: 'TechCorp Industries',
    industry: 'Technology',
    location: 'Lagos, Nigeria',
    about:
      'Leading technology company focused on innovative solutions for businesses across Africa.',
    employees: '200-500',
    founded: '2018',
    jobs: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        type: 'Full-time',
        location: 'Remote',
        salary: '$120k - $150k',
        posted: '2 days ago',
        description:
          'We are looking for an experienced frontend developer to join our team and build amazing user experiences.',
      },
      {
        id: 2,
        title: 'Backend Engineer',
        type: 'Full-time',
        location: 'Lagos, NG',
        salary: '$100k - $130k',
        posted: '1 week ago',
        description:
          'Join our backend team to build scalable APIs and microservices that power our platform.',
      },
      {
        id: 3,
        title: 'DevOps Engineer',
        type: 'Full-time',
        location: 'Hybrid',
        salary: '$110k - $140k',
        posted: '3 days ago',
        description:
          'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} showPostJobsButton={false} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Building2 className="text-blue-600" size={48} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {companyProfile.name}
              </h1>
              <p className="text-gray-600 mb-4">{companyProfile.about}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Industry</span>
                  <p className="font-medium text-gray-900">
                    {companyProfile.industry}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Location</span>
                  <p className="font-medium text-gray-900">
                    {companyProfile.location}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Employees</span>
                  <p className="font-medium text-gray-900">
                    {companyProfile.employees}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Founded</span>
                  <p className="font-medium text-gray-900">
                    {companyProfile.founded}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Open Positions ({companyProfile.jobs.length})
          </h2>
          <div className="space-y-4">
            {companyProfile.jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}