import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Download, FileText, Database, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ExportResults = () => {
    const [selectedFormats, setSelectedFormats] = useState<string[]>(["pdb"]);

    const toggleFormat = (format: string) => {
        setSelectedFormats(prev =>
            prev.includes(format)
                ? prev.filter(f => f !== format)
                : [...prev, format]
        );
    };

    const formats = [
        { id: "pdb", name: "PDB Format", description: "Standard Protein Data Bank format", icon: Database },
        { id: "mmcif", name: "mmCIF Format", description: "Macromolecular Crystallographic Information File", icon: FileText },
        { id: "json", name: "JSON Format", description: "Structured data with confidence scores", icon: FileText },
        { id: "image", name: "PNG Image", description: "High-resolution molecular image", icon: Image },
    ];

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

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
                            Protein Structure Prediction
                        </Badge>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Export Results
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Download your predictions in various formats with confidence scores and metadata.
                        </p>
                    </div>

                    <Card className="mb-6 border-primary/30">
                        <CardHeader>
                            <CardTitle>Prediction Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Protein ID</p>
                                    <p className="font-semibold text-primary">P12345_HUMAN</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Model Used</p>
                                    <p className="font-semibold">AlphaFold2</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Confidence Score</p>
                                    <p className="font-semibold text-accent">94.2%</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Residues</p>
                                    <p className="font-semibold">342</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Processing Time</p>
                                    <p className="font-semibold">2m 14s</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                                    <p className="font-semibold">Feb 13, 2026</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mb-6 border-border">
                        <CardHeader>
                            <CardTitle>Select Export Formats</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {formats.map((format) => {
                                    const Icon = format.icon;
                                    const isSelected = selectedFormats.includes(format.id);

                                    return (
                                        <div
                                            key={format.id}
                                            className={`flex items-start gap-4 p-4 rounded-lg border transition-all cursor-pointer ${isSelected
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-border hover:border-primary/50'
                                                }`}
                                            onClick={() => toggleFormat(format.id)}
                                        >
                                            <Checkbox
                                                checked={isSelected}
                                                onCheckedChange={() => toggleFormat(format.id)}
                                                className="mt-1"
                                            />
                                            <Icon className="w-8 h-8 text-primary mt-0.5" />
                                            <div className="flex-1">
                                                <p className="font-semibold mb-1">{format.name}</p>
                                                <p className="text-sm text-muted-foreground">{format.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex gap-4">
                        <Link to="/3d-visualization" className="flex-1">
                            <Button variant="outline" className="w-full border-border">
                                ← Back to Visualization
                            </Button>
                        </Link>
                        <Button
                            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                            disabled={selectedFormats.length === 0}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download ({selectedFormats.length} format{selectedFormats.length !== 1 ? 's' : ''})
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExportResults;
