import styled from '@emotion/styled';

const Section = styled.section`
  min-height: 100vh;
  padding: 120px 8% 80px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
`;

const Category = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Skill = styled.span`
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.8rem;
`;

const skillGroups = [
  {
    category: 'Languages',
    skills: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT',
      'WebSocket',
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      'LangChain',
      'RAG',
      'LLM',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'scikit-learn',
    ],
  },
  {
    category: 'Database & Tools',
    skills: [
      'MongoDB',
      'MySQL',
      'Git',
      'GitHub',
      'Postman',
    ],
  },
];

export const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <Label>Technical Skills</Label>

        <Title>Technologies I Work With</Title>

        <Grid>
          {skillGroups.map((group) => (
            <Card key={group.category}>
              <Category>{group.category}</Category>

              <SkillsList>
                {group.skills.map((skill) => (
                  <Skill key={skill}>
                    {skill}
                  </Skill>
                ))}
              </SkillsList>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};