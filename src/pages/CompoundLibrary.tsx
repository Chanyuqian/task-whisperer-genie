import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Beaker, TrendingUp, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const CompoundLibrary = () => {
    const compounds = [
        { id: "CPD001", name: "Imatinib", target: "BCR-ABL", activity: "95%", similarity: "High" },
        { id: "CPD002", name: "Erlotinib", target: "EGFR", activity: "89%", similarity: "High" },
        { id: "CPD003", name: "Sorafenib", target: "Multiple kinases", activity: "82%", similarity: "Medium" },
        { id: "CPD004", name: "Gefitinib", target: "EGFR", activity: "91%", similarity: "High" },
        { id: "CPD005", name: "Sunitinib", target: "VEGFR", activity: "87%", similarity: "Medium" },
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

                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
                            AI Drug Discovery
                        </Badge>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Compound Library
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Access 10M+ pre-screened molecules with bioactivity data and structural information.
                        </p>
                    </div>

                    <div className="flex gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search by compound name, target, or molecular formula..."
                                className="pl-10 bg-card border-border focus:border-primary"
                            />
                        </div>
                        <Button variant="outline" className="border-primary/50">
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                    </div>

                    <Card className="mb-6 border-primary/30">
                        <CardHeader>
                            <CardTitle>Library Statistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-4 gap-6">
                                <div>
                                    <p className="text-3xl font-bold text-primary">10.2M</p>
                                    <p className="text-sm text-muted-foreground">Total Compounds</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-accent">2,847</p>
                                    <p className="text-sm text-muted-foreground">Approved Drugs</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-primary">15,000+</p>
                                    <p className="text-sm text-muted-foreground">Drug Targets</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-accent">99.2%</p>
                                    <p className="text-sm text-muted-foreground">Quality Score</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Top Candidates</CardTitle>
                                <Badge variant="outline" className="border-primary/50">5 shown</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {compounds.map((compound) => (
                                    <div
                                        key={compound.id}
                                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Beaker className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{compound.name}</p>
                                                <p className="text-sm text-muted-foreground">ID: {compound.id}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground">Target</p>
                                                <p className="font-medium">{compound.target}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground">Activity</p>
                                                <p className="font-medium text-accent">{compound.activity}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground">Similarity</p>
                                                <Badge variant="outline" className={compound.similarity === "High" ? "border-primary/50" : "border-border"}>
                                                    {compound.similarity}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-6 flex gap-4">
                        <Link to="/molecular-docking" className="flex-1">
                            <Button variant="outline" className="w-full border-accent/50 hover:bg-accent/10">
                                Molecular Docking →
                            </Button>
                        </Link>
                        <Link to="/lead-optimization" className="flex-1">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Optimize Leads
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompoundLibrary;
