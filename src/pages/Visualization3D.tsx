import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCw, ZoomIn, ZoomOut, Maximize2, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Visualization3D = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <div className="container mx-auto px-4 pt-24 pb-12">
                <Link to="/">
                    <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
                            Protein Structure Prediction
                        </Badge>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            3D Visualization
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Interactive molecular viewer with rotation, zooming, and annotation tools.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-6">
                        {/* Main Viewer */}
                        <Card className="lg:col-span-3 border-primary/30">
                            <CardContent className="p-0">
                                <div className="relative bg-gradient-to-br from-background via-card to-background/80 aspect-[16/10] rounded-lg overflow-hidden border border-border">
                                    {/* Molecular Visualization Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-64 h-64 animate-pulse">
                                            {/* Simulated protein structure */}
                                            <div className="absolute inset-0 opacity-40">
                                                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent blur-xl"></div>
                                                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary blur-xl"></div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center">
                                                    <RotateCw className="w-16 h-16 mx-auto mb-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                                                    <p className="text-lg font-semibold">Protein Structure Loaded</p>
                                                    <p className="text-sm text-muted-foreground">Use controls to interact</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Viewer Controls */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <Button size="icon" variant="secondary" className="bg-card/80 backdrop-blur">
                                            <ZoomIn className="w-4 h-4" />
                                        </Button>
                                        <Button size="icon" variant="secondary" className="bg-card/80 backdrop-blur">
                                            <ZoomOut className="w-4 h-4" />
                                        </Button>
                                        <Button size="icon" variant="secondary" className="bg-card/80 backdrop-blur">
                                            <RotateCw className="w-4 h-4" />
                                        </Button>
                                        <Button size="icon" variant="secondary" className="bg-card/80 backdrop-blur">
                                            <Maximize2 className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {/* Info Overlay */}
                                    <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur rounded-lg p-4 border border-border">
                                        <p className="text-sm font-semibold mb-1">Structure Info</p>
                                        <div className="text-xs space-y-1 text-muted-foreground">
                                            <p>Residues: 342</p>
                                            <p>Confidence: 94.2%</p>
                                            <p>Model: AlphaFold2</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sidebar Controls */}
                        <div className="space-y-4">
                            <Card className="border-border">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-3">Display Options</h3>
                                    <div className="space-y-3">
                                        <Button variant="outline" size="sm" className="w-full justify-start border-primary/50">
                                            Cartoon
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            Surface
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            Ball & Stick
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            Ribbon
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-3">Color Scheme</h3>
                                    <div className="space-y-3">
                                        <Button variant="outline" size="sm" className="w-full justify-start border-accent/50">
                                            By Chain
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            By Secondary Structure
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            By Residue Type
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            By Confidence
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Link to="/export-results">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <Download className="w-4 h-4 mr-2" />
                                    Export Model
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visualization3D;
