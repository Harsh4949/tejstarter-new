import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Rocket, GraduationCap, Calendar, Building2, Link } from 'lucide-react';
import SEO from '../components/SEO';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
    role: '',
    location: '',
    resume: null,
    portfolio: null,
    companyUrl: '',
    agree: false,
    // New student fields
    educationLevel: '',
    subLevel: '',
    majorField: '',
    college: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  // Education level options
  const levelOptions = {
    "Primary": ["8th", "9th", "10th"],
    "Secondary": ["11th", "12th"],
    "post-secondary": ["Diploma", "BTech", "BA", "BCom", "BSc", "MSc", "BBA", "BCA", "Other"]
  };

  // Major fields by degree
  const majorFieldsByDegree = {
    "Diploma": [
      "Computer Engineering",
      "Mechanical Engineering", 
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Automobile Engineering",
      "Information Technology",
      "Other"
    ],
    "BTech": [
      "Computer Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Civil Engineering", 
      "Electronics Engineering",
      "ENTC Engineering",
      "Artificial Intelligence & Machine Learning",
      "Data Science",
      "Electrical Engineering",
      "Other"
    ],
    "BSc": [
      "Computer Science",
      "Mathematics",
      "Physics", 
      "Chemistry",
      "Biotechnology",
      "Information Technology",
      "Electronics",
      "Other"
    ],
    "MSc": [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Information Technology", 
      "Artificial Intelligence",
      "Other"
    ],
    "BBA": [
      "Marketing",
      "Finance",
      "Human Resource Management",
      "Business Analytics",
      "International Business",
      "Other"
    ],
    "BCA": [
      "Computer Applications",
      "Software Development",
      "Networking",
      "Cybersecurity",
      "Other"
    ]
  };

  // College options
  const collegeOptions = [
    "Shivganga Charitable Trust, Sangli's Vishveshwarya Technical Campus",
    "Shikshan Prasarak Sanstha's Padmabhushan Vasantraodada Patil Mahavidyalaya",
    "Sanjay Bhokare Group of Institutes, Miraj",
    "Padmabhooshan Vasantraodada Patil Institute of Technology, Budhgaon",
    "Government Polytechnic, Miraj",
    "Government Residence Women Polytechnic, Tasgaon",
    "शासकीय औद्योगिक प्रशिक्षण संस्था, कवठेमहाकाळ, जि: सांगली",
    "शासकीय औद्योगिक प्रशिक्षण संस्था, तासगाव, जि: सांगली"
  ];

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (name === 'password') {
        setPasswordStrength(calculatePasswordStrength(value));
      }
    }
    if (error) setError('');
  };

  // Handle education level change
  useEffect(() => {
    if (formData.educationLevel) {
      setFormData(prev => ({ ...prev, subLevel: '', majorField: '' }));
    }
  }, [formData.educationLevel]);

  // Handle sub level change 
  useEffect(() => {
    if (formData.subLevel) {
      setFormData(prev => ({ ...prev, majorField: '' }));
    }
  }, [formData.subLevel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const {
        name, email, phone, password, confirmPassword, role,
        location, agree, dob
      } = formData;

      if (!name || !email || !phone || !password || !confirmPassword || !role || !location) {
        throw new Error('Please fill in all required fields');
      }
      
      // Additional validation for student role
      if (role === 'Student') {
        if (!dob || !formData.educationLevel || !formData.subLevel || !formData.college) {
          throw new Error('Please fill in all student-specific fields');
        }
        if (formData.subLevel && majorFieldsByDegree[formData.subLevel] && !formData.majorField) {
          throw new Error('Please select your field of study');
        }
      }
      
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }
      if (password.length < 8) {
        throw new Error('Password must be at least 8 characters');
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      if (!agree) {
        throw new Error('You must agree to the Terms & Privacy Policy');
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Signup success:', formData);
      navigate('/signin');
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  const signupPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Join TejStarter - Create Your Account",
    "description": "Create your TejStarter account to access collaboration opportunities, startup projects, and mentorship programs for college students",
    "url": "https://tejstarter.com/signup",
    "mainEntity": {
      "@type": "Organization",
      "name": "TejStarter",
      "memberOf": "Student Collaboration Network"
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-6 py-10">
      <SEO 
        title="Join TejStarter - Create Your Student Account | Free Registration"
        description="Join 1000+ students in India's premier collaboration platform. Create your free TejStarter account to access startup projects, industry mentorship, and entrepreneurship opportunities while studying."
        keywords="join tejstarter, student registration, free account signup, college collaboration platform, student entrepreneur registration, startup platform signup"
        url="/signup"
        type="website"
        schemaData={signupPageSchema}
      />
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Left - Animation Placeholder */}
        <div className="hidden lg:flex items-center justify-center bg-blue-100 p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <User className="h-24 w-24 text-white animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Join TejStarter</h3>
            <p className="text-gray-500">Start your journey with us</p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-10 sm:p-12">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-blue-600">
                TEJSTARTER
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Create your account</h2>
            <p className="text-gray-500 text-sm">Start building amazing projects today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Hashvardhan Patil" required
                  className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>

            {/* Date of Birth - Only for Student */}
            {formData.role === 'Student' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required
                    className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (Login ID)</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required
                  className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g., 9876543210" pattern="[0-9]{10}" required
                className="w-full border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange}
                  placeholder="Create a password" required
                  className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2 flex items-center space-x-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${getStrengthColor()}`} style={{ width: `${(passwordStrength / 5) * 100}%` }}></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">{getStrengthText()}</span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}
                  placeholder="Re-type your password" required
                  className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Select Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
              <select name="role" value={formData.role} onChange={handleInputChange} required
                className="w-full border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select your role</option>
                <option value="Student">Student</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Professional">Professional</option>
                <option value="Mentor / Investor">Mentor / Investor</option>
                <option value="College / Company">College / Company</option>
              </select>
            </div>

            {/* Education Level - Only for Student */}
            {formData.role === 'Student' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} required
                    className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Select Education Level</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="post-secondary">Post-secondary (Diploma, BTech, etc.)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Sub Level - Only for Student when education level is selected */}
            {formData.role === 'Student' && formData.educationLevel && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Specific Class / Degree</label>
                <select name="subLevel" value={formData.subLevel} onChange={handleInputChange} required
                  className="w-full border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select Option</option>
                  {levelOptions[formData.educationLevel]?.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Major Field - Only for Student when sub level has major fields */}
            {formData.role === 'Student' && formData.subLevel && majorFieldsByDegree[formData.subLevel] && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Field</label>
                <select name="majorField" value={formData.majorField} onChange={handleInputChange} required
                  className="w-full border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select Field</option>
                  {majorFieldsByDegree[formData.subLevel].map(field => (
                    <option key={field} value={field}>{field}</option>
                  ))}
                </select>
              </div>
            )}

            {/* College Selection - Only for Student */}
            {formData.role === 'Student' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select College</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select name="college" value={formData.college} onChange={handleInputChange} required
                    className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Select College</option>
                    {collegeOptions.map(college => (
                      <option key={college} value={college}>{college}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}



             {/* State & City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State & City</label>
              <input type="text" name="location" value={formData.location} onChange={handleInputChange}
                placeholder="e.g., Maharashtra, Mumbai" required
                className="w-full border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>


            {/* Company/Organization URL - Only for non-Students */}
            {formData.role && formData.role !== 'Student' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization URL (optional)</label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="url" name="companyUrl" value={formData.companyUrl} onChange={handleInputChange}
                    placeholder="https://yourcompany.com" 
                    className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
            )}

           
            {/* Upload Resume/Portfolio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formData.role === 'Student' ? 'Upload Resume / Portfolio (optional)' : 'Upload Portfolio (optional)'}
              </label>
              <input 
                type="file" 
                name={formData.role === 'Student' ? 'resume' : 'portfolio'} 
                onChange={handleInputChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="w-full border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="agree" checked={formData.agree} onChange={handleInputChange} required
                className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label className="text-sm text-gray-700">
                I agree to <span className="text-blue-600 font-medium">Terms & Privacy Policy ✅</span>
              </label>
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Submit Button */}
            <button type="submit" disabled={isLoading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => navigate('/signin')} className="text-blue-600 hover:underline">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

