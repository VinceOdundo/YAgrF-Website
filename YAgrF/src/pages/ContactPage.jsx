import React, { useState } from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 7rem;
  background: linear-gradient(-45deg, #0d3c00 0%, #91b71f 100%);
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--secondary-color),
    var(--primary-color)
  );
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
  color: var(--primary-color);
`;

const MapWrapper = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const CaptchaWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const CaptchaQuestion = styled.p`
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.p`
  color: #51cf66;
  margin-top: 0.5rem;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });

  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion(`What is ${num1} + ${num2}?`);
    setCaptchaAnswer((num1 + num2).toString());
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.captcha !== captchaAnswer)
      newErrors.captcha = "Incorrect captcha answer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) return;

    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: "info@yagrf.org",
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: "",
      });
      generateCaptcha();
    } catch (error) {
      console.error("Failed to send the message:", error);
      setErrors({
        submit: "Failed to send the message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <PageTitle>Get in Touch</PageTitle>
      <ContentWrapper>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
            />
            {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us more about your inquiry..."
            ></TextArea>
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>
          <CaptchaWrapper>
            <CaptchaQuestion>{captchaQuestion}</CaptchaQuestion>
            <Input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              required
              placeholder="Enter the answer"
            />
            {errors.captcha && <ErrorMessage>{errors.captcha}</ErrorMessage>}
          </CaptchaWrapper>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader size={18} />
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </SubmitButton>
          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </ContactForm>

        <ContactInfo>
          <div>
            <InfoItem>
              <IconWrapper>
                <Phone size={24} />
              </IconWrapper>
              <div>+254 743 049 944</div>
            </InfoItem>
            <InfoItem>
              <IconWrapper>
                <Mail size={24} />
              </IconWrapper>
              <div>info@yagrf.org</div>
            </InfoItem>
            <InfoItem>
              <IconWrapper>
                <MapPin size={24} />
              </IconWrapper>
              <div>Youth Agri-Force Campus, Siaya, Kenya</div>
            </InfoItem>
          </div>
          <MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.112138257004!2d34.295966174964505!3d0.05387159994560178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fe3000904f6a1%3A0x4d83bbfd9416f418!2sYouth%20Agri-Force%20Campus%20-Siaya!5e1!3m2!1sen!2ske!4v1722351002735!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapWrapper>
        </ContactInfo>
      </ContentWrapper>
      {isLoading && (
        <LoadingOverlay>
          <Loader size={48} color="#ffffff" />
        </LoadingOverlay>
      )}
    </PageWrapper>
  );
};

export default ContactPage;
