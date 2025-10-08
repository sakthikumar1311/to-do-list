"use client";

import { useState, useEffect } from "react";
import { Check, Trash2, Plus, Sun, Moon } from "lucide-react";

// TaskItem Component
const TaskItem = ({ task, completed, onRemove, onToggle }) => {
  return (
    <li className={`flex items-center justify-between p-3 mb-3 rounded-lg transition-all duration-300 ${
      completed 
        ? "bg-green-50 border-l-4 border-green-500" 
        : "bg-white border-l-4 border-blue-500"
    } shadow-sm hover:shadow-md`}>
      <div className="flex items-center gap-3 flex-1">
        <button 
          onClick={onToggle} 
          className={`p-1 rounded-full transition-all ${
            completed 
              ? "bg-green-500 text-white" 
              : "bg-gray-100 text-gray-400 hover:bg-blue-100"
          }`}
        >
          <Check size={16} />
        </button>
        <span className={`${completed ? "line-through text-gray-500" : "text-gray-700"}`}>
          {task}
        </span>
      </div>
      <button 
        onClick={onRemove} 
        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

export default function Page() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem("todos");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  
  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task.trim(), completed: false }]);
    setTask("");
  };
  
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };
  
  const completedCount = tasks.filter(t => t.completed).length;
  
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-blue-50"} transition-colors duration-300`}>
      <main className={`max-w-md mx-auto pt-20 p-6 ${
        darkMode 
          ? "bg-gray-800 shadow-xl shadow-gray-700/20" 
          : "bg-white shadow-xl shadow-blue-200/40"
        } rounded-xl transition-all duration-300`}>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-blue-700"}`}>
            To-Do List
          </h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode 
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              } transition-colors`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* Stats bar */}
        <div className={`mb-6 p-3 rounded-lg text-sm ${
          darkMode ? "bg-gray-700" : "bg-blue-50"
        }`}>
          <div className="flex justify-between">
            <span>Total tasks: {tasks.length}</span>
            <span>{completedCount} of {tasks.length} completed</span>
          </div>
          {tasks.length > 0 && (
            <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-300" 
                style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }}
              />
            </div>
          )}
        </div>
        
        {/* Input form */}
        <div className={`flex gap-2 mb-6 ${darkMode ? "text-gray-200" : ""}`}>
          <input
            type="text"
            placeholder="Add a new task"
            className={`flex-grow px-4 py-3 rounded-lg focus:outline-none transition-all ${
              darkMode 
                ? "bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500" 
                : "border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            }`}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={addTask}
            className={`px-4 rounded-lg flex items-center justify-center transition-all ${
              darkMode 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <Plus size={20} />
          </button>
        </div>
        
        {/* Task list */}
        <div className={`${
          tasks.length > 0 
            ? `rounded-lg ${darkMode ? "bg-gray-750" : "bg-gray-50"} p-4` 
            : ""
        }`}>
          {tasks.length === 0 && (
            <div className="py-8 text-center">
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                No tasks added yet.
              </p>
              <p className={`text-sm mt-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                Add a task to get started!
              </p>
            </div>
          )}
          
          <ul>
            {tasks.map((t, i) => (
              <TaskItem 
                key={i} 
                task={t.text} 
                completed={t.completed}
                onRemove={() => removeTask(i)} 
                onToggle={() => toggleTask(i)}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
m
"use client";

import { useState, useEffect } from "react";
import { Check, Trash2, Plus, Sun, Moon } from "lucide-react";

// TaskItem Component
const TaskItem = ({ task, completed, onRemove, onToggle }) => {
  return (
    <li className={`flex items-center justify-between p-3 mb-3 rounded-lg transition-all duration-300 ${
      completed 
        ? "bg-green-50 border-l-4 border-green-500" 
        : "bg-white border-l-4 border-blue-500"
    } shadow-sm hover:shadow-md`}>
      <div className="flex items-center gap-3 flex-1">
        <button 
          onClick={onToggle} 
          className={`p-1 rounded-full transition-all ${
            completed 
              ? "bg-green-500 text-white" 
              : "bg-gray-100 text-gray-400 hover:bg-blue-100"
          }`}
        >
          <Check size={16} />
        </button>
        <span className={`${completed ? "line-through text-gray-500" : "text-gray-700"}`}>
          {task}
        </span>
      </div>
      <button 
        onClick={onRemove} 
        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

export default function Page() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem("todos");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  
  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task.trim(), completed: false }]);
    setTask("");
  };
  
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };
  
  const completedCount = tasks.filter(t => t.completed).length;
  
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-blue-50"} transition-colors duration-300`}>
      <main className={`max-w-md mx-auto pt-20 p-6 ${
        darkMode 
          ? "bg-gray-800 shadow-xl shadow-gray-700/20" 
          : "bg-white shadow-xl shadow-blue-200/40"
        } rounded-xl transition-all duration-300`}>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-blue-700"}`}>
            To-Do List
          </h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode 
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              } transition-colors`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* Stats bar */}
        <div className={`mb-6 p-3 rounded-lg text-sm ${
          darkMode ? "bg-gray-700" : "bg-blue-50"
        }`}>
          <div className="flex justify-between">
            <span>Total tasks: {tasks.length}</span>
            <span>{completedCount} of {tasks.length} completed</span>
          </div>
          {tasks.length > 0 && (
            <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-300" 
                style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }}
              />
            </div>
          )}
        </div>
        
        {/* Input form */}
        <div className={`flex gap-2 mb-6 ${darkMode ? "text-gray-200" : ""}`}>
          <input
            type="text"
            placeholder="Add a new task"
            className={`flex-grow px-4 py-3 rounded-lg focus:outline-none transition-all ${
              darkMode 
                ? "bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-500" 
                : "border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            }`}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={addTask}
            className={`px-4 rounded-lg flex items-center justify-center transition-all ${
              darkMode 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <Plus size={20} />
          </button>
        </div>
        
        {/* Task list */}
        <div className={`${
          tasks.length > 0 
            ? `rounded-lg ${darkMode ? "bg-gray-750" : "bg-gray-50"} p-4` 
            : ""
        }`}>
          {tasks.length === 0 && (
            <div className="py-8 text-center">
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                No tasks added yet.
              </p>
              <p className={`text-sm mt-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                Add a task to get started!
              </p>
            </div>
          )}
          
          <ul>
            {tasks.map((t, i) => (
              <TaskItem 
                key={i} 
                task={t.text} 
                completed={t.completed}
                onRemove={() => removeTask(i)} 
                onToggle={() => toggleTask(i)}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
m
