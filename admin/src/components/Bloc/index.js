import styled from 'styled-components';

const Bloc = styled.div`
  background: ${props => props.theme.stnk.color.info};
  border-radius: ${props => props.theme.stnk.radius.medium};
  box-shadow: 0 2px 4px ${props => props.theme.stnk.color.border};
`;

export default Bloc;
