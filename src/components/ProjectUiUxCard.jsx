import React from "react";
import { motion } from "framer-motion";

const ProjectUiUxCard = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      className="flex max-w-125 flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Thumbnail */}
      <div className="group relative overflow-hidden">
        <img src={project.img} className="block w-full" alt={project.title} />

        {/* CTA Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-black/50 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.demo}
            className="flex h-10.5 w-full items-center justify-center rounded-btn border border-accent bg-[#f6590533] px-2 text-center font-semibold text-accent no-underline transition-colors duration-200 hover:bg-cta-link"
          >
            Case Study →
          </a>
        </div>
      </div>

      {/* Project card body */}
      <div className="flex flex-col gap-2.5 px-3 pb-3 pt-2">
        {/* Project Date */}
        <span className="text-sm font-medium text-text-secondary">
          {project.date}
        </span>

        {/* Card header */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold leading-normal">
            {project.title}
          </h2>
          <p className="text-sm font-medium leading-[1.6] text-text-secondary">
            {project.desc}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-[20px] bg-tag px-3 py-2 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectUiUxCard;
