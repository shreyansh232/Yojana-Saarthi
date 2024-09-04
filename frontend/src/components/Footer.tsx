import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#252422] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#EB5E28]">
              About Yojana Saarthi
            </h3>
            <p className="mb-4">
              Yojana Saarthi uses AI to help identify and meet the financial
              needs of communities across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white transition-colors hover:text-[#EB5E28]"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white transition-colors hover:text-[#EB5E28]"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white transition-colors hover:text-[#EB5E28]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white transition-colors hover:text-[#EB5E28]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#EB5E28]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-[#EB5E28]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#EB5E28]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#EB5E28]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#EB5E28]">
                  Find a Post Office
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#EB5E28]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#EB5E28]">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2 text-[#EB5E28]" />
                <span className="">
                  Department of Posts, Ministry of Communications, Govt. of
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-[#EB5E28]" />
                <a
                  href="tel:+911800111363"
                  className="transition-colors hover:text-[#EB5E28]"
                >
                  1800-111-363
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-[#EB5E28]" />
                <a
                  href="mailto:info@indiapost.gov.in"
                  className="hover:[#EB5E28] transition-colors"
                >
                  info@indiapost.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#EB5E28] pt-8 text-center">
          <p className="text-[#EB5E28]">
            &copy; 2024 Yojana Saarthi. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a
              href="#"
              className="text-sm transition-colors hover:text-[#EB5E28]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:text-[#EB5E28]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:text-[#EB5E28]"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
