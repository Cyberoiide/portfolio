'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans">
      {/* Grain effect overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 250px',
        }}
      />

      <main className="container mx-auto px-6 py-12 relative">
        {/* Header Section */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <div className="mb-10">
            <Image
              src="/images/IMG_3356.JPG"
              alt="Clément Bosle"
              width={400}
              height={200}
              className="rounded-full mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Clément Bosle</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">Information Systems Security Student</p>
            <div className="flex justify-center gap-4 text-base">
              <Link href="mailto:clement.bosle@utt.fr" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span>clement.bosle@utt.fr</span>
              </Link>
              <Link href="tel:+33628849841" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="h-5 w-5" />
                <span>+33628849841</span>
              </Link>
              <Link href="https://www.linkedin.com/in/clementbosle" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Personal Profile Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a dedicated and driven student in my final year at the University of Technology of Troyes (UTT), pursuing a double degree in Information Systems Security and Networks and Telecommunications. Naturally curious and motivated, I am passionate about digital technologies, cybersecurity, data, and finance.
          </p>
        </section>

        {/* Education Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Education</h2>
          <div className="space-y-10">
            {[
              {
                degree: "Master in Information Systems Security (M2)",
                institution: "University of Technology of Troyes (UTT)",
                year: "2024-2025",
                logo: "/images/28.png",
                details: [
                  "Specialized in Governance, Risk, and Compliance (GRC)",
                  "Focused on ISO 27001 standards, risk management, and security audits."
                ]
              },
              {
                degree: "Engineering Degree in Networks and Telecommunications",
                institution: "University of Technology of Troyes (UTT)",
                year: "2019-2025",
                logo: "/images/28.png",
                details: [
                  "Specialization in Complex Systems Security (SSC)",
                  "Minor in Business Law and Enterprise Management.",
                  "Relevant courses include Advanced Cryptography, Network Security, Data Analysis, and Cloud Computing."
                ]
              },
              {
                degree: "Exchange Semester",
                institution: "National Taiwan University (NTU)",
                year: "Spring 2024",
                logo: "/images/National_Taiwan_University_seal.svg.png",
                details: [
                  "Studied data science, statistics, and artificial intelligence.",
                  "Gained cultural and academic insights, enhancing problem-solving and adaptability skills.",
                  "Immersed in local culture, improving Mandarin proficiency and building a global network."
                ]
              }
            ].map((edu, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:border-black bg-white shadow-sm hover:shadow-md"
                style={{
                  transform: `translateY(${Math.min(20, scrollY / 20)}px)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={40}
                    height={40}
                    className="mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-600 mb-1">{edu.institution}</p>
                    <p className="text-base text-gray-500 mb-3">{edu.year}</p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ArrowRight className="absolute right-6 top-6 h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>
          <div className="space-y-10">
            {[
              {
                role: "Cybersecurity Consultant Intern",
                company: "Wannath, Paris",
                period: "January 2024 – July 2024",
                logo: "/images/wannath_logo_nobs.png",
                responsibilities: [
                  "Developed a Minimum Viable Product (MVP) for DarkFindR, a tool for dark web monitoring, enhancing the company's CTI offerings.",
                  "Conducted pre-audit analyses to ensure ISO 27001 compliance.",
                  "Managed and documented project workflows, ensuring clarity and efficiency.",
                ]
              },
              {
                role: "Student Mentor and Project Coordinator",
                company: "Service Valorisation des Projets Étudiants, UTT",
                period: "September 2023 – Present",
                logo: "/images/utt-logo.png",
                responsibilities: [
                  "Organized and restructured the Moodle PE platform to enhance the distribution of project resources.",
                  "Established a Discord channel to streamline project communications.",
                  "Assisted in coordinating events such as 'Cordées de la Réussite,' managing logistics and promotional materials."
                ]
              },
              {
                role: "Cloud Consultant",
                company: "Crunch 2023 Project with Decathlon",
                period: "2023",
                logo: "/images/Decathlon-Logo.png",
                responsibilities: [
                  "Proposed solutions to address Decathlon's challenges with their Google Cloud Platform (GCP) architecture.",
                  "Recommended a multi-shared VPC architecture to enhance scalability and security.",
                  "Analyzed the advantages and trade-offs of different cloud architectures."
                ]
              },
              {
                role: "Intern – Operator Role",
                company: "Airbus",
                period: "Summer 2022",
                logo: "/images/airbus-logo.png",
                responsibilities: [
                  "Supported the operational team by maintaining technical equipment and documentation.",
                  "Gained exposure to the aerospace industry's stringent safety protocols and compliance standards."
                ]
              }
            ].map((exp, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:border-black bg-white shadow-sm hover:shadow-md"
                style={{
                  transform: `translateY(${Math.min(20, scrollY / 20)}px)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-lg text-gray-600 mb-1">{exp.company}</p>
                    <p className="text-base text-gray-500 mb-3">{exp.period}</p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ArrowRight className="absolute right-6 top-6 h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
