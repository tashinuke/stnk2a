import styled from 'styled-components';

const LeftMenuListLink = styled.div`
  max-height: 180px;
  margin-bottom: 19px;
  margin-right: ${props => props.theme.stnk.height.medium};
  margin-left: ${props => props.theme.stnk.height.medium};
  overflow: auto;
`;

export default LeftMenuListLink;
