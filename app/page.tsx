import Navbar from "@/components/navbar"
import Hero from "@/components/Hero";
import WhySection from "@/components/Whysection";
import  CoursesSection from "@/components/coursesection"
import MediaSection from "@/components/Mediasection";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp";
import LearningJourneyGame from "@/components/Learningjourney";

export default function Home() {
  return (
    <div>
      <Navbar />
  <Hero/>
      <WhySection/> 
       <LearningJourneyGame />

      <CoursesSection/>
      <MediaSection/>
      <FAQSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}