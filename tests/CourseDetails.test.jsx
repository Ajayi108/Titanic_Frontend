// tests/CourseDetails.test.jsx

import React from "react"; // ✅ REQUIRED for JSX to work
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CourseDetails from "../src/pages/CourseDetails/CourseDetails.jsx";

// 🧪 Mock course data
const mockCourse = {
  title: "Deep Learning",
  profName: "Dr. Neural Net",
  description: "An in-depth course on neural networks and deep learning.",
  skills: ["Backpropagation", "CNNs", "RNNs"],
  availablePlaces: 5,
};

describe("CourseDetails Page", () => {
  it("renders correctly with course data", () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/course-details",
            state: { course: mockCourse },
          },
        ]}
      >
        <Routes>
          <Route path="/course-details" element={<CourseDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Deep Learning")).toBeInTheDocument();
    expect(screen.getByText("By Dr. Neural Net")).toBeInTheDocument();
    expect(
      screen.getByText("An in-depth course on neural networks and deep learning.")
    ).toBeInTheDocument();

    expect(screen.getByText("Backpropagation")).toBeInTheDocument();
    expect(screen.getByText("CNNs")).toBeInTheDocument();
    expect(screen.getByText("RNNs")).toBeInTheDocument();

    expect(screen.getByText("50 Euros")).toBeInTheDocument();
    expect(screen.getByText("01/08/2025")).toBeInTheDocument();
    expect(screen.getByText("5 spots left")).toBeInTheDocument();
  });

  it("shows fallback when no course is passed", () => {
    render(
      <MemoryRouter initialEntries={["/course-details"]}>
        <Routes>
          <Route path="/course-details" element={<CourseDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("No course selected.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Back to Courses/i })).toBeInTheDocument();
  });
});
