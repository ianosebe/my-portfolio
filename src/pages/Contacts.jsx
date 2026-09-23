// src/pages/Contacts.jsx
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FadeIn from '../components/FadeIn';

export default function Contacts() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = {
    email: 'ianosebe8@gmail.com',
    location: 'Nairobi, Kenya',
    phone: '+254 716 334 678',
    github: 'https://github.com/ianosebe',
    linkedin: 'https://linkedin.com/in/IanNyangau',
    whatsapp: 'https://wa.me/254716334678',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[var(--background)] min-h-screen pt-40 pb-32 px-6 lg:px-12 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      {/* ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0", right: "-10%", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(212,168,83,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-widest uppercase mb-6 inline-flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span style={{ fontSize: "6px" }}>◆</span> 06 / Contact
              </span>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-display text-5xl lg:text-6xl leading-tight mb-8 text-white">
                Let's build<br />
                <em className="italic">something</em><br />
                remarkable.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--secondary-foreground)", lineHeight: "1.8" }}>
                Whether you have a project, a partnership, or a new idea, I'm always open to a conversation. Reach out and let's create a professional web experience that delivers.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="space-y-5 mb-10">
                {[
                  { label: "Email", value: contactInfo.email, icon: "✉" },
                  { label: "Phone", value: contactInfo.phone, icon: "✆" },
                  { label: "Location", value: contactInfo.location, icon: "◎" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 items-start px-4 py-3.5 group transition-all duration-200"
                    style={{
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--secondary)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--muted-foreground)" }}>
                        {item.label}
                      </p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted-foreground)" }}>
                  Reach me on
                </p>
                <div className="flex gap-3">
                  {[
                    { name: "GitHub", url: contactInfo.github, icon: <FaGithub /> },
                    { name: "LinkedIn", url: contactInfo.linkedin, icon: <FaLinkedin /> },
                    { name: "WhatsApp", url: contactInfo.whatsapp, icon: <BsWhatsapp /> },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-widest uppercase px-4 py-3 transition-all duration-200 flex items-center gap-2"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--muted-foreground)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--muted-foreground)";
                      }}
                    >
                      {platform.icon} {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={150}>
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center py-24"
                  style={{
                    border: "1px solid rgba(212,168,83,0.2)",
                    backgroundColor: "rgba(212,168,83,0.04)",
                  }}
                >
                  <div
                    className="w-20 h-20 flex items-center justify-center text-3xl mb-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,168,83,0.2), rgba(212,168,83,0.05))",
                      border: "1px solid rgba(212,168,83,0.3)",
                      color: "var(--accent)",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="font-display text-4xl mb-3 text-white">Message sent.</h3>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    I'll get back to you fast with the next steps.
                  </p>
                </div>
              ) : (
                <div
                  className="p-8 lg:p-10"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--card)",
                  }}
                >
                  <h3 className="font-display text-2xl mb-8 text-white">Drop a quick brief</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      {[
                        { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                        { id: "email", label: "Email Address", type: "email", placeholder: "jane@company.com" },
                      ].map((field) => (
                        <div key={field.id}>
                          <label
                            htmlFor={field.id}
                            className="block font-mono text-xs tracking-widest uppercase mb-2"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            value={formData[field.id]}
                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                            className="w-full px-4 py-3.5 text-sm outline-none transition-all duration-200"
                            style={{
                              backgroundColor: "var(--secondary)",
                              border: "1px solid var(--border)",
                              color: "var(--foreground)",
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = "var(--accent)";
                              e.currentTarget.style.backgroundColor = "rgba(212,168,83,0.04)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = "var(--border)";
                              e.currentTarget.style.backgroundColor = "var(--secondary)";
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-mono text-xs tracking-widest uppercase mb-2"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project brief"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "var(--secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--foreground)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.backgroundColor = "rgba(212,168,83,0.04)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.backgroundColor = "var(--secondary)";
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-xs tracking-widest uppercase mb-2"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        placeholder="Tell me about your project..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm outline-none resize-none transition-all duration-200"
                        style={{
                          backgroundColor: "var(--secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--foreground)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.backgroundColor = "rgba(212,168,83,0.04)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.backgroundColor = "var(--secondary)";
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-mono text-sm tracking-widest uppercase py-4 transition-all duration-300 relative overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, #d4a853, #b8862e)",
                        color: "var(--accent-foreground)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      Send Message →
                    </button>
                  </form>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
