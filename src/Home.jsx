import { useState } from 'react'

function Home() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (taskInput.trim() === '') return

    const newTask = {
      id: Date.now(),
      title: taskInput,
      category: 'Allgemein'
    }

    setTasks([...tasks, newTask])
    setTaskInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AI Task Manager
          </h1>
          <p className="text-gray-600">
            Beschreibe deine Aufgaben in natürlicher Sprache
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="z.B. Ich muss Mathe lernen für die Prüfung..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddTask}
              disabled={taskInput.trim() === ''}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              AI hinzufügen
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meine Aufgaben ({tasks.length})
          </h2>
          
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>Noch keine Aufgaben vorhanden.</p>
              <p className="text-sm mt-2">Gib oben eine Aufgabe ein und klicke "AI hinzufügen"</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{task.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
                      {task.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
                    className="ml-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home 