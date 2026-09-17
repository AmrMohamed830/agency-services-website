"use client";

import * as React from "react";
import { agencyConfig } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { MessageCircle, Send, Mail, MapPin, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    service: "Website Development",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-20">
      <Container className="max-w-5xl">
        <div className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-3xl p-6 sm:p-10 shadow-lg shadow-[#46321E]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Contact Info Column */}
            <div className="lg:col-span-5">
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
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-semibold">{agencyConfig.contactEmail}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#544D45]">
                  <div className="p-2 rounded-lg bg-[#F5EFE6] border border-[#E5DDD1] text-[#B85D43]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-semibold">{agencyConfig.location}</span>
                </div>
              </div>

              {/* Instant WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-[#EAE2D5]">
                <a
                  href={agencyConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-terracotta inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold shadow-xs cursor-pointer"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  <span>{t("whatsappBtn")}</span>
                </a>
              </div>
            </div>

            {/* Quick Request Form Column */}
            <div className="lg:col-span-7 bg-[#F7F2EA] border border-[#EBE3D7] rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2926] mb-2">{t("formSuccess")}</h3>
                  <p className="text-sm text-[#685F56] max-w-sm mx-auto">
                    {t("formSuccessSub")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#544D45] mb-1.5">{t("formName")}</label>
                    <input
                      type="text"
                      required
                      placeholder="Smart Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border border-[#E5DDD1] text-[#2D2926] focus:outline-none focus:ring-2 focus:ring-[#B85D43]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#544D45] mb-1.5">{t("formPhone")}</label>
                    <input
                      type="tel"
                      required
                      placeholder="+20 100 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border border-[#E5DDD1] text-[#2D2926] focus:outline-none focus:ring-2 focus:ring-[#B85D43]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#544D45] mb-1.5">{t("formService")}</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border border-[#E5DDD1] text-[#2D2926] focus:outline-none focus:ring-2 focus:ring-[#B85D43]/40 cursor-pointer"
                    >
                      <option value="Website Development">Website Development (Next.js)</option>
                      <option value="Paid Advertising">Paid Advertising (Media Buying)</option>
                      <option value="Both Services">Both Services (Website + Paid Ads)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#544D45] mb-1.5">{t("formDetails")}</label>
                    <textarea
                      rows={3}
                      placeholder="..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-[#FDFBF7] border border-[#E5DDD1] text-[#2D2926] focus:outline-none focus:ring-2 focus:ring-[#B85D43]/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-terracotta inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold shadow-xs cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t("formSubmit")}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
