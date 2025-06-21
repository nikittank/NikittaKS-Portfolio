import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const blinkCursor = keyframes`
  50% {
    border-right-color: transparent;
  }
`;

const typeAndDelete = keyframes`
  0%, 10% {
    width: 0;
  }
  45%, 55% {
    width: 10.5em;
  }
  90%, 100% {
    width: 0;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
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
  background: transparent;
`;

const TerminalLoader = styled.div`
  border: 1px solid rgba(100, 255, 218, 0.2);
  background: #121212;
  color: #64ffda;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.85rem;
  padding: 2.2em 1.5em 1.5em;
  width: 18em;
  max-width: 90vw;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #64ffda, #48aff0);
  }
`;

const TerminalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2em;
  background: #1e1e1e;
  padding: 0 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TerminalControls = styled.div`
  display: flex;
  gap: 0.6em;
`;

const Control = styled.div`
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  background-color: ${props => {
    if (props.close) return '#ff5f56';
    if (props.minimize) return '#ffbd2e';
    if (props.maximize) return '#27c93f';
    return '#777';
  }};
`;

const TerminalTitle = styled.div`
  color: #aaa;
  font-size: 0.75em;
  font-weight: 500;
`;

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #64ffda;
  animation:
    ${typeAndDelete} 4s steps(24) infinite,
    ${blinkCursor} 0.8s step-end infinite alternate;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

const StatusLight = styled.div`
  position: absolute;
  bottom: 0.8em;
  right: 1em;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #64ffda;
  box-shadow: 0 0 5px #64ffda;
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
        <Text>Loading...</Text>
        <StatusLight />
      </TerminalLoader>
    </Container>
  );
};

export default IconLoader;