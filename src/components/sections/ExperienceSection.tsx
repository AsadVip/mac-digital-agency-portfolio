import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { technicalSkills } from '../../data/skills';
import { experienceTimeline } from '../../data/experience';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'timeline'>('skills');
  const [skillCategory, setSkillCategory] = useState<string>('All');

  const categories = ['All', 'Core Web Standards', 'Server-Side & Data', 'Modern Frontend Engineering', 'Modern Backend Solutions', 'Automation & Backend'];

  const filteredSkills = skillCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter((s) => s.category.toLowerCase().includes(skillCategory.toLowerCase()) || skillCategory.includes(s.category));

  return (
    <section id="expertise" className="section section-divider" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <SectionHeading
          tag="02"
          eyebrow="CAPABILITIES & MILESTONES"
          title="Technical expertise & practical experience."
          subtitle="A transparent breakdown of technologies and development milestones based on authentic daily engineering practice since 2023."
          action={
            <div
              style={{
                display: 'inline-flex',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px',
              }}
            >
              <button
                onClick={() => setActiveTab('skills')}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: activeTab === 'skills' ? 'var(--text)' : 'transparent',
                  color: activeTab === 'skills' ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                Technology Stack
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: activeTab === 'timeline' ? 'var(--text)' : 'transparent',
                  color: activeTab === 'timeline' ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                Chronology (2023–Present)
              </button>
            </div>
          }
        />

        {activeTab === 'skills' ? (
          <div>
            {/* Quick Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.75rem',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillCategory(cat)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: skillCategory === cat ? 'var(--text)' : 'var(--line)',
                    backgroundColor: skillCategory === cat ? 'var(--text)' : 'var(--surface)',
                    color: skillCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                    fontWeight: 600,
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Editorial Capabilities Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  style={{
                    padding: '2rem',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  className="interactive-card"
                >
                  <div>
                    {/* Category & Duration Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.85rem',
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
                        {skill.category}
                      </span>

                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--bg-subtle)',
                          border: '1px solid var(--line)',
                          color: 'var(--text)',
                        }}
                      >
                        <Clock size={12} color="var(--accent)" />
                        <span>{skill.duration}</span>
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3
                      style={{
                        fontSize: '1.28rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: 'var(--text)',
                        marginBottom: '0.85rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {skill.description}
                    </p>
                  </div>

                  {/* Key Technologies Pills */}
                  <div
                    style={{
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--line)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                    }}
                  >
                    {skill.keyTech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--bg)',
                          border: '1px solid var(--line)',
                          color: 'var(--text)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <CheckCircle2 size={11} color="var(--accent)" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Timeline Chronology */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              position: 'relative',
            }}
          >
            {experienceTimeline.map((item) => (
              <div
                key={item.year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 200px) 1fr',
                  gap: '2.5rem',
                  padding: '2.25rem',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                }}
                className="interactive-card"
              >
                {/* Year & Period */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.85rem',
                      fontWeight: 800,
                      color: 'var(--text)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                    }}
                  >
                    {item.context}
                  </div>
                </div>

                {/* Role and Milestones */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.38rem',
                      fontWeight: 700,
                      marginBottom: '0.85rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.role}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {item.description}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {item.milestones.map((milestone) => (
                      <li
                        key={milestone}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.65rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <ArrowRight size={13} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .timeline-card {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
