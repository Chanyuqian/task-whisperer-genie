import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MolecularDocking = () => {
    const dockingResults = [
        { id: 1, compound: "Imatinib", score: -9.2, binding: "Excellent", rmsd: "0.8 Å" },
        { id: 2, compound: "Erlotinib", score: -8.7, binding: "Very Good", rmsd: "1.2 Å" },
        { id: 3, compound: "Gefitinib", score: -8.3, binding: "Good", rmsd: "1.5 Å" },
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

                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
                            AI Drug Discovery
                        </Badge>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Molecular Docking
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Simulate protein-ligand interactions with machine learning precision to predict binding affinity.
                        </p>
                    </div>

                    <Card className="mb-6 border-primary/30">
                        <CardHeader>
                            <CardTitle>Current Simulation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold mb-1">Target Protein: BCR-ABL Kinase</p>
                                        <p className="text-sm text-muted-foreground">Screening 127 compounds from library</p>
                                    </div>
                                    <Badge className="bg-accent/20 text-accent border-accent/50">
                                        <Zap className="w-3 h-3 mr-1" />
                                        In Progress
                                    </Badge>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Simulation Progress</span>
                                        <span className="text-primary">73%</span>
                                    </div>
                                    <Progress value={73} className="h-2" />
                                </div>
                                <div className="grid grid-cols-3 gap-4 pt-2">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Completed</p>
                                        <p className="text-lg font-semibold text-primary">93/127</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Est. Time</p>
                                        <p className="text-lg font-semibold">12 min</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Top Score</p>
                                        <p className="text-lg font-semibold text-accent">-9.2</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Top Docking Results</CardTitle>
                                <Button variant="outline" size="sm" className="border-primary/50">
                                    View All Results
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {dockingResults.map((result) => (
                                    <div
                                        key={result.id}
                                        className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                                                    #{result.id}
                                                </div>
                                                <div>
                                                    <p className="font-semibold">{result.compound}</p>
                                                    <p className="text-xs text-muted-foreground">Binding Score: {result.score} kcal/mol</p>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="border-accent/50">
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                {result.binding}
                                            </Badge>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Binding Energy</p>
                                                <p className="font-medium text-primary">{result.score} kcal/mol</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">RMSD</p>
                                                <p className="font-medium">{result.rmsd}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">H-Bonds</p>
                                                <p className="font-medium">{Math.floor(Math.random() * 5) + 3}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-6 flex gap-4">
                        <Link to="/compound-library" className="flex-1">
                            <Button variant="outline" className="w-full border-border">
                                ← Back to Library
                            </Button>
                        </Link>
                        <Link to="/lead-optimization" className="flex-1">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Optimize Top Hits →
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MolecularDocking;
