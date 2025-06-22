import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const blinkCursor = keyframes`
  50% { border-right-color: transparent; }
`;

const typeAndDelete = keyframes`
  0%, 10% { width: 0; }
  45%, 55% { width: 10.5em; }
  90%, 100% { width: 0; }
`;

const gentleGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 rgba(100, 200, 255, 0); }
  50% { box-shadow: 0 0 12px rgba(100, 200, 255, 0.1); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  backdrop-filter: blur(3px);
`;

const TerminalLoader = styled.div`
  border: 1px solid rgba(120, 150, 180, 0.15);
  background: rgba(25, 35, 45, 0.98);
  color: #e0e8f0;
  font-family: 'IBM Plex Mono', 'Consolas', monospace;
  font-size: 0.88rem;
  padding: 1.6em;
  width: 18em;
  max-width: 90vw;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  animation: ${gentleGlow} 4s ease-in-out infinite;
  padding-top: 3.5em; /* Added space for header */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(100, 180, 240, 0.4) 50%, 
      transparent 100%);
  }
`;

const TerminalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2.5em;
  background: rgba(35, 45, 55, 0.9);
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(80, 120, 160, 0.1);
`;

const TerminalControls = styled.div`
  display: flex;
  gap: 0.65em;
`;

const Control = styled.div`
  width: 0.72em;
  height: 0.72em;
  border-radius: 50%;
  background-color: ${props => {
    if (props.close) return 'rgba(240, 90, 90, 0.3)';
    if (props.minimize) return 'rgba(220, 190, 100, 0.3)';
    if (props.maximize) return 'rgba(90, 200, 130, 0.3)';
    return 'rgba(150, 180, 210, 0.2)';
  }};
  border: 0.5px solid rgba(150, 180, 210, 0.15);
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.15);
    opacity: 0.9;
  }
`;

const TerminalTitle = styled.div`
  color: rgba(180, 200, 220, 0.7);
  font-size: 0.72em;
  font-weight: 450;
  letter-spacing: 0.4px;
`;

const TextContainer = styled.div`
  padding-top: 0.5em; /* Added padding to separate from header */
`;

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 1.5px solid rgba(120, 170, 210, 0.6);
  animation:
    ${typeAndDelete} 4s steps(50) infinite,
    ${blinkCursor} 0.9s step-end infinite alternate;
  font-weight: 380;
  letter-spacing: 0.3px;
`;

const StatusLight = styled.div`
  position: absolute;
  bottom: 1.1em;
  right: 1.1em;
  width: 0.45em;
  height: 0.45em;
  border-radius: 50%;
  background-color: rgba(100, 180, 240, 0.5);
  box-shadow: 0 0 6px rgba(100, 180, 240, 0.3);
  animation: ${blinkCursor} 1.8s step-end infinite;
`;

// Component
const IconLoader = () => {
  return (
    <Container>
      <TerminalLoader>
        <TerminalHeader>
          <TerminalTitle>terminal</TerminalTitle>
          <TerminalControls>
            <Control close />
            <Control minimize />
            <Control maximize />
          </TerminalControls>
        </TerminalHeader>
        <TextContainer>
          <Text>Initializing...</Text>
        </TextContainer>
        <StatusLight />
      </TerminalLoader>
    </Container>
  );
};

export default IconLoader;