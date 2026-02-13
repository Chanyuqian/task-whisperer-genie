import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Upload as UploadIcon, FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SequenceUpload = () => {
    const [sequence, setSequence] = useState("");
    const [uploaded, setUploaded] = useState(false);

    const handleUpload = () => {
        if (sequence.trim()) {
            setUploaded(true);
            setTimeout(() => setUploaded(false), 3000);
        }
    };

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
                            Sequence Upload
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Upload your protein sequences in FASTA, PDB, or custom formats. Supports batch processing for multiple sequences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-primary/30">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-primary" />
                                    Paste Sequence
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    placeholder="Paste your protein sequence here (FASTA format)...&#10;&#10;Example:&#10;>sp|P12345|PROTEIN_HUMAN&#10;MKTIIALSYIFCLVFA..."
                                    className="min-h-[300px] font-mono text-sm bg-card border-border focus:border-primary"
                                    value={sequence}
                                    onChange={(e) => setSequence(e.target.value)}
                                />
                                <Button
                                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                                    onClick={handleUpload}
                                >
                                    {uploaded ? (
                                        <>
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Uploaded Successfully!
                                        </>
                                    ) : (
                                        <>
                                            <UploadIcon className="w-4 h-4 mr-2" />
                                            Upload Sequence
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/30">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <UploadIcon className="w-5 h-5 text-accent" />
                                    Upload File
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                                    <UploadIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                                    <p className="text-lg font-semibold mb-2">Drop files here</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        or click to browse
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Supported formats: FASTA (.fasta, .fa), PDB (.pdb), mmCIF (.cif)
                                    </p>
                                </div>
                                <div className="mt-6 space-y-2">
                                    <h4 className="font-semibold text-sm">Batch Processing:</h4>
                                    <p className="text-xs text-muted-foreground">
                                        Upload multiple sequences at once for high-throughput analysis
                                    </p>
                                    <Button variant="outline" className="w-full border-accent/50 hover:bg-accent/10">
                                        Select Multiple Files
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="mt-6 bg-card/50 border-border">
                        <CardHeader>
                            <CardTitle className="text-lg">Next Steps</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/ai-model-selection" className="flex-1">
                                    <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                                        Select AI Model →
                                    </Button>
                                </Link>
                                <Link to="/3d-visualization" className="flex-1">
                                    <Button variant="outline" className="w-full border-accent/50 hover:bg-accent/10">
                                        View 3D Models →
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SequenceUpload;
