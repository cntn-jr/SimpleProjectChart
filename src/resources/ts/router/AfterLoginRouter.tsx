import { GanttChart } from "../components/pages/GanttChart";
import { Setting } from "../components/pages/Setting";

export const AfterLoginRouter = [
    {
        path: "/ganttchart",
        name: "Gantt Chart",
        children: <GanttChart />,
        icon: <></>,
    },
    {
        path: "/setting",
        name: "Setting",
        children: <Setting />,
        icon: <></>,
    },
];
