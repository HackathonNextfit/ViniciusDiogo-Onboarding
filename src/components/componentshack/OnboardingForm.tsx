import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    description: '',
    icon: '',
    contractTitle: '',
    contractDuration: '',
    contractValue: '',
    contractType: '',
    electronicSignature: false
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSwitchChange = input => e => {
    setFormData({ ...formData, [input]: e.target.checked });
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={
          formData={formData}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          handleChange={handleChange}
          handleSwitchChange={handleSwitchChange}
          formData={formData}
        />
      );
    default:
      return <h1>Onboarding Complete</h1>;
  }
}

export default OnboardingForm;
