import styled from "styled-components";
import { LeftMenu } from "strapi-helper-plugin";

const StyledLeftMenu = styled(LeftMenu)`
  border-radius: ${(props) => props.theme.stnk.radius.small};
  border-bottom-left-radius: 0;
  background-color: ${(props) => props.theme.stnk.color.info};
  li > a {
    &.active > p {
      color: ${(props) => props.theme.stnk.color.textInvert};
    }
    & > p {
      border-radius: ${(props) => props.theme.stnk.radius.small};
      color: ${(props) => props.theme.stnk.color.subtext};
    }
  }
  > div {
    h3 {
      color: ${(props) => props.theme.stnk.color.text};
    }
    margin-bottom: 28px;
  }
`;

export default StyledLeftMenu;
