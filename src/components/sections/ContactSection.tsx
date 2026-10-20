"use client";

import * as React from "react";
import { agencyConfig, getWhatsappNumberByService } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { MessageCircle, Send, Globe, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  const [errors, setErrors] = React.useState<{
    name?: string;
    phone?: string;
    service?: string;
    details?: string;
  }>({});

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: {
      name?: string;
      phone?: string;
      service?: string;
      details?: string;
    } = {};

    // 1. Name: required + min length 2
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "errNameRequired";
    }

    // 2. Phone / WhatsApp: required + valid phone format & min 7 digits
    const phoneClean = formData.phone.trim().replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(phoneClean)) {
      newErrors.phone = "errPhoneRequired";
    }

    // 3. Service: required
    if (!formData.service) {
      newErrors.service = "errServiceRequired";
    }

    // 4. Details: required + min length 10
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      newErrors.details = "errDetailsRequired";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const targetWhatsappNumber = getWhatsappNumberByService(formData.service);

    const whatsappMessage =
      lang === "ar"
        ? `أهلاً سمارت ميديا 👋\n\n📌 طلب جديد من الموقع:\n• الاسم: ${formData.name}\n• رقم الهاتف/الواتساب: ${formData.phone}\n• الخدمة المطلوبة: ${formData.service}\n• تفاصيل المشروع: ${formData.details}`
        : `Hello Smart Media 👋\n\n📌 New Project Request:\n• Name: ${formData.name}\n• Phone/WhatsApp: ${formData.phone}\n• Service Required: ${formData.service}\n• Project Details: ${formData.details}`;

    const whatsappUrl = `https://wa.me/${targetWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-[#060B18] relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="max-w-5xl relative z-10">
        {/* Contact Page Hero Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs sm:text-sm font-bold text-cyan-300 mb-4 backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{t("contactBadge")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              {lang === "ar" ? (
                <>
                  عندك مشروع؟ <span className="text-gradient-cyan-purple">خلينا نبدأ من هنا</span>
                </>
              ) : (
                <>
                  Have a Project? <span className="text-gradient-cyan-purple">Let&apos;s Build It Together</span>
                </>
              )}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              {t("contactHeroSubtext")}
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Form Card */}
        <ScrollReveal direction="up" delay={200}>
          <div className="card-tech rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Column 1: Contact Info & Instant WhatsApp Button */}
              <div
                className={cn(
                  "lg:col-span-5 flex flex-col justify-between h-full",
                  lang === "ar" ? "text-right" : "text-left"
                )}
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-bold text-cyan-300 mb-4">
                    <MessageCircle className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Smart Media Direct</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {t("contactTitle")}
                  </h2>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {t("contactSubtext")}
                  </p>

                  {/* Direct Info */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                        <Globe className="h-4 w-4" />
                      </div>
                      <span className="font-semibold">{t("locationText")}</span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Button with Vibrant Green */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-bold text-slate-400 mb-3">
                    {t("whatsappCaption")}
                  </p>
                  <a
                    href={agencyConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-extrabold transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4.5 w-4.5 fill-current" />
                    <span>{t("whatsappBtn")}</span>
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Request Form Column */}
              <div
                className={cn(
                  "lg:col-span-7 bg-[#050C22]/90 border border-blue-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full",
                  lang === "ar" ? "text-right" : "text-left"
                )}
              >
                <form onSubmit={handleSubmit} noValidate className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Field 1: Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        {t("formName")} <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={lang === "ar" ? "مثال: محمود علي" : "e.g. John Doe"}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#030818] border text-white placeholder:text-slate-500 focus:outline-none transition-all",
                          errors.name
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-blue-500/25 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 font-semibold">{t(errors.name)}</p>
                      )}
                    </div>

                    {/* Field 2: Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        {t("formPhone")} <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={lang === "ar" ? "مثال: 01000000000" : "e.g. +201000000000"}
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#030818] border text-white placeholder:text-slate-500 focus:outline-none transition-all",
                          errors.phone
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-blue-500/25 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        )}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400 font-semibold">{t(errors.phone)}</p>
                      )}
                    </div>

                    {/* Field 3: Service */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        {t("formService")} <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#030818] border text-white focus:outline-none transition-all cursor-pointer",
                          errors.service
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-blue-500/25 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        )}
                      >
                        <option value="" className="bg-[#030818] text-slate-400">{t("servicePlaceholder")}</option>
                        <option value="تطوير موقع إلكتروني" className="bg-[#030818] text-white">{t("serviceOptWeb")}</option>
                        <option value="إعلانات ممولة" className="bg-[#030818] text-white">{t("serviceOptAds")}</option>
                        <option value="موقع إلكتروني + إعلانات ممولة" className="bg-[#030818] text-white">{t("serviceOptBoth")}</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-rose-400 font-semibold">{t(errors.service)}</p>
                      )}
                    </div>

                    {/* Field 4: Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        {t("formDetails")} <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder={
                          lang === "ar"
                            ? "اكتب تفاصيل أو فكرة مشروعك هنا..."
                            : "Describe your project requirements here..."
                        }
                        value={formData.details}
                        onChange={(e) => handleChange("details", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#030818] border text-white placeholder:text-slate-500 focus:outline-none transition-all",
                          errors.details
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-blue-500/25 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        )}
                      />
                      {errors.details && (
                        <p className="mt-1 text-xs text-rose-400 font-semibold">{t(errors.details)}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Request Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-tech-primary inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>{t("formSubmit")}</span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
