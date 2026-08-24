import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  Loader2 
} from 'lucide-react';

function LinkedinIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const projectTypes = [
  'Full-Stack Web App',
  'MERN / React Project',
  'Hiring / Full-Time Role',
  'Collaboration Inquiry',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setForm({
          name: '',
          email: '',
          projectType: 'Full-Stack Web App',
          message: '',
        });
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      style={{
        width: '100%',
        paddingTop: '70px',
        paddingBottom: '80px',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, rgba(0, 206, 168, 0.08) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '36px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0, 206, 168, 0.12)',
            border: '1px solid rgba(0, 206, 168, 0.35)',
            color: '#00cea8',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '12px',
          }}
        >
          <Sparkles size={14} />
          <span>Let's Build Together</span>
        </div>

        <h2
          style={{
            color: '#ffffff',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '900',
            margin: '0 0 10px 0',
            letterSpacing: '-0.5px',
          }}
        >
          Get In Touch.
        </h2>
        <p style={{ color: '#aaa6c3', fontSize: '15.5px', maxWidth: '580px', margin: 0, lineHeight: '1.6' }}>
          Have a project in mind, an opportunity to discuss, or looking for a developer? Drop a message below or connect via professional channels.
        </p>
      </div>

      {/* Dual Column Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          alignItems: 'start',
        }}
      >
        {/* Left Side: Contact Channels & Safe Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Status Indicator Card */}
          <div
            style={{
              backgroundColor: '#0d0a21',
              border: '1px solid #1f1b40',
              borderRadius: '18px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#00cea8',
                  boxShadow: '0 0 10px #00cea8',
                }}
              />
              <div>
                <div style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: '800' }}>Current Status</div>
                <div style={{ color: '#94a3b8', fontSize: '12px' }}>Open for Full-Stack / MERN Opportunities</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#8b86a8', fontSize: '11.5px' }}>
              <Clock size={13} />
              <span>Fast response</span>
            </div>
          </div>

          {/* Professional Email Card */}
          <div
            onClick={() => handleCopy('harsh04032004@gmail.com', 'email')}
            style={{
              backgroundColor: '#0d0a21',
              border: '1px solid #1f1b40',
              borderRadius: '18px',
              padding: '18px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00cea8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1f1b40';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#141030',
                  border: '1px solid rgba(0, 206, 168, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00cea8',
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Direct Inquiries</div>
                <div style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: '700', marginTop: '2px' }}>harsh04032004@gmail.com</div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: copiedField === 'email' ? '#00cea8' : '#171338',
                color: copiedField === 'email' ? '#050816' : '#94a3b8',
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              {copiedField === 'email' ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
            </div>
          </div>

          {/* Professional LinkedIn Connect Card */}
          <a
            href="https://www.linkedin.com/in/harshpatel434"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#0d0a21',
              border: '1px solid #1f1b40',
              borderRadius: '18px',
              padding: '18px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#915eff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1f1b40';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#141030',
                  border: '1px solid rgba(145, 94, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#915eff',
                }}
              >
                <LinkedinIcon size={18} />
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Professional Network</div>
                <div style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: '700', marginTop: '2px' }}>linkedin.com/in/harshpatel434</div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#171338',
                color: '#915eff',
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: '700',
              }}
            >
              Connect
            </div>
          </a>

          {/* Generalized Region Location Card */}
          <div
            style={{
              backgroundColor: '#0d0a21',
              border: '1px solid #1f1b40',
              borderRadius: '18px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#141030',
                border: '1px solid #28244c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cbd5e1',
              }}
            >
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Location</div>
              <div style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: '700', marginTop: '2px' }}>Gujarat, India</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Message Form */}
        <div
          style={{
            backgroundColor: '#0d0a21',
            border: '1px solid rgba(145, 94, 255, 0.35)',
            borderRadius: '22px',
            padding: '28px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(145, 94, 255, 0.15)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <MessageSquare size={16} color="#915eff" />
            <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', margin: 0 }}>
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: '#8b86a8', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                Topic / Subject
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {projectTypes.map((type) => {
                  const isSelected = form.projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, projectType: type })}
                      style={{
                        backgroundColor: isSelected ? 'rgba(0, 206, 168, 0.18)' : '#141030',
                        color: isSelected ? '#00cea8' : '#94a3b8',
                        border: `1px solid ${isSelected ? '#00cea8' : '#231f47'}`,
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: '#8b86a8', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: '#120e2e',
                  border: '1px solid #231f47',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#00cea8')}
                onBlur={(e) => (e.target.style.borderColor = '#231f47')}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#8b86a8', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: '#120e2e',
                  border: '1px solid #231f47',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#915eff')}
                onBlur={(e) => (e.target.style.borderColor = '#231f47')}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ color: '#8b86a8', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
                  Message
                </label>
                <span style={{ color: '#64748b', fontSize: '11px' }}>
                  {form.message.length} chars
                </span>
              </div>
              <textarea
                required
                rows={4}
                placeholder="Write your inquiry or project details here..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: '#120e2e',
                  border: '1px solid #231f47',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  outline: 'none',
                  resize: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#00cea8')}
                onBlur={(e) => (e.target.style.borderColor = '#231f47')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              style={{
                backgroundColor: status === 'success' ? '#00cea8' : '#915eff',
                color: status === 'success' ? '#050816' : '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '14px',
                fontWeight: '800',
                cursor: status === 'loading' || status === 'success' ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '6px',
                boxShadow: status === 'success' 
                  ? '0 6px 20px rgba(0, 206, 168, 0.4)' 
                  : '0 6px 20px rgba(145, 94, 255, 0.4)',
                transition: 'all 0.25s ease',
              }}
            >
              {status === 'loading' && (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              )}
              {status === 'success' && (
                <>
                  <Check size={16} />
                  <span>Message Sent!</span>
                </>
              )}
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}