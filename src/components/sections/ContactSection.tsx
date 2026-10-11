import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { contactDetails, socialLinks } from '../../data/contact';
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight, Send, Check, Copy } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'React Web App',
    timeline: 'Within 1-2 Months',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const categories = ['React Web App', 'Full Website', 'PHP & Database', 'Frontend Redesign', 'Technical Scoping'];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please provide your name, email, and project brief details.');
      return;
    }

    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(`[Project Inquiry: ${formData.category}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Category: ${formData.category}\n` +
      `Target Timeline: ${formData.timeline}\n\n` +
      `Project Brief:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section section-divider" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <SectionHeading
          tag="07"
          eyebrow="GET IN TOUCH"
          title="Direct contact & project inquiries."
          subtitle="Reach out directly via WhatsApp, telephone, or detailed inquiry brief. Every message goes straight to Asad Chaudhary."
        />

        {/* 2-Column Desktop Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Direct Channels & Verified Details */}
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                color: 'var(--text)',
              }}
            >
              Let’s discuss your project scope.
            </h3>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
              Whether you are launching a greenfield web application, refactoring an existing repository, or looking for an experienced developer for long-term contract engineering, I respond promptly.
            </p>

            {/* Direct Channel Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* WhatsApp Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="interactive-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      WHATSAPP (FASTEST RESPONSE)
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>
                      {contactDetails.whatsappDisplay}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => copyToClipboard(contactDetails.whatsappDisplay, 'whatsapp')}
                    style={{
                      padding: '0.4rem 0.6rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--line)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      color: 'var(--text)',
                    }}
                    title="Copy number"
                  >
                    {copiedType === 'whatsapp' ? 'Copied' : <Copy size={13} />}
                  </button>

                  <a
                    href={contactDetails.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--accent-dark)',
                      padding: '0.4rem 0.75rem',
                      backgroundColor: 'var(--accent-subtle)',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    <span>Chat</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="interactive-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      DIRECT INBOX
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>
                      {contactDetails.email}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => copyToClipboard(contactDetails.email, 'email')}
                    style={{
                      padding: '0.4rem 0.6rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--line)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      color: 'var(--text)',
                    }}
                    title="Copy email"
                  >
                    {copiedType === 'email' ? 'Copied' : <Copy size={13} />}
                  </button>

                  <a
                    href={`mailto:${contactDetails.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      padding: '0.4rem 0.75rem',
                      backgroundColor: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    <span>Write</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="interactive-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      TELEPHONE
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>
                      {contactDetails.phoneDisplay}
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${contactDetails.phoneTel}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    padding: '0.4rem 0.75rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  <span>Call</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Location Office */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    OFFICE LOCATION
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>
                    {contactDetails.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Verified Agency Profiles
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.45rem 0.85rem',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    className="social-badge"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight size={13} color="var(--accent)" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Form */}
          <div
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              DIRECT PROJECT BRIEF
            </div>

            <h4
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
                color: 'var(--text)',
              }}
            >
              Send your project specifications
            </h4>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Select your requirements below. Submitting launches your configured mail client with all project parameters pre-filled to <strong>{contactDetails.email}</strong>.
            </p>

            {validationError && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#FEE2E2',
                  border: '1px solid #EF4444',
                  borderRadius: 'var(--radius-xs)',
                  color: '#991B1B',
                  fontSize: '0.88rem',
                  marginBottom: '1.5rem',
                }}
              >
                {validationError}
              </div>
            )}

            {formSubmitted ? (
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-xs)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    color: '#121316',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <Check size={26} strokeWidth={2.5} />
                </div>
                <h5 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Email Client Initiated
                </h5>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '440px', margin: '0 auto 1.75rem' }}>
                  Your email client has opened with your inquiry pre-filled to <strong>{contactDetails.email}</strong>. If your mail client did not automatically trigger, send your message directly to {contactDetails.email}.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  size="sm"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                {/* Category Pills Selector */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    1. PROJECT DOMAIN
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, category: cat }))}
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid',
                          borderColor: formData.category === cat ? 'var(--text)' : 'var(--line)',
                          backgroundColor: formData.category === cat ? 'var(--text)' : 'var(--bg)',
                          color: formData.category === cat ? '#FFFFFF' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          fontWeight: 600,
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        marginBottom: '0.4rem',
                        color: 'var(--text)',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--line-strong)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        marginBottom: '0.4rem',
                        color: 'var(--text)',
                      }}
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@studio.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--line-strong)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>
                </div>

                {/* Target Timeline */}
                <div>
                  <label
                    htmlFor="contact-timeline"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                      color: 'var(--text)',
                    }}
                  >
                    Target Delivery Timeline
                  </label>
                  <select
                    id="contact-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--line-strong)',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--text)',
                    }}
                  >
                    <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                    <option value="Standard (1 Month)">Standard (1 Month)</option>
                    <option value="Within 2-3 Months">Within 2-3 Months)</option>
                    <option value="Flexible / Ongoing">Flexible / Ongoing Support</option>
                  </select>
                </div>

                {/* Message Brief */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                      color: 'var(--text)',
                    }}
                  >
                    Project Scope &amp; Brief *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product requirements, current stack, and objectives..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--line-strong)',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--text)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send size={16} />}
                >
                  Dispatch Project Brief
                </Button>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                  }}
                >
                  No automated newsletters or sales outreach. Strictly confidential.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .social-badge:hover {
          border-color: var(--text) !important;
        }
      `}</style>
    </section>
  );
};
