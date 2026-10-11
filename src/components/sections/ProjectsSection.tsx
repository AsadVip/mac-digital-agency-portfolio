import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { projectsData } from '../../data/projects';
import { ArrowUpRight, Code2, Layers, Check, X, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedFeaturedId, setSelectedFeaturedId] = useState<string>(projectsData[0]?.id ?? '');
  const [specModalProject, setSpecModalProject] = useState<typeof projectsData[0] | null>(null);

  const categories = ['All', 'Real Client Builds', 'E-Commerce Platform', 'Full-Stack Web App', 'Database & Backend'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : activeCategory === 'Real Client Builds'
    ? projectsData.filter((p) => p.isClientProject)
    : projectsData.filter((p) => p.category === activeCategory);

  // If the active filter has projects, pick the selectedFeaturedId if it's in the list, otherwise pick the first item
  const featuredCandidate = filteredProjects.find((p) => p.id === selectedFeaturedId) || filteredProjects[0] || projectsData[0];
  const featuredProject = featuredCandidate;

  return (
    <section id="work" className="section section-divider" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <SectionHeading
          tag="03"
          eyebrow="SELECTED CASE STUDIES & CLIENT DEPLOYMENTS"
          title="Practical work & production systems."
          subtitle="Real client platforms, e-commerce storefronts, and full-stack systems engineered with modern standards and live deployments."
        />

        {/* Real Client Work Spotlight Banner */}
        <div
          style={{
            marginBottom: '2rem',
            padding: '1rem 1.5rem',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--line-strong)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text)' }}>
                  Verified Client Productions
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#059669',
                    fontWeight: 700,
                  }}
                >
                  LIVE IN PRODUCTION
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0, marginTop: '2px' }}>
                Explore live production websites built for real clients: <strong>BK Tajir Store</strong> (luxury e-commerce) &amp; <strong>My Trust Earn</strong> (fintech reward platform).
              </p>
            </div>
          </div>

          {/* Quick Jump Buttons for Real Client Projects */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {projectsData.filter((p) => p.isClientProject).map((clientProj) => (
              <button
                key={clientProj.id}
                onClick={() => {
                  setSelectedFeaturedId(clientProj.id);
                  if (activeCategory !== 'All' && activeCategory !== 'Real Client Builds' && activeCategory !== clientProj.category) {
                    setActiveCategory('All');
                  }
                }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid',
                  borderColor: featuredProject.id === clientProj.id ? 'var(--accent)' : 'var(--line-strong)',
                  backgroundColor: featuredProject.id === clientProj.id ? 'var(--surface-dark)' : 'var(--bg-subtle)',
                  color: featuredProject.id === clientProj.id ? '#FFFFFF' : 'var(--text)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Sparkles size={12} color="var(--accent)" />
                <span>Feature: {clientProj.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--text)' : 'var(--line-strong)',
                backgroundColor: activeCategory === cat ? 'var(--text)' : 'var(--surface)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--text)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Box (Shown when matching filter) */}
        {featuredProject && (
          <div
            style={{
              marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
            }}
            className="featured-project-container"
          >
            {/* Top Bar Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 2rem',
                backgroundColor: 'var(--surface-dark)',
                color: '#FFFFFF',
                borderBottom: '1px solid var(--line-dark)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Layers size={14} />
                  {featuredProject.isClientProject ? 'VERIFIED CLIENT PRODUCTION BUILD' : 'PRIMARY FEATURED BUILD'}
                </span>
                <span style={{ color: '#4B4E5A' }}>/</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#9CA3AF' }}>
                  {featuredProject.category}
                </span>

                {featuredProject.clientName && (
                  <>
                    <span style={{ color: '#4B4E5A' }}>/</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        color: '#34D399',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: '#10B981',
                          display: 'inline-block',
                        }}
                      />
                      CLIENT: {featuredProject.clientName}
                    </span>
                  </>
                )}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                {featuredProject.liveUrl && (
                  <span
                    style={{
                      color: '#10B981',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                    LIVE PRODUCTION
                  </span>
                )}
                <span>DEPLOYMENT // {featuredProject.year}</span>
              </div>
            </div>

            {/* Split Content Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.15fr 0.85fr',
              }}
              className="featured-split-grid"
            >
              {/* Visual Preview Frame */}
              <div
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '1px solid var(--line)',
                  position: 'relative',
                }}
                className="featured-preview-col"
              >
                <div
                  style={{
                    width: '100%',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    border: '1px solid var(--line-strong)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.07)',
                    transition: 'transform var(--transition-base)',
                  }}
                  className="preview-img-frame"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              {/* Architectural Breakdown Column */}
              <div
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      lineHeight: 1.15,
                      marginBottom: '0.5rem',
                      color: 'var(--text)',
                    }}
                  >
                    {featuredProject.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--accent-dark)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {featuredProject.headline}
                  </div>

                  <p
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {featuredProject.description}
                  </p>

                  {/* Production Metrics Strip if available */}
                  {featuredProject.metrics && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                        gap: '0.75rem',
                        marginBottom: '1.75rem',
                        padding: '0.85rem',
                        backgroundColor: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--line)',
                      }}
                    >
                      {featuredProject.metrics.map((m) => (
                        <div key={m.label}>
                          <div
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.68rem',
                              color: 'var(--text-muted)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              fontWeight: 600,
                              marginBottom: '2px',
                            }}
                          >
                            {m.label}
                          </div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Deliverables */}
                  {featuredProject.deliverables && (
                    <div style={{ marginBottom: '2rem' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--text-muted)',
                          marginBottom: '0.75rem',
                          fontWeight: 600,
                        }}
                      >
                        Architectural Outcomes
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {featuredProject.deliverables.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.55rem',
                              fontSize: '0.9rem',
                              color: 'var(--text)',
                            }}
                          >
                            <div
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent)',
                                flexShrink: 0,
                              }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tech Badges & Actions */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.76rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          backgroundColor: 'var(--bg)',
                          border: '1px solid var(--line)',
                          borderRadius: 'var(--radius-xs)',
                          color: 'var(--text)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                    {featuredProject.liveUrl ? (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent btn-md"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          fontWeight: 700,
                          backgroundColor: 'var(--accent)',
                          color: '#121316',
                          padding: '0.75rem 1.35rem',
                          borderRadius: 'var(--radius-sm)',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <span>Visit Live Site ({featuredProject.liveUrl.replace('https://', '')})</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <Button
                        href="#contact"
                        variant="accent"
                        size="md"
                        icon={<ArrowUpRight size={16} />}
                      >
                        Discuss Similar Scope
                      </Button>
                    )}

                    <button
                      onClick={() => setSpecModalProject(featuredProject)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--line-strong)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        cursor: 'pointer',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      className="spec-btn"
                    >
                      <Code2 size={16} color="var(--accent)" />
                      <span>Inspect Specs</span>
                    </button>

                    {featuredProject.liveUrl && (
                      <Button
                        href="#contact"
                        variant="outline"
                        size="md"
                        icon={<ArrowUpRight size={15} />}
                      >
                        Inquire Build
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem',
          }}
          className="supporting-projects-grid"
        >
          {filteredProjects
            .filter((p) => p.id !== featuredProject?.id || activeCategory !== 'All')
            .map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
                className="interactive-card"
              >
                {/* Visual Preview */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderBottom: '1px solid var(--line)',
                    padding: '1.25rem',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      borderRadius: 'var(--radius-xs)',
                      overflow: 'hidden',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                  </div>

                  {project.isClientProject && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.75rem',
                        right: '1.75rem',
                        padding: '0.25rem 0.65rem',
                        backgroundColor: 'rgba(14, 15, 19, 0.88)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#34D399',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
                      REAL CLIENT WORK
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div
                  style={{
                    padding: '1.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontWeight: 600,
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: '1.38rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.4rem',
                        lineHeight: 1.25,
                        color: 'var(--text)',
                      }}
                    >
                      {project.title}
                    </h4>

                    {project.clientName && (
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: '#059669',
                          fontWeight: 600,
                          marginBottom: '0.5rem',
                        }}
                      >
                        Client: {project.clientName}
                      </div>
                    )}

                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.85rem',
                      }}
                    >
                      {project.headline}
                    </div>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
                            padding: '0.2rem 0.5rem',
                            backgroundColor: 'var(--bg)',
                            border: '1px solid var(--line)',
                            borderRadius: 'var(--radius-xs)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <button
                        onClick={() => setSpecModalProject(project)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: 'var(--text)',
                          borderBottom: '1px solid var(--text)',
                          paddingBottom: '2px',
                          cursor: 'pointer',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderBottomStyle: 'solid',
                          borderBottomWidth: '1px',
                        }}
                      >
                        <span>View technical specs</span>
                        <Code2 size={13} color="var(--accent)" />
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.86rem',
                              fontWeight: 700,
                              color: '#059669',
                            }}
                          >
                            <span>Live Site</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : null}

                        <a
                          href="#contact"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            color: 'var(--accent-dark)',
                          }}
                        >
                          <span>Inquire</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Technical Architecture Specs Modal */}
        {specModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="spec-modal-title"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              backgroundColor: 'rgba(14, 15, 19, 0.75)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '680px',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--line-strong)',
                overflow: 'hidden',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.75rem',
                  backgroundColor: 'var(--surface-dark)',
                  color: '#FFFFFF',
                  borderBottom: '1px solid var(--line-dark)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Code2 size={18} color="var(--accent)" />
                  <span
                    id="spec-modal-title"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    ARCHITECTURE BREAKDOWN // {specModalProject.title}
                  </span>
                </div>
                <button
                  onClick={() => setSpecModalProject(null)}
                  style={{
                    color: '#9CA3AF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    background: 'transparent',
                    border: 'none',
                  }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '2rem', maxHeight: '75vh', overflowY: 'auto' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent)', textTransform: 'uppercase' }}>
                      {specModalProject.category} · {specModalProject.year}
                    </div>
                    {specModalProject.clientName && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: '#10B981',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <ShieldCheck size={13} />
                        Client: {specModalProject.clientName}
                      </span>
                    )}
                  </div>

                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    {specModalProject.headline}
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {specModalProject.description}
                  </p>
                </div>

                {/* Key Client Metrics if available */}
                {specModalProject.metrics && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                      gap: '0.75rem',
                      marginBottom: '1.5rem',
                      padding: '1rem',
                      backgroundColor: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    {specModalProject.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontWeight: 600,
                          }}
                        >
                          {m.label}
                        </div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text)', marginTop: '2px' }}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Pillars */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem', color: 'var(--text)' }}>
                    Engineering Outcomes &amp; Standards
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {specModalProject.deliverables?.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          padding: '0.75rem',
                          backgroundColor: 'var(--bg-subtle)',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--line)',
                          fontSize: '0.9rem',
                        }}
                      >
                        <Check size={16} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem', color: 'var(--text)' }}>
                    Technology Stack Utilized
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {specModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--surface-dark)',
                          color: '#FFFFFF',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.85rem', paddingTop: '1.25rem', borderTop: '1px solid var(--line)', flexWrap: 'wrap' }}>
                  {specModalProject.liveUrl && (
                    <a
                      href={specModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.55rem 1.15rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--accent)',
                        color: '#121316',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <Button onClick={() => setSpecModalProject(null)} variant="outline" size="sm">
                    Close Specs
                  </Button>
                  <Button href="#contact" variant="accent" size="sm" onClick={() => setSpecModalProject(null)}>
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 991px) {
          .featured-split-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-preview-col {
            border-right: none !important;
            border-bottom: 1px solid var(--line) !important;
          }
        }
        .spec-btn:hover {
          border-color: var(--text) !important;
        }
      `}</style>
    </section>
  );
};
