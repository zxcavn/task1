import RootLayout from "./layout";
import AboutSection from "../../components/about";
import OurFriendsSection from "../../components/friends";
import HelpSection from "../../components/help";
import DonationSection from "../../components/donat";


export default function Home() {
  return (
    <RootLayout headerType="default">
      <AboutSection />
      <OurFriendsSection />
      <HelpSection />
      <DonationSection />
    </RootLayout>
  );
}
