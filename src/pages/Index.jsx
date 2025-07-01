import { useState } from "react";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-md bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Next.js To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
        {tasks.map((t, i) => (
          <TaskItem key={i} task={t} onRemove={() => removeTask(i)} />
        ))}
      </ul>
    </div>
  );
}
import { useState } from "react";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-md bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Next.js To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
        {tasks.map((t, i) => (
          <TaskItem key={i} task={t} onRemove={() => removeTask(i)} />
        ))}
      </ul>
    </div>
  );
}
import { useState } from "react";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-md bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Next.js To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
        {tasks.map((t, i) => (
          <TaskItem key={i} task={t} onRemove={() => removeTask(i)} />
        ))}
      </ul>
    </div>
  );
}
import { useState } from "react";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-md bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Next.js To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
        {tasks.map((t, i) => (
          <TaskItem key={i} task={t} onRemove={() => removeTask(i)} />
        ))}
      </ul>
    </div>
  );
}
