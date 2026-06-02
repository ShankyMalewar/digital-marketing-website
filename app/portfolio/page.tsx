import Navbar from "@/components/Navbar";
import PortfolioExperience from "./PortfolioExperience";

export const metadata = {
  title: "Portfolio | AR Digitals",
  description:
    "A premium AR Digitals creative showcase featuring motion graphics, campaigns, packaging, brand identity systems, and selected case studies.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <PortfolioExperience />
    </>
  );
}
