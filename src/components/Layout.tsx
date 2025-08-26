import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Stock Ticker */}
      <div className="marquessTicker post-excerpt mt-15" role="complementary" aria-label="Estithmar Holding Stock Information">
        <iframe 
          src="https://tools.eurolandir.com/tools/ticker/html/?companycode=qa-igrd&v=scrolling2022&lang=en-GB" 
          style={{ width: "1px", border: "none", background: "transparent", minWidth: "100%", maxHeight: "none", minHeight: "0px", height: "45px" }} 
          className="EurolandTool" 
          id="eurolandIframe" 
          height="45" 
          scrolling="no" 
          frameBorder="0" 
          width="100%"
          title="Estithmar Holding Stock Ticker"
        />
      </div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};