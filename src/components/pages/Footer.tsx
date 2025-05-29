import { SITE_NAME } from "@/constants/constants"
const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
