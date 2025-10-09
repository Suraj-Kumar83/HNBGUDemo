
import AboutSection from "./components/About";
import AnnouncementSection from "./components/Announcement";
import EventsCalendar from "./components/EventCalender";
import Footer from "./components/Footer";
import GallerySection from "./components/Gallery";
import HeroSection from "./components/Hero";
import InfoSection from "./components/Info";
import LatestNewsSection from "./components/LatestNews";
import LinksContentSection from "./components/Links";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/Newletter";
import ResearchHighlights from "./components/ResearchSection";
import VCMessageSection from "./components/VC";
// This is the main page component that combines all the smaller components.
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        {/* <AboutSection/> */}
        <AnnouncementSection/>
        <LatestNewsSection/>
        <EventsCalendar/>
        <ResearchHighlights/>
        <LinksContentSection/>
        <InfoSection/>
        <GallerySection/>
        <VCMessageSection/>
         <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}