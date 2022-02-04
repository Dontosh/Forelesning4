import React, { useState } from "react";

export function ListMovies() {
  return (
    <div>
      <h1>Movie Database</h1>
      <ul>
        <li>
          <h1>Movie 1</h1>
        </li>
        <li>
          <h1>Movie 2</h1>
        </li>
      </ul>
    </div>
  );
}

export function NewMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [plot] = useState("");

  function handleSubmit() {
    onAddMovie({ title, year, plot });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new movie</h1>
      <div>
        Title:{" "}
        <input
          data-testid="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        Year:{" "}
        <input
          data-testid="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        Plot: <textarea data-testid="plot" />
      </div>
    </form>
  );
}