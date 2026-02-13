import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Linkedin, Users, Target, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
    const teamMembers = [
        {
            name: "Dr. Sarah Chen",
            role: "Chief Scientific Officer",
            expertise: "Computational Biology & AI",
            quote: "We're not just predicting structures—we're unlocking the future of medicine."
        },
        {
            name: "Dr. Marcus Williams",
            role: "Head of Drug Discovery",
            expertise: "Medicinal Chemistry",
            quote: "Every molecule we optimize brings us closer to saving lives."
        },
        {
            name: "Dr. Priya Patel",
            role: "AI Research Lead",
            expertise: "Deep Learning & Protein Folding",
            quote: "AI doesn't replace human insight—it amplifies it exponentially."
        },
        {
            name: "James Anderson",
            role: "Platform Engineering Lead",
            expertise: "Scalable Bioinformatics",
            quote: "Building tools that empower researchers to push boundaries."
        }
    ];

    const values = [
        {
            icon: Target,
            title: "Precision",
            description: "State-of-the-art AI models delivering 95%+ accuracy in protein structure prediction"
        },
        {
            icon: Zap,
            title: "Speed",
            description: "Accelerating drug discovery from years to months with cutting-edge algorithms"
        },
        {
            icon: Heart,
            title: "Impact",
            description: "Dedicated to advancing treatments for diseases that affect millions worldwide"
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

                {/* Hero Section with Motto */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="text-center mb-8">
                        <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-lg px-4 py-2">
                            Get in Touch
                        </Badge>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Illuminating Biology
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                                Through AI
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Where cutting-edge artificial intelligence meets molecular biology to transform drug discovery
                            and accelerate the path from insight to impact.
                        </p>
                    </div>

                    {/* Company Vision - Placeholder for Company Image */}
                    <Card className="border-primary/30 overflow-hidden">
                        <div className="relative h-64 bg-gradient-to-br from-background via-primary/10 to-accent/10">
                            {/* Animated molecular background */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full opacity-20">
                                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl animate-pulse"></div>
                                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-accent to-primary blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                                    <div className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                                </div>
                            </div>
                            <div className="relative z-10 h-full flex items-center justify-center">
                                <div className="text-center px-6">
                                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                    <p className="text-lg max-w-2xl mx-auto">
                                        Democratizing access to world-class AI-powered drug discovery tools,
                                        empowering researchers to make breakthrough discoveries faster than ever before.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Company Values */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            What Drives Us
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <Card key={idx} className="border-border hover:border-primary/50 transition-all duration-300">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                                Meet the Innovators
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A diverse team of world-class scientists, engineers, and visionaries united by a common goal:
                            revolutionizing drug discovery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {teamMembers.map((member, idx) => (
                            <Card key={idx} className="border-border hover:border-accent/50 transition-all duration-300 group">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        {/* Team member photo placeholder */}
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Users className="w-10 h-10 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                            <p className="text-primary text-sm font-semibold mb-1">{member.role}</p>
                                            <p className="text-xs text-muted-foreground mb-3">{member.expertise}</p>
                                            <div className="border-l-2 border-accent/50 pl-3 italic text-sm text-muted-foreground">
                                                "{member.quote}"
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="max-w-3xl mx-auto">
                    <Card className="border-primary/50 bg-gradient-to-br from-card to-primary/5">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
                            <p className="text-muted-foreground mb-6 text-lg">
                                Join leading biotechnology companies and research institutions leveraging NightinGene
                                to accelerate their drug discovery pipelines.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="mailto:nightingene@gmail.com">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                                        <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                        Email Us
                                    </Button>
                                </a>
                                <a href="https://linkedin.com/company/nightingene" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 group">
                                        <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                        Connect on LinkedIn
                                    </Button>
                                </a>
                            </div>
                            <p className="text-sm text-muted-foreground mt-6">
                                📍 Based in San Francisco, CA • Collaborating globally
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
