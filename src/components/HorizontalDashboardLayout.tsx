import { Outlet } from "react-router-dom"
import HorizontalNav from "./HorizontalNav"
import Footer from "./Footer"

export default function HorizontalDashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HorizontalNav />
      
      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}