import { Menu, Mail, Github, Info, Upload, Cpu, Eye, Download, Database, Target, Microscope, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-primary rounded-sm"></div>
                        <span className="text-xl font-bold text-foreground">NightinGene</span>
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                        {/* Main Menu Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-primary/10"
                                >
                                    <Menu className="w-4 h-4" />
                                    <span>Tools</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-card border-border">
                                <DropdownMenuLabel className="text-primary">Protein Prediction</DropdownMenuLabel>
                                <DropdownMenuGroup>
                                    <Link to="/sequence-upload">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                                            <Upload className="mr-2 h-4 w-4" />
                                            <span>Sequence Upload</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link to="/ai-model-selection">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                                            <Cpu className="mr-2 h-4 w-4" />
                                            <span>AI Model Selection</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link to="/3d-visualization">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                                            <Eye className="mr-2 h-4 w-4" />
                                            <span>3D Visualization</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link to="/export-results">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                                            <Download className="mr-2 h-4 w-4" />
                                            <span>Export Results</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator className="bg-border" />

                                <DropdownMenuLabel className="text-accent">Drug Discovery</DropdownMenuLabel>
                                <DropdownMenuGroup>
                                    <Link to="/compound-library">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-accent/10">
                                            <Database className="mr-2 h-4 w-4" />
                                            <span>Compound Library</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link to="/molecular-docking">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-accent/10">
                                            <Microscope className="mr-2 h-4 w-4" />
                                            <span>Molecular Docking</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link to="/lead-optimization">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-accent/10">
                                            <TrendingUp className="mr-2 h-4 w-4" />
                                            <span>Lead Optimization</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Icon Buttons */}
                        <div className="flex items-center gap-2">
                            <a href="mailto:nightingene@gmail.com">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-10 h-10 rounded-sm border border-border hover:border-primary hover:bg-primary/10"
                                    title="Email: nightingene@gmail.com"
                                >
                                    <Mail className="w-4 h-4" />
                                </Button>
                            </a>
                            <a href="https://github.com/Chanyuqian/task-whisperer-genie" target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-10 h-10 rounded-sm border border-border hover:border-primary hover:bg-primary/10"
                                    title="GitHub"
                                >
                                    <Github className="w-4 h-4" />
                                </Button>
                            </a>
                            <Link to="/contact">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-10 h-10 rounded-sm border border-border hover:border-primary hover:bg-primary/10"
                                    title="About NightinGene"
                                >
                                    <Info className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
