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
  margin-bottom: 2rem;
`;

const Content = styled.div`
  max-width: 800px;

  p {
    font-size: 1.1rem;
    line-height: 1.9;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }
`;

const Highlight = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
  }
`;

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <Label>About Me</Label>

        <Title>
          Building things with code & curiosity.
        </Title>

        <Content>
          <p>
            I'm Nadha Marliya S, a Bachelor of Technology student in
            Information Technology at SRM Institute of Science and
            Technology, Tiruchirappalli.
          </p>

          <p>
            I enjoy building full-stack applications using modern
            web technologies and exploring how artificial intelligence
            can be integrated into practical software systems.
          </p>

          <p>
            My experience includes developing MERN applications,
            real-time collaboration systems, AI-powered features,
            machine learning solutions, REST APIs, and database-driven
            applications.
          </p>

          <Highlight>
            <Card>
              <h3>B.Tech IT</h3>
              <p>SRM Institute of Science and Technology</p>
            </Card>

            <Card>
              <h3>CGPA 9.98</h3>
              <p>2024 – Present</p>
            </Card>

            <Card>
              <h3>Focus</h3>
              <p>Full Stack Development & AI/ML</p>
            </Card>
          </Highlight>
        </Content>
      </Container>
    </Section>
  );
};
