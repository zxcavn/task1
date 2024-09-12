import RootLayout from "./layout";
import Header from  "../../components/header";
import AboutSection from "../../components/about";
import OurFriendsSection from "../../components/friends";
import HelpSection from "../../components/help";
import DonationSection from "../../components/donat";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <AboutSection />
      <OurFriendsSection />
      <HelpSection />
      <DonationSection />
      <Footer />
    </RootLayout>
  );
}
