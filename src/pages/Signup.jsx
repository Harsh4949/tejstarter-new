import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Calendar, Building2, Link, Upload, CheckCircle, ShieldCheck, ShieldAlert } from 'lucide-react';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';
import OtpVerificationDialog from '../components/OtpVerificationDialog';
import authService from '../appwrite/auth.js';
import { Dialog } from '@headlessui/react'
import ReactMarkdown from 'react-markdown'
const Signup = () => {
  const navigate = useNavigate();
  const { signup, login } = useAuth();
  
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
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [emailOtpData, setEmailOtpData] = useState({ userId: '', email: '' });
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const termsMarkdown = `
Welcome to TejStarter! These Terms and Conditions ("Terms") govern your use of our website, www.tejstarter.in ("Website"), and the services provided by TejStarter. By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Website.

### 1. Use of the Website
- You must be at least 18 years old or accessing the Website under the supervision of a parent or legal guardian.
- You agree to use the Website for lawful purposes only and not to engage in any activity that could harm, disrupt, or misuse the platform or other users.

### 2. Account Registration
- To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your login information and all activities under your account.
- You must provide accurate, complete, and up-to-date information.

### 3. Services Offered
- TejStarter offers a platform for students, professionals, and entrepreneurs to collaborate, develop projects, and explore startup opportunities.
- We do not guarantee the success or funding of any project or collaboration initiated through our platform.

### 4. Intellectual Property
- All content, designs, logos, and materials on the Website are the intellectual property of TejStarter or its licensors.
- You may not reproduce, distribute, modify, or use any content from the Website without prior written consent.

### 5. User-Generated Content
- By submitting content (ideas, projects, comments, etc.) to the Website, you grant us a non-exclusive, royalty-free license to use, display, and promote such content.
- You are solely responsible for any content you upload and agree not to post anything illegal, offensive, or infringing.

### 6. Limitation of Liability
- TejStarter shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Website or services.
- We make no warranties regarding the accuracy, reliability, or completeness of the content on the Website.

### 7. Third-Party Links
- Our Website may contain links to third-party websites. We are not responsible for the content, terms, or privacy practices of these external sites.

### 8. Termination
- We reserve the right to suspend or terminate your access to the Website at any time, without notice, for any conduct that we believe violates these Terms.

### 9. Changes to Terms
- We may update these Terms at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website after changes constitutes your acceptance of the updated Terms.

**Contact us** if you have any questions.
`
const privacyMarkdown = `

**Company Name**: TejStarter  
**Email**: tejaspawar2823@gmail.com  
**Phone**: +91 8600450851

At TejStarter, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you interact with us through our website or services.

### 1. Information We Collect
We may collect the following types of personal information:
- Name, phone number, email address
- Billing and shipping address
- Payment and transaction details (processed securely via third-party gateways)
- Information you voluntarily provide through forms, surveys, or customer support interactions

### 2. How We Use Your Information
We use the information we collect to:
- Process and fulfill your orders
- Provide customer service and respond to inquiries
- Improve our products, services, and user experience
- Send you updates, promotional offers, or service notifications (only if you opt-in)

### 3. Sharing of Information
We do not sell or rent your personal information. However, we may share it with:
- Trusted service providers (e.g., payment processors, delivery partners)
- Legal or regulatory authorities if required by law

### 4. Data Security
We use appropriate security measures to safeguard your data against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.

### 5. Your Rights
You have the right to:
- Access the personal data we hold about you
- Request correction or deletion of your information
- Withdraw consent for marketing communications at any time

### 6. Cookies
Our website may use cookies and similar technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.

### 7. External Links
Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.

### 8. Policy Updates
We may update this Privacy Policy from time to time. Any changes will be posted on this page. Continued use of our services after updates constitutes your acceptance of the revised policy.

### 9. Contact Us
If you have any questions or concerns regarding this Privacy Policy, you can contact us at:  
📧 Email: tejaspawar2823@gmail.com  
📞 Phone: +91 8600450851
`


  // Education options
  const educationLevels = [
    'High School',
    'Undergraduate',
    'Postgraduate',
    'Professional Course'
  ];

  const degreesByLevel = {
    'High School': ['10th Grade', '12th Grade'],
    'Undergraduate': ['B.Tech', 'B.E', 'B.Sc', 'B.Com', 'B.A', 'BBA', 'BCA', 'Other'],
    'Postgraduate': ['M.Tech', 'M.E', 'M.Sc', 'M.Com', 'M.A', 'MBA', 'MCA', 'Other'],
    'Professional Course': ['Diploma', 'Certificate', 'Other']
  };

  const majorFieldsByDegree = {
    'B.Tech': ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'Chemical', 'Other'],
    'B.E': ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'Chemical', 'Other'],
    'M.Tech': ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'Chemical', 'Other'],
    'M.E': ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'Chemical', 'Other']
  };

  const roleOptions = [
    'Student',
    'Entrepreneur',
    'Mentor',
    'Investor',
    'Industry Professional'
  ];

  const locationOptions = [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
    "Other"
  ];


  // Password strength calculation
  useEffect(() => {
    const calculateStrength = () => {
      const password = formData.password;
      let strength = 0;
      
      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;
      
      setPasswordStrength(strength);
    };
    
    calculateStrength();
  }, [formData.password]);

  const handleSendOtp = async () => {
    setError('');
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await authService.sendEmailOTP(formData.email);
      setEmailOtpData(response); // contains userId, secret, phrase
      setOtpDialogOpen(true);    // show the OTP dialog
    } catch (err) {
      console.error("Failed to send OTP:", err);
      setError(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e) => {
  const { name, value, type, checked, files } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
    
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Use setIsLoading instead of setLoading
    setError('');
    
    try {
      const {
        name, email, phone, password, confirmPassword, role,
        location, agree, dob
      } = formData;

      // Validation
      if (!name || !email || !phone || !password || !confirmPassword || !role || !location) {
        throw new Error('Please fill in all required fields');
      }

      if (!isEmailVerified) {
        alert('Please verify your email to complete the signup process.');
        return;
      }
      
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

      try {
        // Try to create new account
        const result = await signup(formData);
        
        if (result) {
          // Success - redirect to dashboard
          navigate('/dashboard', { 
            state: { 
              message: 'Account created successfully! Welcome to TejStarter.',
              isNewUser: true
            }
          });
        }
      } catch (signupError) {
        // Check if user already exists
        if (signupError.message?.includes('already exists') || signupError.message?.includes('Conflict')) {
          // User exists, try to log them in instead
          try {
            const loginResult = await login({ email, password });
            if (loginResult) {
              navigate('/dashboard', { 
                state: { 
                  message: 'Welcome back! You already have an account.',
                  isExistingUser: true
                }
              });
            }
          } catch (loginError) {
            throw new Error('User already exists but password is incorrect. Please try logging in or reset your password.');
          }
        } else {
          throw signupError;
        }
      }
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false); // Use setIsLoading
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

  return (
    <>
      <SEO 
        title="Join TejStarter - Create Your Account"
        description="Create your TejStarter account to access collaboration opportunities, startup projects, and mentorship programs for college students"
        keywords="TejStarter signup, student collaboration, startup registration, college networking"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Join TejStarter</h1>
              <p className="text-gray-600">Create your account to start collaborating</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Send OTP Button */}
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={!formData.email || isEmailVerified}
                    className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                  </button>

                  {/* OTP Verification Dialog */}
                  {otpDialogOpen && (
                    <OtpVerificationDialog
                      emailOtpData={emailOtpData}
                      onClose={() => setOtpDialogOpen(false)}
                      onVerified={(session) => {
                        console.log("✅ OTP Verified:", session);
                        setOtpDialogOpen(false);
                          setIsEmailVerified(true);
                        // optionally update a "isEmailVerified" state
                      }}
                    />
                  )}
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    {roleOptions.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select your location</option>
                      {locationOptions.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.role === 'Student' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required={formData.role === 'Student'}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Student-specific fields */}
              {formData.role === 'Student' && (
                <div className="space-y-6 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Student Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Education Level *
                      </label>
                      <select
                        name="educationLevel"
                        value={formData.educationLevel}
                        onChange={handleInputChange}
                        required={formData.role === 'Student'}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select education level</option>
                        {educationLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    {formData.educationLevel && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Degree/Class *
                        </label>
                        <select
                          name="subLevel"
                          value={formData.subLevel}
                          onChange={handleInputChange}
                          required={formData.role === 'Student'}
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select degree/class</option>
                          {degreesByLevel[formData.educationLevel]?.map(degree => (
                            <option key={degree} value={degree}>{degree}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {formData.subLevel && majorFieldsByDegree[formData.subLevel] && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Field of Study *
                        </label>
                        <select
                          name="majorField"
                          value={formData.majorField}
                          onChange={handleInputChange}
                          required={formData.role === 'Student' && majorFieldsByDegree[formData.subLevel]}
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select field of study</option>
                          {majorFieldsByDegree[formData.subLevel]?.map(field => (
                            <option key={field} value={field}>{field}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        College/University *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          required={formData.role === 'Student'}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your college/university"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume (Optional)
                      </label>
                      <div className="relative">
                        <Upload className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="file"
                          name="resume"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Non-student fields */}
              {formData.role && formData.role !== 'Student' && (
                <div className="space-y-6 p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization URL (Optional)
                      </label>
                      <div className="relative">
                        <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="url"
                          name="companyUrl"
                          value={formData.companyUrl}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio/Work Samples (Optional)
                      </label>
                      <div className="relative">
                        <Upload className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="file"
                          name="portfolio"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx,.zip"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${getStrengthColor()}`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {getStrengthText()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                  )}
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Passwords match
                    </p>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleInputChange}
          required
          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">
          I agree to the{' '}
          <button
            type="button"
            onClick={() => setShowTerms(true)}
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            type="button"
            onClick={() => setShowPrivacy(true)}
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </button>
        </label>
      </div>

         {/* Terms Modal */}
            <Dialog open={showTerms} onClose={() => setShowTerms(false)} className="relative z-50">
              <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-lg rounded bg-white p-6 shadow-lg max-h-[80vh] overflow-y-auto">
                  <Dialog.Title className="text-lg font-bold">Terms of Service</Dialog.Title>
                  <div className="mt-2 text-sm text-gray-700 prose prose-sm">
                    <ReactMarkdown>{termsMarkdown}</ReactMarkdown>
                  </div>
                  <button
                    onClick={() => setShowTerms(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </div>
            </Dialog>

            {/* Privacy Modal */}
            <Dialog open={showPrivacy} onClose={() => setShowPrivacy(false)} className="relative z-50">
              <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-lg rounded bg-white p-6 shadow-lg max-h-[80vh] overflow-y-auto">
                  <Dialog.Title className="text-lg font-bold">Privacy Policy</Dialog.Title>
                  <div className="mt-2 text-sm text-gray-700 prose prose-sm">
                    <ReactMarkdown>{privacyMarkdown}</ReactMarkdown>
                  </div>
                  <button
                    onClick={() => setShowPrivacy(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </div>
            </Dialog>


              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/signin')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
