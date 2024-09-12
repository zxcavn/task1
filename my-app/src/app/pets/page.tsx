import RootLayout from "../layout";
import HeaderSec from  "../../../components/headersec";
import Footer from "../../../components/footer";
import FriendsSec from "../../../components/friendssec";

export default function Pets() {
  return (
    <RootLayout>
      <HeaderSec />
      <FriendsSec />
      <Footer />
    </RootLayout>
  );
}
