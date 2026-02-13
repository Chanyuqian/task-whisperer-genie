import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Target, Microscope, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const DrugDiscovery = () => {
    return (
        <section className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                        AI Drug Discovery
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                        Accelerate Drug Development
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Leverage machine learning to identify, optimize, and prioritize potential drug candidates
                        from millions of compounds in record time.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Database className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Compound Library</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Access 10M+ pre-screened molecules with bioactivity data
                            </p>
                            <Link to="/compound-library">
                                <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                                    Explore →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Target ID</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                AI-driven target identification and validation pipelines
                            </p>
                            <Link to="/compound-library">
                                <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                                    Analyze →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Microscope className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Molecular Docking</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Simulate protein-ligand interactions with ML precision
                            </p>
                            <Link to="/molecular-docking">
                                <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                                    Simulate →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Lead Optimization</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Optimize ADMET properties and synthesizability scores
                            </p>
                            <Link to="/lead-optimization">
                                <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                                    Optimize →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/compound-library">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                            Start Discovery Pipeline
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DrugDiscovery;
