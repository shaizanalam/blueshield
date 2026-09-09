'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building, Activity } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

export function ProjectsPreview() {
  const projects = getFeaturedProjects();

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow mb-2 block">Track Record</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Recent Installations & Projects
            </h2>
          </div>
          <Link href="/projects" className="btn btn-secondary btn-sm shrink-0">
            View All Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="card group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-border group">
                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={project.images[0].url}
                      alt={project.images[0].alt || project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-ice-blue to-surface flex items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-700">
                      <div>
                        <span className="text-xs font-semibold text-eng-blue uppercase tracking-wider block mb-1">
                          {project.industry}
                        </span>
                        <p className="text-base font-bold text-text">{project.name}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay gradient for readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.capacity && (
                    <div className="absolute bottom-3 left-3 bg-navy text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                      {project.capacity}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-eng-blue" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-eng-blue" />
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 group-hover:text-eng-blue transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-semibold text-text mb-2">Scope of Work:</p>
                    <ul className="text-xs text-text-muted space-y-1">
                      {project.scope.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-eng-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-eng-blue hover:text-deep-blue transition-colors"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

