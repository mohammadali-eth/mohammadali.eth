'use client';

import React from 'react';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';

/**
 * ProjectDetails component for displaying individual project information.
 * Dynamically updates SEO metadata based on project data.
 * 
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {string} props.project.name - Project title
 * @param {string} props.project.desc - Project description
 * @param {string} [props.project.slug] - Project URL slug
 * @param {string[]} [props.project.skills] - Technologies used
 */
const ProjectDetails = ({ project }) => {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/40 font-mono uppercase tracking-[0.4em]">Project data not found</p>
      </div>
    );
  }

  // Generate slug from name if not provided
  const slug = project.slug || project.name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title={`${project.name} | Mohammadali Dhanga Portfolio`}
        description={project.desc}
        keywords={`${project.name} MERN Project, React App, Node.js Project`}
        url={`https://www.alidev.in/projects/${slug}`}
      />
      
      <section className="container mx-auto px-6 md:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Breadcrumb / Category */}
          <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
            <div className="w-12 h-[1px] bg-white/20"></div>
            <span>{project.profession || "Project Showcase"}</span>
          </div>

          {/* Project Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 border-b border-white/5 pb-12">
            {project.name}
          </h1>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Description */}
            <div className="lg:col-span-8">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-tight uppercase tracking-wider mb-12">
                {project.desc}
              </p>

              {/* Technologies / Skills */}
              {project.skills && (
                <div className="space-y-6">
                  <h3 className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Technologies Implemented</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-6 py-3 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/60 hover:border-white/40 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar info if needed */}
            <div className="lg:col-span-4 space-y-10">
               {/* Links could go here if available */}
               {(project.live || project.code) && (
                 <div className="space-y-4">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full p-6 border border-white bg-white text-black text-center text-xs font-black uppercase tracking-[0.2em] hover:bg-transparent hover:text-white transition-all">
                        View Live Site
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="block w-full p-6 border border-white/20 text-center text-xs font-black uppercase tracking-[0.2em] hover:border-white transition-all">
                        Source Code
                      </a>
                    )}
                 </div>
               )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetails;
