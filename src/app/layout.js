import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Omnivus",
  description: "Intern project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
