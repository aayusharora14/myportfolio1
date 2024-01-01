"use client";
import Image from 'next/image';
import { HeroSection } from '../components/herosection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import Qualification from './components/qualification/Qualification';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Residencies from './components/Residencies/Residencies';
import TechStack from './components/Skills';
import { React, useEffect, useState } from 'react';
import Loading from './components/Loading';
import Footer from './components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (

        <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
          <NavBar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
          </div>
          <TechStack />
          <div className="container mt-12 mx-auto px-4 py-4">
            <AboutSection />
            <Qualification />

            <Residencies />

            <ProjectsSection />
            <EmailSection />
          </div>
          <Footer />
        </main>

      )}
    </div>
  );
}
