import Navbar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}