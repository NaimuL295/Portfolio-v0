"use client";

import { useState, useEffect, use } from "react";
import { portfolioItems } from "@/app/data/portfolioItems";
import Link from "next/link";

export default function ProjectDetails({ params }) {
  const [project, setProject] = useState(null);
  const { id } = use(params);

  useEffect(() => {
    const foundProject = portfolioItems.find((p) => p.id == id);
    setProject(foundProject);
  }, [id]);


  

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading or Project not found...</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/#projects">
        <p className=" hover:underline mb-8 inline-block">&larr; Back to Projects</p>
      </Link>

      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-96 object-cover rounded-lg shadow-lg mb-8"
      />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 rounded text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
        <p className="text-gray-700">{project.description}</p>
      </section>

      <section className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <p>
          <strong>Live Project: </strong>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {project.link}
          </a>
        </p>
        {project.githubClient && (
          <p>
            <strong>GitHub (Client): </strong>
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {project.githubClient}
            </a>
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
        <p className="text-gray-700">{project.challenges}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
        <p className="text-gray-700">{project.improvements}</p>
      </section>
    </main>
  );
}
