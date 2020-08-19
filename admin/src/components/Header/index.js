/**
 *
 * Header
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  width: 100%;
  height: ${props => props.theme.main.sizes.header.height};

  position: fixed;
  z-index: 1040;
  left: ${props => props.theme.main.sizes.leftMenu.width};
  background-color: ${props => props.theme.stnk.color.main};

  line-height: ${props => props.theme.main.sizes.header.height};
`;

Header.defaultProps = {
  theme: {
    main: {
      colors: {},
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Header.propTypes = {
  theme: PropTypes.object,
};

export default Header;
