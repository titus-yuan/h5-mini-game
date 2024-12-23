import Header from "./components/Header";
import GameRules from "./components/GameRules";
import LanguageSelector from "./components/LanguageSelector";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto py-8">
        <div className="flex justify-end px-4 mb-8">
          <LanguageSelector />
        </div>
        <div className="px-4">
          <div className="w-full max-w-[800px] mx-auto aspect-[4/3] relative">
            <iframe
              src="https://play2048.co"
              className="w-full h-full rounded-lg shadow-lg border"
              style={{ background: "white" }}
            />
          </div>
        </div>
        <GameRules />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}