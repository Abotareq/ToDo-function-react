import React, { useState } from "react";

export default function Home() {
  const [toDos, setToDos] = useState([]);
  const [inputs, setInputs] = useState("");

  const addToDo = () => {
    if (inputs.trim()) {
      setToDos([...toDos, { id: Date.now(), text: inputs, completed: false }]);
    }
    setInputs("");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-500 to-blue-700 flex justify-center items-center">
        <div className="p-16 bg-white rounded-3xl shadow-2xl shadow-black">
          <h1 className="text-gray-600 font-extrabold text-[40px]">
            ToDo Function
          </h1>
          <div className="flex justify-between gap-x-3 m-4">
            <input
              value={inputs}
              onChange={(e) => setInputs(e.target.value)}
              placeholder="Add Goal"
              type="text"
              className="border-4 border-blue-700 rounded-2xl font-mono"
            />
            <button
              className="bg-slate-500 px-10 py-2 rounded-xl border-2 border-black"
              onClick={addToDo}
            >
              Add
            </button>
          </div>
          <ul className="space-y-5">
            {toDos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center px-3 py-2 rounded-xl bg-red-300 border border-2"
              >
                <input
                  type="checkbox"
                  className="mr-2 size-5"
                  checked={todo.completed}
                  onChange={() =>
                    setToDos(
                      toDos.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    )
                  }
                />
                <span
                  className={`${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() =>
                    setToDos(toDos.filter((e) => e.id !== todo.id))
                  }
                  className="ml-2 bg-red-700 px-10 py-2 rounded-xl border-2 border-black"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
