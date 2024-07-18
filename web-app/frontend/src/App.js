import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <nav className="bg-gray-400 text-white p-4 w-64">
        <h2 className="text-xl font-bold mb-4">Меню</h2>
        <ul className="space-y-2">
          <li>
            <p href="#" className="hover:bg-gray-700 px-4 py-2 rounded block">
              Главная
            </p>
          </li>
          <li>
            <p className="hover:bg-gray-700 px-4 py-2 rounded block">О нас</p>
          </li>
          <li>
            <p href="#" className="hover:bg-gray-700 px-4 py-2 rounded block">
              Услуги
            </p>
          </li>
          <li>
            <p href="#" className="hover:bg-gray-700 px-4 py-2 rounded block">
              Контакты
            </p>
          </li>
        </ul>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded block w-full">
            Связаться
          </button>
        </div>
      </nav>
      <main className="flex-1 p-8">{/* Основное содержимое */}</main>
    </div>
  );
}

export default App;
