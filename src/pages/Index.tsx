import Header from "@/components/Header";
import ProteinPrediction from "@/components/ProteinPrediction";
import DrugDiscovery from "@/components/DrugDiscovery";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Molecular structure CSS animation */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
            <div className="relative w-full h-full animate-pulse">
              {/* Central atom */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-accent blur-sm"></div>
              {/* Orbiting atoms */}
              <div className="absolute top-0 left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-accent/50 blur-sm animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute bottom-0 left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-primary/50 blur-sm animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute left-0 top-1/2 w-14 h-14 -translate-y-1/2 rounded-full bg-secondary/50 blur-sm animate-spin" style={{ animationDuration: '18s' }}></div>
              <div className="absolute right-0 top-1/2 w-12 h-12 -translate-y-1/2 rounded-full bg-accent/50 blur-sm animate-spin" style={{ animationDuration: '22s' }}></div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                AI Drug
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                Discovery
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              NightinGene's AI algorithms analyze vast amounts of biological and genetic data to
              identify and prioritize potential drug targets.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <ProteinPrediction />
      <DrugDiscovery />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2026 NightinGene. Advancing biotechnology through artificial intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
