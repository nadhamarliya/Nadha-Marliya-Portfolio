import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const Section = styled.section`
  min-height: 100vh;

  display: flex;
  align-items: center;

  padding: 140px 24px 80px;

  position: relative;
  overflow: hidden;

  &::before {
    content: '';

    position: absolute;

    width: 500px;
    height: 500px;

    top: 5%;
    right: 5%;

    background: ${theme.colors.accent};

    filter: blur(180px);
    opacity: 0.12;

    pointer-events: none;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: ${theme.maxWidth};
  margin: 0 auto;

  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 850px;
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  margin-bottom: 1.5rem;

  color: ${theme.colors.accentLight};

  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: '';

    width: 32px;
    height: 1px;

    background: ${theme.colors.accent};
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;

  font-size: clamp(3rem, 8vw, 6.5rem);

  line-height: 0.95;
  letter-spacing: -0.055em;
  font-weight: 800;
`;

const GradientText = styled.span`
  display: block;

  background: linear-gradient(
    90deg,
    ${theme.colors.accentLight},
    #e879f9
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h2`
  margin-bottom: 1.5rem;

  color: ${theme.colors.text};

  font-size: clamp(1.25rem, 3vw, 1.8rem);
  font-weight: 500;
`;

const Description = styled.p`
  max-width: 700px;

  margin-bottom: 2.5rem;

  font-size: 1.05rem;
  line-height: 1.8;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.85rem 1.3rem;

  background: ${theme.colors.accent};
  color: white;

  border-radius: 10px;

  font-size: 0.9rem;
  font-weight: 600;

  transition: ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.accentLight};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.25);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.85rem 1.3rem;

  color: ${theme.colors.text};

  border: 1px solid ${theme.colors.border};
  border-radius: 10px;

  font-size: 0.9rem;
  font-weight: 600;

  transition: ${theme.transitions.default};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    display: flex;

    color: ${theme.colors.textMuted};

    font-size: 1.2rem;

    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.text};
      transform: translateY(-2px);
    }
  }
`;

export const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <HeroContent>
          <Eyebrow>
            Software Developer
          </Eyebrow>

          <Title>
            Nadha
            <GradientText>
              Marliya S
            </GradientText>
          </Title>

          <Subtitle>
            Full Stack Developer & AI/ML Enthusiast
          </Subtitle>

          <Description>
            I build full-stack applications and AI-powered
            systems with a focus on practical solutions,
            real-time experiences, and intelligent software.
          </Description>

          <Actions>
            <PrimaryButton href="#projects">
              View My Work
            </PrimaryButton>

            <SecondaryButton href="#contact">
              Contact Me
            </SecondaryButton>
          </Actions>

          <Socials>
            <a
              href="https://github.com/nadhamarliya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/nadha-marliya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:nadhamarli@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </Socials>
        </HeroContent>
      </Container>
    </Section>
  );
};