"use client";

import * as React from "react";
import { agencyConfig } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { MessageCircle, Send, Globe, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
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

    // 3. Service: required (must select a service)
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

    setSubmitted(true);

    // Build pre-filled WhatsApp message with client inputs
    const whatsappMessage =
      lang === "ar"
        ? `أهلاً سمارت ميديا 👋\n\n📌 طلب جديد من الموقع:\n• الاسم: ${formData.name}\n• رقم الهاتف/الواتساب: ${formData.phone}\n• الخدمة المطلوبة: ${formData.service}\n• تفاصيل المشروع: ${formData.details}`
        : `Hello Smart Media 👋\n\n📌 New Project Request:\n• Name: ${formData.name}\n• Phone/WhatsApp: ${formData.phone}\n• Service Required: ${formData.service}\n• Project Details: ${formData.details}`;

    const whatsappUrl = `${agencyConfig.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect directly to WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-20">
      <Container className="max-w-5xl">
        <div className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-3xl p-6 sm:p-10 shadow-lg shadow-[#46321E]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Column 1: Contact Info & WhatsApp Button in original location (Aligned on bottom horizontal line) */}
            <div
              className={cn(
                "lg:col-span-5 flex flex-col justify-between h-full",
                lang === "ar" ? "text-right" : "text-left"
              )}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] text-xs font-bold text-[#876E57] mb-3">
                  <MessageCircle className="h-3.5 w-3.5 text-[#B85D43]" />
                  <span>{t("contactBadge")}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2D2926] leading-tight">
                  {t("contactTitle")}
                </h2>

                <p className="mt-3 text-sm text-[#685F56] leading-relaxed">
                  {t("contactSubtext")}
                </p>

                {/* Direct Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#544D45]">
                    <div className="p-2 rounded-lg bg-[#F5EFE6] border border-[#E5DDD1] text-[#B85D43]">
                      <Globe className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">{t("locationText")}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Button in Original Location with Vibrant Green (#25D366) on exact same horizontal line */}
              <div className="mt-8 pt-6 border-t border-[#EAE2D5]">
                <p className="text-xs font-bold text-[#8C7662] mb-3">
                  {t("whatsappCaption")}
                </p>
                <a
                  href={agencyConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-extrabold shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="h-4.5 w-4.5 fill-current" />
                  <span>{t("whatsappBtn")}</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Request Form Column (Submit Button on exact same bottom horizontal line) */}
            <div
              className={cn(
                "lg:col-span-7 bg-[#F7F2EA] border border-[#EBE3D7] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full",
                lang === "ar" ? "text-right" : "text-left"
              )}
            >
              {submitted ? (
                <div className="text-center py-10 my-auto">
                  <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2926] mb-2">{t("formSuccess")}</h3>
                  <p className="text-sm text-[#685F56] max-w-sm mx-auto">
                    {t("formSuccessSub")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Field 1: Name */}
                    <div>
                      <label
                        className={cn(
                          "block text-xs font-bold text-[#544D45] mb-1.5",
                          lang === "ar" ? "text-right" : "text-left"
                        )}
                      >
                        {t("formName")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={lang === "ar" ? "مثال: محمود علي" : "e.g. John Doe"}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border text-[#2D2926] focus:outline-none transition-all",
                          errors.name
                            ? "border-red-400 focus:ring-2 focus:ring-red-400/40"
                            : "border-[#E5DDD1] focus:ring-2 focus:ring-[#B85D43]/40"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 font-semibold">{t(errors.name)}</p>
                      )}
                    </div>

                    {/* Field 2: Phone / WhatsApp */}
                    <div>
                      <label
                        className={cn(
                          "block text-xs font-bold text-[#544D45] mb-1.5",
                          lang === "ar" ? "text-right" : "text-left"
                        )}
                      >
                        {t("formPhone")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={lang === "ar" ? "مثال: 01000000000" : "e.g. +201000000000"}
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border text-[#2D2926] focus:outline-none transition-all",
                          errors.phone
                            ? "border-red-400 focus:ring-2 focus:ring-red-400/40"
                            : "border-[#E5DDD1] focus:ring-2 focus:ring-[#B85D43]/40"
                        )}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 font-semibold">{t(errors.phone)}</p>
                      )}
                    </div>

                    {/* Field 3: Service */}
                    <div>
                      <label
                        className={cn(
                          "block text-xs font-bold text-[#544D45] mb-1.5",
                          lang === "ar" ? "text-right" : "text-left"
                        )}
                      >
                        {t("formService")} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border text-[#2D2926] focus:outline-none transition-all cursor-pointer",
                          errors.service
                            ? "border-red-400 focus:ring-2 focus:ring-red-400/40"
                            : "border-[#E5DDD1] focus:ring-2 focus:ring-[#B85D43]/40"
                        )}
                      >
                        <option value="">{t("servicePlaceholder")}</option>
                        <option value="تطوير موقع إلكتروني">{t("serviceOptWeb")}</option>
                        <option value="إعلانات ممولة">{t("serviceOptAds")}</option>
                        <option value="موقع إلكتروني + إعلانات ممولة">{t("serviceOptBoth")}</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-600 font-semibold">{t(errors.service)}</p>
                      )}
                    </div>

                    {/* Field 4: Details */}
                    <div>
                      <label
                        className={cn(
                          "block text-xs font-bold text-[#544D45] mb-1.5",
                          lang === "ar" ? "text-right" : "text-left"
                        )}
                      >
                        {t("formDetails")} <span className="text-red-500">*</span>
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
                          "w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border text-[#2D2926] focus:outline-none transition-all",
                          errors.details
                            ? "border-red-400 focus:ring-2 focus:ring-red-400/40"
                            : "border-[#E5DDD1] focus:ring-2 focus:ring-[#B85D43]/40"
                        )}
                      />
                      {errors.details && (
                        <p className="mt-1 text-xs text-red-600 font-semibold">{t(errors.details)}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Request Button (Terracotta) on exact same horizontal bottom line */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-terracotta inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold shadow-xs cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>{t("formSubmit")}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
