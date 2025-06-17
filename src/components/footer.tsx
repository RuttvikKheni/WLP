"use client"

import { useLanguage } from "@/hooks/useLanguage";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Platform Section */}
            {/* Customer Section */}
            {/* Provider Section */}
            {
              content.footer.services.map((service, index) => (
                <div key={index}>
                  <h3 className="font-bold text-lg mb-4 text-[#4caf50]">{service.title}</h3>
                  <ul className="space-y-2 text-gray-400">
                    {
                      service.items.map((item, index) => (
                        <li key={index}>
                          <Link href={item.href} className="hover:text-[#4caf50] transition-colors">{item.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }

            {/* Social Links Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4caf50]">{content.footer.social_links}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4caf50] to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">WorkTok</span>
                    <span className="text-sm text-gray-400 -mt-1">{content.footer.title}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 text-sm">
                  {content.footer.description}
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fas fa-facebook-f text-xl"></i>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fas fa-instagram text-xl"></i>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fas fa-twitter text-xl"></i>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fas fa-tiktok text-xl"></i>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#4caf50] transition-colors">
                    <i className="fas fa-linkedin text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us - Moved Up */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4caf50]" />
                <div>
                  <p className="font-medium text-white">{content.footer.contact.title}</p>
                  <p className="text-gray-400">{content.footer.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4caf50]" />
                <div>
                  <p className="font-medium text-white">{content.footer.contact.emailTitle}</p>
                  <p className="text-gray-400">{content.footer.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#4caf50]" />
                <div>
                  <p className="font-medium text-white">{content.footer.contact.locationTitle}</p>
                  <p className="text-gray-400">{content.footer.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Single Row at Bottom */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">{content.footer.copyright}</p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#4caf50] transition-colors">{content.footer.privacy_policy}</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#4caf50] transition-colors">{content.footer.contact_us}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}