import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const NavWrapper = styled.div`
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;

  z-index: 1000;

  pointer-events: none;
`;

const Nav = styled.nav`
  pointer-events: auto;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.45rem;

  background: rgba(13, 19, 32, 0.8);
  backdrop-filter: blur(20px);

  border: 1px solid ${theme.colors.border};
  border-radius: 14px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);

  a {
    padding: 0.65rem 0.9rem;

    color: ${theme.colors.textMuted};

    font-size: 0.85rem;
    font-weight: 500;

    border-radius: 9px;

    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.text};
      background: rgba(255, 255, 255, 0.06);
    }
  }

  @media (max-width: 700px) {
    width: calc(100% - 24px);

    overflow-x: auto;
    justify-content: flex-start;

    a {
      white-space: nowrap;
      font-size: 0.75rem;
      padding: 0.6rem 0.7rem;
    }
  }
`;

export const FloatingNav = () => {
  return (
    <NavWrapper>
      <Nav aria-label="Main navigation">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </Nav>
    </NavWrapper>
  );
};