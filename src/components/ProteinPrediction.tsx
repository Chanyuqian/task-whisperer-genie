import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload, Cpu, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ProteinPrediction = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
                        Protein Structure Prediction
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        AI-Powered Protein Modeling
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Upload protein sequences and leverage advanced AI algorithms to predict accurate 3D structures
                        with state-of-the-art accuracy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="group hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Upload className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">Sequence Upload</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Support for FASTA, PDB, and custom formats with batch processing capabilities.
                                    </p>
                                    <Link to="/sequence-upload">
                                        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                                            Upload Sequence
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <Cpu className="w-6 h-6 text-accent" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">AI Model Selection</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Choose from AlphaFold2, ESMFold, and proprietary transformer models.
                                    </p>
                                    <Link to="/ai-model-selection">
                                        <Button variant="outline" size="sm" className="border-accent/50 hover:bg-accent/10">
                                            Select Model
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    <Eye className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">3D Visualization</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Interactive molecular viewer with rotation, zooming, and annotation tools.
                                    </p>
                                    <Link to="/3d-visualization">
                                        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                                            View Models
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Download className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">Export Results</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Download predictions in PDB, mmCIF, or custom formats with confidence scores.
                                    </p>
                                    <Link to="/export-results">
                                        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                                            Download Data
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ProteinPrediction;
