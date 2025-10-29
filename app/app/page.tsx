'use client';

import { useState } from 'react';
import TodoList from '@/components/TodoList';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

export default function Home() {
  // Hardcoded array of tasks
  const initialTodos: Todo[] = [
    { id: 1, title: 'Complete project proposal', description: 'Finish the presentation for the client meeting', completed: false },
    { id: 2, title: 'Review code changes', description: 'Check pull requests from the team', completed: false },
    { id: 3, title: 'Write documentation', description: 'Document the new API endpoints', completed: true },
    { id: 4, title: 'Attend team meeting', description: 'Discuss Q4 planning', completed: false },
    { id: 5, title: 'Fix bug in authentication', description: 'Investigate login issue reported by users', completed: true },
    { id: 6, title: 'Update dependencies', description: 'Run npm update and test compatibility', completed: false },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Todo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">List</span>
          </h1>
          <p className="text-gray-600 text-lg">Stay organized and get things done</p>
        </div>

        {/* Todo List Component */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

