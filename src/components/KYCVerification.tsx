
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, CheckCircle, AlertCircle, Clock, FileText, User, Building, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const KYCVerification = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [verificationStatus, setVerificationStatus] = useState('pending'); // pending, verified, rejected
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    
    // Identity Documents
    idType: '',
    idNumber: '',
    idDocument: null,
    proofOfAddress: null,
    
    // Financial Information
    investorType: 'individual',
    netWorth: '',
    incomeSource: '',
    investmentExperience: '',
    riskTolerance: '',
    
    // Business Information (if applicable)
    companyName: '',
    companyRegistration: '',
    businessType: '',
    taxId: ''
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    updateFormData(field, file);
    if (file) {
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded.`,
      });
    }
  };

  const handleSubmit = () => {
    setVerificationStatus('pending');
    toast({
      title: "KYC Application Submitted",
      description: "Your verification is being processed. You'll receive an update within 2-3 business days.",
    });
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <User className="h-5 w-5" />;
      case 2:
        return <FileText className="h-5 w-5" />;
      case 3:
        return <CreditCard className="h-5 w-5" />;
      case 4:
        return <Building className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getStatusBadge = () => {
    switch (verificationStatus) {
      case 'verified':
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30">
            <Clock className="h-3 w-3 mr-1" />
            Under Review
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
            <AlertCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  const progressValue = (currentStep / 4) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="glass-effect p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-50">KYC Verification</h2>
          {getStatusBadge()}
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300">Verification Progress</span>
            <span className="text-slate-300">{currentStep}/4</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step}
              className={`flex flex-col items-center p-4 rounded-lg border ${
                step <= currentStep 
                  ? 'border-gold-500/30 bg-gold-500/10' 
                  : 'border-navy-700 bg-navy-800/50'
              }`}
            >
              <div className={`p-2 rounded-full mb-2 ${
                step <= currentStep 
                  ? 'bg-gold-500 text-navy-950' 
                  : 'bg-navy-700 text-slate-400'
              }`}>
                {getStepIcon(step)}
              </div>
              <span className={`text-sm font-medium ${
                step <= currentStep ? 'text-gold-400' : 'text-slate-400'
              }`}>
                Step {step}
              </span>
              <span className="text-xs text-slate-400 text-center">
                {step === 1 && 'Personal Info'}
                {step === 2 && 'Documents'}
                {step === 3 && 'Financial Info'}
                {step === 4 && 'Review'}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Tabs value={`step${currentStep}`} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-navy-800">
          <TabsTrigger value="step1" disabled={currentStep < 1}>Personal</TabsTrigger>
          <TabsTrigger value="step2" disabled={currentStep < 2}>Documents</TabsTrigger>
          <TabsTrigger value="step3" disabled={currentStep < 3}>Financial</TabsTrigger>
          <TabsTrigger value="step4" disabled={currentStep < 4}>Review</TabsTrigger>
        </TabsList>

        <TabsContent value="step1">
          <Card className="glass-effect p-6">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="bg-navy-800 border-navy-700 text-slate-50"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className="bg-navy-800 border-navy-700 text-slate-50"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth" className="text-slate-300">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                  className="bg-navy-800 border-navy-700 text-slate-50"
                />
              </div>
              <div>
                <Label htmlFor="nationality" className="text-slate-300">Nationality</Label>
                <Select value={formData.nationality} onValueChange={(value) => updateFormData('nationality', value)}>
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-slate-300">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                  className="bg-navy-800 border-navy-700 text-slate-50"
                />
              </div>
              <div>
                <Label htmlFor="address" className="text-slate-300">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData('address', e.target.value)}
                  className="bg-navy-800 border-navy-700 text-slate-50"
                />
              </div>
            </div>
            <Button 
              onClick={() => setCurrentStep(2)}
              className="mt-6 bg-gold-500 hover:bg-gold-600 text-navy-950"
            >
              Continue to Documents
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="step2">
          <Card className="glass-effect p-6">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Identity Documents</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="idType" className="text-slate-300">ID Document Type</Label>
                <Select value={formData.idType} onValueChange={(value) => updateFormData('idType', value)}>
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="drivers-license">Driver's License</SelectItem>
                    <SelectItem value="national-id">National ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="idDocument" className="text-slate-300">Upload ID Document</Label>
                <div className="mt-2 border-2 border-dashed border-navy-700 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                  <p className="text-slate-400 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500">PNG, JPG, PDF up to 10MB</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => handleFileUpload('idDocument', e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="proofOfAddress" className="text-slate-300">Proof of Address</Label>
                <div className="mt-2 border-2 border-dashed border-navy-700 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                  <p className="text-slate-400 mb-2">Upload utility bill or bank statement</p>
                  <p className="text-xs text-slate-500">Document must be less than 3 months old</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => handleFileUpload('proofOfAddress', e.target.files?.[0] || null)}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="border-navy-700 text-slate-300"
              >
                Back
              </Button>
              <Button 
                onClick={() => setCurrentStep(3)}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950"
              >
                Continue to Financial Info
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="step3">
          <Card className="glass-effect p-6">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="investorType" className="text-slate-300">Investor Type</Label>
                <Select value={formData.investorType} onValueChange={(value) => updateFormData('investorType', value)}>
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="institutional">Institutional</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="netWorth" className="text-slate-300">Net Worth</Label>
                <Select value={formData.netWorth} onValueChange={(value) => updateFormData('netWorth', value)}>
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500k">Under $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="over-5m">Over $5M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="incomeSource" className="text-slate-300">Primary Income Source</Label>
                <Select value={formData.incomeSource} onValueChange={(value) => updateFormData('incomeSource', value)}>
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employment">Employment</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="investments">Investments</SelectItem>
                    <SelectItem value="inheritance">Inheritance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="investmentExperience" className="text-slate-300">Investment Experience</Label>
                <Select value={formData.investmentExperience} onValueChange={(value) => updateFormData('investmentExperience', value)}>
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-slate-50">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="border-navy-700 text-slate-300"
              >
                Back
              </Button>
              <Button 
                onClick={() => setCurrentStep(4)}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950"
              >
                Review Application
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="step4">
          <Card className="glass-effect p-6">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Review & Submit</h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-navy-800/50 rounded-lg">
                <h4 className="font-medium text-slate-50 mb-2">Personal Information</h4>
                <p className="text-slate-300 text-sm">
                  {formData.firstName} {formData.lastName} • {formData.nationality} • {formData.phoneNumber}
                </p>
              </div>
              
              <div className="p-4 bg-navy-800/50 rounded-lg">
                <h4 className="font-medium text-slate-50 mb-2">Documents</h4>
                <p className="text-slate-300 text-sm">
                  ID Type: {formData.idType} • Documents: {formData.idDocument ? 'Uploaded' : 'Pending'}
                </p>
              </div>
              
              <div className="p-4 bg-navy-800/50 rounded-lg">
                <h4 className="font-medium text-slate-50 mb-2">Financial Profile</h4>
                <p className="text-slate-300 text-sm">
                  {formData.investorType} investor • Net Worth: {formData.netWorth} • Experience: {formData.investmentExperience}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(3)}
                className="border-navy-700 text-slate-300"
              >
                Back
              </Button>
              <Button 
                onClick={handleSubmit}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950"
              >
                Submit for Verification
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KYCVerification;
