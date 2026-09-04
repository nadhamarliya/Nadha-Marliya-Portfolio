import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Section = styled.section`
  padding: 120px 8% 100px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
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
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  max-width: 650px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  opacity: 0.75;
`;



const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: inherit;
    font-size: 1.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Label>Contact</Label>

        <Title>Let's Connect</Title>

        <Description>
          I'm interested in software development, full-stack
          applications, and AI-powered solutions. Feel free to
          reach out.
        </Description>


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
      </Container>
    </Section>
  );
};
