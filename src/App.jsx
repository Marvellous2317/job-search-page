import { useState } from 'react';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import CompanyProfilePage from './components/CompanyProfilePage';
import SuccessModal from './components/SuccessModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    industry: '',
    location: '',
  });
  const [newCompany, setNewCompany] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = () => {
    if (
      !formData.companyName ||
      !formData.email ||
      !formData.industry ||
      !formData.location
    ) {
      alert('Please fill in all fields');
      return;
    }

    const slug = formData.companyName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    const company = {
      ...formData,
      slug: slug,
      shortLink: `jobsearch.co/${slug}`,
    };

    setNewCompany(company);
    setShowSuccessModal(true);
  };

  const handleCopy = async () => {
    if (!newCompany) return;

    try {
      await navigator.clipboard.writeText(`https://${newCompany.shortLink}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setCurrentPage('home');
    setFormData({ companyName: '', email: '', industry: '', location: '' });
  };

  const handleViewProfile = () => {
    setShowSuccessModal(false);
    setCurrentPage('profile');
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'register' && (
        <RegistrationPage
          onNavigate={setCurrentPage}
          formData={formData}
          onFormChange={handleInputChange}
          onSubmit={handleRegistration}
        />
      )}
      {currentPage === 'profile' && (
        <CompanyProfilePage onNavigate={setCurrentPage} />
      )}
      {showSuccessModal && (
        <SuccessModal
          company={newCompany}
          copied={copied}
          onCopy={handleCopy}
          onClose={closeModal}
          onViewProfile={handleViewProfile}
        />
      )}
    </>
  );
}

export default App;