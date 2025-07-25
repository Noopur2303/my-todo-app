import React, { useState } from 'react';
import './App.css'; // (optional for extra styles)

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    setTasks([...tasks, { title, description }]);
    setTitle('');
    setDescription('');
  };

  const removeTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-purple-700 animate-pulse flex justify-center items-center gap-3">
          ⏰ My To-Do List
        </h1>
        <p className="text-gray-600 mt-2">Organize your tasks with ease</p>
      </header>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Form Section */}
        <form onSubmit={addTask} className="bg-white shadow-xl rounded-2xl p-6 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-black">Add New Task</h2>
          <label className="block font-semibold text-black mb-1">Task Title</label>
          <input
            type="text"
            className="w-full mb-4 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            // placeholder="e.g. Study DSA"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="block font-semibold text-black mb-1">Description</label>
          <textarea
            className="w-full mb-4 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            // placeholder="e.g. Solve 3 problems from Leetcode"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition duration-200"
          >
            ➕ Add Task
          </button>
        </form>

        {/* Right Task List */}
        <div className="bg-white shadow-xl rounded-2xl p-6 animate-slide-in">
          <h2 className="text-2xl font-bold text-black mb-4">Your Tasks</h2>
          <ul className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
            {tasks.length === 0 ? (
              <li className="text-gray-500 italic text-center">No tasks yet.</li>
            ) : (
              tasks.map((task, index) => (
                <li
                  key={index}
                  className="bg-purple-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-purple-800">{task.title}</h3>
                      {task.description && (
                        <p className="text-sm text-gray-700 mt-1">{task.description}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeTask(index)}
                      className="text-red-500 hover:text-red-700 text-xl font-bold ml-4"
                      title="Delete Task"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
