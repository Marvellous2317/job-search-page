import { Check, Copy, X } from 'lucide-react';

export default function SuccessModal({ company, copied, onCopy, onClose, onViewProfile }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Registration Successful! 🎉
          </h2>
          <p className="text-gray-600 text-sm">
            Your company profile has been created. Share this link to let
            candidates find your job openings
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 border-2 border-gray-200">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 mb-1 font-medium">
                Your Company Profile Link
              </p>
              <p className="text-gray-900 font-mono text-sm truncate">
                {company?.shortLink}
              </p>
            </div>
            <button
              onClick={onCopy}
              className={`flex-shrink-0 p-3 rounded-lg transition-all ${
                copied
                  ? 'bg-green-100 text-green-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        <button
          onClick={onCopy}
          className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium mb-3"
        >
          {copied ? 'Copied to Clipboard!' : 'Copy Link'}
        </button>

        <button
          onClick={onViewProfile}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Your Profile
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Candidates can view your profile and apply to your job listings using
          this link
        </p>
      </div>
    </div>
  );
}