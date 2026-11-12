import React, { useState } from 'react';
import './Newsletter.css';

export const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    option: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.option) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-grid">
          {/* Left: Rounded Dummy Photo */}
          <div className="newsletter-image-col">
            <img
              src="/assets/newsletter-student.jpg"
              alt="Muslim Arts College student studying"
              className="newsletter-image"
            />
          </div>

          {/* Right: Newsletter Form */}
          <div className="newsletter-form-col">
            <div className="newsletter-badge">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 0H10V10C4.477 10 0 5.523 0 0Z" fill="#61B38D" />
              </svg>
              <span className="newsletter-badge-text">NEWSLETTER</span>
            </div>

            <h2 className="newsletter-heading">Stay connected</h2>
            <p className="newsletter-subtitle">
              Be first to hear about upcoming events, campus insights, new programs and opportunities at Muslim Arts College.
            </p>

            <div className="newsletter-divider" />

            {submitted ? (
              <div className="newsletter-success-box" role="status">
                <strong>Thank you for subscribing!</strong>
                <p>
                  We&rsquo;ve registered {formData.email} for updates on{' '}
                  {formData.option}.
                </p>
                <button
                  type="button"
                  className="newsletter-submit-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', option: '' });
                  }}
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="newsletter-row-2">
                  <div className="newsletter-field">
                    <label htmlFor="nl-first-name" className="newsletter-label">
                      FIRST NAME <span className="newsletter-req">*</span>
                    </label>
                    <input
                      id="nl-first-name"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="newsletter-input"
                    />
                  </div>

                  <div className="newsletter-field">
                    <label htmlFor="nl-last-name" className="newsletter-label">
                      LAST NAME <span className="newsletter-req">*</span>
                    </label>
                    <input
                      id="nl-last-name"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="newsletter-input"
                    />
                  </div>
                </div>

                <div className="newsletter-field">
                  <label htmlFor="nl-email" className="newsletter-label">
                    EMAIL <span className="newsletter-req">*</span>
                  </label>
                  <input
                    id="nl-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="newsletter-input"
                  />
                </div>

                <div className="newsletter-field">
                  <label htmlFor="nl-options" className="newsletter-label">
                    SIGN UP OPTIONS <span className="newsletter-req">*</span>
                  </label>
                  <select
                    id="nl-options"
                    name="option"
                    required
                    value={formData.option}
                    onChange={handleChange}
                    className="newsletter-select"
                  >
                    <option value="">Please select</option>
                    <option value="Undergraduate Admissions">Undergraduate Admissions</option>
                    <option value="Postgraduate & Research">Postgraduate &amp; Research</option>
                    <option value="Campus Events & Seminars">Campus Events &amp; Seminars</option>
                    <option value="Alumni Updates">Alumni Updates</option>
                  </select>
                </div>

                <div className="newsletter-actions">
                  <button type="submit" className="newsletter-submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

