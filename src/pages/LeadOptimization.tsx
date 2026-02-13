import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LeadOptimization = () => {
    const [lipophilicity, setLipophilicity] = useState([3.5]);
    const [solubility, setSolubility] = useState([75]);

    const admetProperties = [
        { name: "Absorption", score: 85, status: "good", color: "text-accent" },
        { name: "Distribution", score: 78, status: "good", color: "text-accent" },
        { name: "Metabolism", score: 62, status: "moderate", color: "text-primary" },
        { name: "Excretion", score: 71, status: "good", color: "text-accent" },
        { name: "Toxicity", score: 42, status: "needs_improvement", color: "text-destructive" },
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
                        <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                            AI Drug Discovery
                        </Badge>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                            Lead Optimization
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Optimize ADMET properties and synthesizability scores to improve drug candidate viability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <Card className="border-primary/30">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    ADMET Properties
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {admetProperties.map((prop) => (
                                        <div key={prop.name}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium">{prop.name}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-sm font-semibold ${prop.color}`}>
                                                        {prop.score}%
                                                    </span>
                                                    {prop.status === "good" ? (
                                                        <CheckCircle2 className="w-4 h-4 text-accent" />
                                                    ) : prop.status === "moderate" ? (
                                                        <AlertCircle className="w-4 h-4 text-primary" />
                                                    ) : (
                                                        <AlertCircle className="w-4 h-4 text-destructive" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${prop.status === "good" ? "bg-accent" :
                                                            prop.status === "moderate" ? "bg-primary" :
                                                                "bg-destructive"
                                                        }`}
                                                    style={{ width: `${prop.score}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Optimization Parameters</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Lipophilicity (LogP)</label>
                                        <span className="text-sm text-primary">{lipophilicity[0]}</span>
                                    </div>
                                    <Slider
                                        value={lipophilicity}
                                        onValueChange={setLipophilicity}
                                        min={0}
                                        max={5}
                                        step={0.1}
                                        className="mb-1"
                                    />
                                    <p className="text-xs text-muted-foreground">Target range: 2-4</p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Aqueous Solubility</label>
                                        <span className="text-sm text-primary">{solubility[0]}%</span>
                                    </div>
                                    <Slider
                                        value={solubility}
                                        onValueChange={setSolubility}
                                        min={0}
                                        max={100}
                                        step={1}
                                        className="mb-1"
                                    />
                                    <p className="text-xs text-muted-foreground">Higher is better</p>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <h4 className="text-sm font-semibold mb-3">Quick Stats</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-muted-foreground">Synthesizability</p>
                                            <p className="font-semibold text-accent">7.2/10</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">Drug-likeness</p>
                                            <p className="font-semibold text-accent">82%</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">BBB Permeability</p>
                                            <p className="font-semibold text-primary">Moderate</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">CYP Inhibition</p>
                                            <p className="font-semibold text-accent">Low</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-border">
                        <CardHeader>
                            <CardTitle>AI-Suggested Modifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg bg-accent/5 border border-accent/30">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                                        <div>
                                            <p className="font-medium mb-1">Replace methyl group at R1 with hydroxyl</p>
                                            <p className="text-sm text-muted-foreground">Expected improvement: +12% solubility, -8% toxicity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-lg bg-primary/5 border border-primary/30">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium mb-1">Add fluorine atom to aromatic ring</p>
                                            <p className="text-sm text-muted-foreground">Expected improvement: +9% metabolic stability</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-6 flex gap-4">
                        <Link to="/molecular-docking" className="flex-1">
                            <Button variant="outline" className="w-full border-border">
                                ← Back to Docking
                            </Button>
                        </Link>
                        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                            Apply Optimizations
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadOptimization;
