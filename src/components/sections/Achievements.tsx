
import styled from '@emotion/styled';

const Section = styled.section`
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

const AchievementCard = styled.div`
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.8;
    opacity: 0.75;
  }
`;

const Award = styled.span`
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.8rem;
`;

export const Achievements = () => {
  return (
    <Section id="achievements">
      <Container>
        <Label>Achievements</Label>

        <Title>Recognition</Title>

        <AchievementCard>
          <Award>Special Mention Award · 2025</Award>

          <h3>TNWISE Women’s Hackathon</h3>

          <p>
            Received a Special Mention Award at the TNWISE Women’s
            Hackathon 2025 for developing an AI and IoT-based smart
            farming solution under strict time constraints.
          </p>
        </AchievementCard>
      </Container>
    </Section>
  );
};
