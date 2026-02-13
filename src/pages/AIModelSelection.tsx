import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Cpu, Zap, Brain, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AIModelSelection = () => {
    const [selectedModel, setSelectedModel] = useState("alphafold2");

    const models = [
        {
            id: "alphafold2",
            name: "AlphaFold2",
            icon: Brain,
            description: "State-of-the-art protein structure prediction",
            accuracy: "95%",
            speed: "Medium",
            features: ["Highest accuracy", "MSA-based", "Best for single sequences"]
        },
        {
            id: "esmfold",
            name: "ESMFold",
            icon: Zap,
            description: "Ultra-fast protein language model",
            accuracy: "88%",
            speed: "Very Fast",
            features: ["No MSA required", "60x faster", "Great for batch processing"]
        },
        {
            id: "proprietary",
            name: "NightinGene Pro",
            icon: Cpu,
            description: "Our proprietary transformer-based model",
            accuracy: "93%",
            speed: "Fast",
            features: ["Optimized for drug targets", "Custom training", "Commercial support"]
        }
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
                            Protein Structure Prediction
                        </Badge>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                            AI Model Selection
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Choose the optimal AI model for your protein prediction task based on accuracy requirements and processing time.
                        </p>
                    </div>

                    <RadioGroup value={selectedModel} onValueChange={setSelectedModel} className="space-y-4">
                        {models.map((model) => {
                            const Icon = model.icon;
                            const isSelected = selectedModel === model.id;

                            return (
                                <Card
                                    key={model.id}
                                    className={`cursor-pointer transition-all duration-300 ${isSelected
                                            ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20'
                                            : 'border-border hover:border-primary/50'
                                        }`}
                                    onClick={() => setSelectedModel(model.id)}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isSelected ? 'bg-primary/20' : 'bg-muted/50'
                                                    }`}>
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <CardTitle className="text-2xl">{model.name}</CardTitle>
                                                        <RadioGroupItem value={model.id} id={model.id} />
                                                    </div>
                                                    <CardDescription className="text-base">
                                                        {model.description}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            {isSelected && (
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">Accuracy</p>
                                                <p className="text-lg font-semibold text-primary">{model.accuracy}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Speed</p>
                                                <p className="text-lg font-semibold text-accent">{model.speed}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-2">Key Features:</p>
                                            <ul className="space-y-1">
                                                {model.features.map((feature, idx) => (
                                                    <li key={idx} className="text-sm flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </RadioGroup>

                    <div className="mt-8 flex gap-4">
                        <Link to="/sequence-upload" className="flex-1">
                            <Button variant="outline" className="w-full border-border">
                                ← Back to Upload
                            </Button>
                        </Link>
                        <Link to="/3d-visualization" className="flex-1">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Start Prediction →
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIModelSelection;
