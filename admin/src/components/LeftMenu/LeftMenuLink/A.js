import styled from 'styled-components';

const A = styled.a`
  position: relative;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: ${props => props.theme.stnk.color.subtext};
  text-decoration: none;
  display: block;
  border-radius: ${props => props.theme.stnk.radius.small};
  -webkit-font-smoothing: antialiased;
  transition: transform linear 0.05s;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    color: ${props => props.theme.stnk.color.text};
    background: ${props => props.theme.stnk.color.info};
    // border-left: 0.3rem solid ${props => props.theme.stnk.color.primary};
    text-decoration: none;
  }

  &:focus {
    color: ${props => props.theme.stnk.color.text}};
    text-decoration: none;
  }

  &:visited {
    color: ${props => props.theme.stnk.color.subtext};
  }

  &.linkActive {
    background: ${props => props.theme.stnk.color.info};
    color: ${props => props.theme.stnk.color.text};
  }
`;

export default A;
