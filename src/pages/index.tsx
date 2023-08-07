import MainBody from "../../components/feature/MainBody";
import SummaryDetails from "../../components/feature/SummaryDetails";
import Navbar from "../../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBody />
      <SummaryDetails />
      <div className="line_break"></div>
    </>
  );
}
