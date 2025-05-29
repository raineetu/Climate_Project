import type { PropsWithChildren } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      {/* Header */}     
      <Header />

      {/* Main Content */}
      <main className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
