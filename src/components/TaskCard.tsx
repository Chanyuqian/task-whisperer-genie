import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface TaskCardProps {
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    dueDate: string;
    completed: boolean;
    onToggle: () => void;
}

const TaskCard = ({ title, description, priority, dueDate, completed, onToggle }: TaskCardProps) => {
    const priorityColors = {
        high: "bg-primary text-primary-foreground",
        medium: "bg-secondary text-secondary-foreground",
        low: "bg-accent text-accent-foreground",
    };

    return (
        <Card className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-4">
                <div className="flex items-start gap-3">
                    <Checkbox
                        checked={completed}
                        onCheckedChange={onToggle}
                        className="mt-1"
                    />
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-semibold text-lg ${completed ? "line-through text-muted-foreground" : ""}`}>
                                {title}
                            </h3>
                            <Badge className={priorityColors[priority]}>
                                {priority}
                            </Badge>
                        </div>
                        <p className={`text-sm mb-2 ${completed ? "line-through text-muted-foreground" : "text-foreground/80"}`}>
                            {description}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{dueDate}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
