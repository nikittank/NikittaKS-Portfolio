import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 50px;
  ${media.tablet`padding: 80px 30px;`};
  ${media.phablet`padding: 60px 20px;`};
`;

const StyledTitle = styled.h4`
  margin: 0 auto 20px;
  font-size: ${fontSizes.h2};
  font-weight: 700;
  color: ${colors.lightestSlate};
  text-align: center;
  ${media.tablet`font-size: 24px;`};
  
  &:before {
    content: '';
    display: block;
    width: 50px;
    height: 1px;
    margin: 0 auto 30px;
    background-color: ${colors.green};
    opacity: 0.7;
  }
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 1px;
    margin: 30px auto 0;
    background-color: ${colors.green};
    opacity: 0.7;
  }
`;

const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 20px auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
  color: ${colors.green};
  transition: ${theme.transition};
  
  &:hover {
    color: ${colors.white};
    transform: translateY(-2px);
  }
  
  &:after {
    bottom: 0.1em;
    background-color: ${colors.green};
  }
`;

const StyledGrid = styled.div`
  margin-top: 50px;
  width: 100%;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 25px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));`};
    ${media.tablet`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;

const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2.5rem 2rem;
  height: 100%;
  border-radius: 12px;
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  
  &:focus {
    outline: 0;
  }
`;

const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
  width: 100%;
`;

const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 50px;
    height: 50px;
    transition: ${theme.transition};
  }
  
  &:hover {
    svg {
      transform: translateY(-3px);
    }
  }
`;

const StyledProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  color: ${colors.lightSlate};
`;

const StyledIconLink = styled.a`
  position: relative;
  padding: 10px;
  transition: ${theme.transition};
  
  svg {
    width: 22px;
    height: 22px;
    color: ${colors.lightSlate};
  }
  
  &:hover {
    svg {
      color: ${colors.green};
      transform: translateY(-3px);
    }
  }
`;

const StyledProjectName = styled.h5`
  margin: 0 0 15px;
  font-size: ${fontSizes.xxl};
  font-weight: 600;
  color: ${colors.lightestSlate};
  transition: ${theme.transition};
  
  &:hover {
    color: ${colors.green};
  }
`;

const StyledProjectDescription = styled.div`
  font-size: ${fontSizes.lg};
  line-height: 1.5;
  color: ${colors.lightSlate};
  margin-bottom: 20px;
  
  a {
    ${mixins.inlineLink};
  }
`;

const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.green};
    line-height: 1.75;
    margin-right: 15px;
    
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledMoreButton = styled(Button)`
  margin: 80px auto 0;
  padding: 1.25rem 1.75rem;
  font-size: ${fontSizes.sm};
  border-radius: 50px;
  background: transparent;
  border: 1px solid ${colors.green};
  color: ${colors.green};
  transition: ${theme.transition};
  
  &:hover {
    background: ${colors.greenTint};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba(100, 255, 218, 0.3);
  }
`;

const Projects = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledContainer id="projects">
      <StyledTitle ref={revealTitle}>Other Projects</StyledTitle>
      <StyledArchiveLink to="/archive" ref={revealArchiveLink}>
        view the archive
      </StyledArchiveLink>

      <StyledGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <StyledProjectInner>
                      <header>
                        <StyledProjectHeader>
                          <StyledFolder>
                            <FormattedIcon name="Folder" />
                          </StyledFolder>
                          <StyledProjectLinks>
                            {github && (
                              <StyledIconLink
                                href={github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="GitHub Link">
                                <FormattedIcon name="GitHub" />
                              </StyledIconLink>
                            )}
                            {external && (
                              <StyledIconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <FormattedIcon name="External" />
                              </StyledIconLink>
                            )}
                          </StyledProjectLinks>
                        </StyledProjectHeader>
                        <StyledProjectName>{title}</StyledProjectName>
                        <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        {tech && (
                          <StyledTechList>
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </StyledTechList>
                        )}
                      </footer>
                    </StyledProjectInner>
                  </StyledProject>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledGrid>

      {projects.length > GRID_LIMIT && (
        <StyledMoreButton onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </StyledMoreButton>
      )}
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;