import { useState } from "react";
import TaskCard from "./TaskCard";

interface Task {
    id: number;
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    dueDate: string;
    completed: boolean;
}

const initialTasks: Task[] = [
    {
        id: 1,
        title: "Book Wedding Venue",
        description: "Visit and finalize the wedding venue. Confirm availability for our preferred date and discuss seating arrangements.",
        priority: "high",
        dueDate: "March 15, 2026",
        completed: false,
    },
    {
        id: 2,
        title: "Wedding Dress Shopping",
        description: "Schedule appointments at bridal boutiques. Bring mom and bridesmaids for opinions.",
        priority: "high",
        dueDate: "March 20, 2026",
        completed: false,
    },
    {
        id: 3,
        title: "Send Save the Dates",
        description: "Design and mail save the date cards to all guests on the preliminary list.",
        priority: "medium",
        dueDate: "April 1, 2026",
        completed: false,
    },
    {
        id: 4,
        title: "Choose Wedding Cake Flavor",
        description: "Attend cake tasting at the bakery. Decide on flavors and design for the wedding cake.",
        priority: "medium",
        dueDate: "April 10, 2026",
        completed: false,
    },
    {
        id: 5,
        title: "Book Photographer",
        description: "Review portfolios and book a wedding photographer. Discuss package details and timeline.",
        priority: "high",
        dueDate: "March 25, 2026",
        completed: false,
    },
    {
        id: 6,
        title: "Select Floral Arrangements",
        description: "Meet with florist to choose bouquet, centerpieces, and ceremony flowers.",
        priority: "low",
        dueDate: "April 15, 2026",
        completed: false,
    },
];

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const activeTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {activeTasks.length > 0 && (
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                        Active Tasks ({activeTasks.length})
                    </h2>
                    <div className="space-y-3">
                        {activeTasks.map(task => (
                            <TaskCard
                                key={task.id}
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                dueDate={task.dueDate}
                                completed={task.completed}
                                onToggle={() => toggleTask(task.id)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {completedTasks.length > 0 && (
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">
                        Completed ({completedTasks.length})
                    </h2>
                    <div className="space-y-3">
                        {completedTasks.map(task => (
                            <TaskCard
                                key={task.id}
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                dueDate={task.dueDate}
                                completed={task.completed}
                                onToggle={() => toggleTask(task.id)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
