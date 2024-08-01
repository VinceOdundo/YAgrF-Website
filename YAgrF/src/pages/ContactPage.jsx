import React, { useState } from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
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
          </FormGroup>
          <SubmitButton type="submit">
            Send Message
            <Send size={18} />
          </SubmitButton>
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
    </PageWrapper>
  );
};

export default ContactPage;
