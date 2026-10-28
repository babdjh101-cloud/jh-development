import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Check,
  Copy,
  AlertCircle,
  Building,
  CheckCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'dredging',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.formError);
      return;
    }
    setErrorMessage('');
    setFormSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `*JHDCL Corporate Inquiry*\n` +
    `Name: ${formData.name || 'Client'}\n` +
    `Email: ${formData.email || 'N/A'}\n` +
    `Phone: ${formData.phone || 'N/A'}\n` +
    `Category: ${formData.inquiryType}\n` +
    `Message: ${formData.message || t.contact.whatsappPrefill}`
  )}`;

  const directMailtoUrl = `mailto:${COMPANY_CONFIG.headOffice.emails[0]}?subject=${encodeURIComponent(
    `[JHDCL Inquiry] ${formData.inquiryType.toUpperCase()} - ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nProject Scope & Message:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-900/60 border-t border-slate-800" aria-label="Contact Information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.contact.sectionKicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Primary Contact Content: Dual Office Cards + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Cards & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Preferred Verified WhatsApp Highlight Banner */}
            <div className="p-5 rounded-lg bg-emerald-950/40 border border-emerald-800/80 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-emerald-600/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.contact.whatsappDirect}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 font-semibold">
                    {COMPANY_CONFIG.whatsappDisplay}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'bn'
                  ? 'দ্রুত সাড়া ও জরুরি প্রকল্প আলোচনার জন্য সরাসরি আমাদের অফিশিয়াল হোয়াটসঅ্যাপে বার্তা পাঠান।'
                  : 'Direct line for immediate tender consultations, equipment mobilization, and corporate inquiries.'}
              </p>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  t.contact.whatsappPrefill
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappAction}</span>
              </a>
            </div>

            {/* Banani Head Office Card */}
            <div className="p-6 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-400" />
                  <h3 className="text-base font-bold text-white">
                    {language === 'bn' ? COMPANY_CONFIG.headOffice.nameBn : COMPANY_CONFIG.headOffice.nameEn}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-amber-400/90 font-medium px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  Banani, Dhaka
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">
                    {language === 'bn' ? COMPANY_CONFIG.headOffice.addressBn : COMPANY_CONFIG.headOffice.addressEn}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    {COMPANY_CONFIG.headOffice.phones.map((phone, i) => (
                      <div key={i}>
                        <a
                          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                          className="font-mono text-slate-200 hover:text-amber-400 transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 w-full">
                    {COMPANY_CONFIG.headOffice.emails.map((email, i) => (
                      <div key={i} className="flex items-center justify-between gap-2">
                        <a
                          href={`mailto:${email}`}
                          className="font-mono text-slate-300 hover:text-amber-400 transition-colors truncate"
                        >
                          {email}
                        </a>
                        <button
                          onClick={() => copyToClipboard(email)}
                          type="button"
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                          title="Copy email to clipboard"
                        >
                          {copiedEmail === email ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Uttara Corporate Office Card */}
            <div className="p-6 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-400" />
                  <h3 className="text-base font-bold text-white">
                    {language === 'bn' ? COMPANY_CONFIG.corporateOffice.nameBn : COMPANY_CONFIG.corporateOffice.nameEn}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  Uttara, Sector-15
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">
                    {language === 'bn' ? COMPANY_CONFIG.corporateOffice.addressBn : COMPANY_CONFIG.corporateOffice.addressEn}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    {COMPANY_CONFIG.corporateOffice.phones.map((phone, i) => (
                      <div key={i}>
                        <a
                          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                          className="font-mono text-slate-200 hover:text-amber-400 transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 w-full">
                    {COMPANY_CONFIG.corporateOffice.emails.map((email, i) => (
                      <div key={i} className="flex items-center justify-between gap-2">
                        <a
                          href={`mailto:${email}`}
                          className="font-mono text-slate-300 hover:text-amber-400 transition-colors truncate"
                        >
                          {email}
                        </a>
                        <button
                          onClick={() => copyToClipboard(email)}
                          type="button"
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                          title="Copy email to clipboard"
                        >
                          {copiedEmail === email ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Corporate Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-slate-950 border border-slate-800 shadow-xl">
            <h3 className="text-lg font-bold text-white tracking-tight mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {t.contact.formSubtitle}
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-lg bg-slate-900 border border-emerald-800/80 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <h4 className="text-base font-bold text-white">Inquiry Formatted Successfully</h4>
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.contact.formSuccess}
                </p>

                <div className="p-4 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-mono">
                  <div><strong>Sender:</strong> {formData.name} ({formData.phone})</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Category:</strong> {formData.inquiryType}</div>
                  <div className="line-clamp-2"><strong>Scope:</strong> {formData.message}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Instantly via WhatsApp</span>
                  </a>

                  <a
                    href={directMailtoUrl}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors border border-slate-700"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>Send via Official Email</span>
                  </a>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'dredging',
                        message: '',
                      });
                    }}
                    type="button"
                    className="px-3 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errorMessage && (
                  <div className="p-3 rounded bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-medium text-slate-300 mb-1"
                    >
                      {t.contact.fullName} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.fullNamePlaceholder}
                      className="w-full px-3.5 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-md focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs font-medium text-slate-300 mb-1"
                    >
                      {t.contact.phoneNumber}
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-3.5 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-md focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-medium text-slate-300 mb-1"
                    >
                      {t.contact.emailAddress} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-3.5 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-md focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="form-type"
                      className="block text-xs font-medium text-slate-300 mb-1"
                    >
                      {t.contact.inquiryType}
                    </label>
                    <select
                      id="form-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-md focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    >
                      <option value="dredging">{t.contact.inquiryOptions.dredging}</option>
                      <option value="construction">{t.contact.inquiryOptions.construction}</option>
                      <option value="materials">{t.contact.inquiryOptions.materials}</option>
                      <option value="tender">{t.contact.inquiryOptions.tender}</option>
                      <option value="general">{t.contact.inquiryOptions.general}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-medium text-slate-300 mb-1"
                  >
                    {t.contact.message} <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-3.5 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-md focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-y"
                  />
                </div>

                {/* Honest Delivery Disclaimer */}
                <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded border border-slate-800/80">
                  {t.contact.formNotice}
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.submitButton}</span>
                  </button>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Or direct WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
