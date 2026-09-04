import styled from '@emotion/styled';

const Section = styled.section`
  min-height: 100vh;
  padding: 120px 8% 80px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Label = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
  opacity: 0.6;
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 5vw, 4rem);
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

const Number = styled.span`
  display: block;
  font-size: 0.8rem;
  opacity: 0.5;
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
`;

const ProjectType = styled.p`
  font-size: 0.85rem;
  opacity: 0.55;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  opacity: 0.75;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tech = styled.span`
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.75rem;
`;

const projects = [
  {
    number: '01',
    title: 'AgriMinds',
    type: 'Smart Farming System using ML & IoT',
    description:
      'A full-stack smart farming platform that displays live environmental sensor data through Firebase Realtime Database and provides real-time fertilizer recommendations. Built a three-model CatBoost pipeline for fertilizer type, dosage, and application timing.',
    technologies: [
      'Python',
      'CatBoost',
      'Machine Learning',
      'IoT',
      'Firebase',
    ],
  },
  {
    number: '02',
    title: 'SyncSpace',
    type: 'AI-Powered Project Management',
    description:
      'A full-stack project management platform with workspace-based collaboration and real-time messaging. Includes an AI chatbot that answers questions about tasks, priorities, statuses, assignments, deadlines, projects, and attachments using workspace-specific data.',
    technologies: [
      'MERN',
      'TypeScript',
      'MongoDB',
      'Socket.IO',
      'Gemini API',
      'RAG',
    ],
  },
  {
    number: '03',
    title: 'Manitham',
    type: 'Booking & Management Portal',
    description:
      'A full-stack booking and management platform for an NGO. Provides a centralized dashboard for managing sponsor appointments and patient records, with CRUD operations, appointment scheduling, authentication, and role-based access control.',
    technologies: [
      'MERN',
      'MongoDB',
      'JWT',
      'Express.js',
      'Mongoose',
      'REST API',
    ],
  },
];

export const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Label>Selected Work</Label>

        <Title>Projects I've Built</Title>

        <Grid>
          {projects.map((project) => (
            <Card key={project.number}>
              <Number>{project.number}</Number>

              <ProjectTitle>
                {project.title}
              </ProjectTitle>

              <ProjectType>
                {project.type}
              </ProjectType>

              <Description>
                {project.description}
              </Description>

              <TechStack>
                {project.technologies.map((technology) => (
                  <Tech key={technology}>
                    {technology}
                  </Tech>
                ))}
              </TechStack>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
