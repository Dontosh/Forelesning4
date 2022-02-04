import { render } from "react-dom";
import { ListMovies } from "../components/App";
import { NewMovieForm } from "../components/App";
import React from "react";
import { Simulate } from "react-dom/test-utils";

describe("movies application", () => {
  it("shows movie list", () => {
    const element = document.createElement("div");
    render(<ListMovies />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Movie Database");
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("show new movie form", () => {
    const element = document.createElement("div");
    render(<NewMovieForm />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("submit new movie", () => {
    const onAddMovie = jest.fn();

    const element = document.createElement("div");
    render(<NewMovieForm onAddMovie={onAddMovie} />, element);

    Simulate.change(element.querySelector("[data-testid=title]"), {
      target: { value: "Movie 1" },
    });
    Simulate.change(element.querySelector("[data-testid=year]"), {
      target: { value: "2022" },
    });
    Simulate.submit(element.querySelector("form"));
    expect(onAddMovie).toHaveBeenCalledWith({
      title: "Movie 1",
      year: "2022",
      plot: "",
    });
  });
});
