import type { PropsWithChildren } from "react";
import {SITE_NAME} from "../constants/constants"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-xl font-bold sm:text-2xl">{SITE_NAME}</h1>
      </header>

      {/* Main Content */}
      <main className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t mt-8 py-6 px-4 sm:px-6 lg:px-8 text-sm text-center space-y-2 supports-[backdrop-filter]:bg-background/60 ">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Built with ❤️ by the {SITE_NAME} team.</p>
        <p className="space-x-2">
          <a href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service" className="underline hover:text-primary">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
