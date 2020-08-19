/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  > div:not(.row){
    background-color: transparent;
    color: ${(props) => props.theme.stnk.color.subtext};
    border: none !important;
  }
  > .row {
    padding-left: 0;
    padding-right: 30px;
    .col-md-9 {
      padding-top: 18px;
    }
  }
`;

export default Wrapper;
