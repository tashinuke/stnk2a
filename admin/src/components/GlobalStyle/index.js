import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato';
    font-size: 1.4rem;
    line-height: 1.5;
    color: #292b2c;
  }
  .header-title {
    h1 {
      color: ${(props) => props.theme.stnk.color.text};
      text-transform: none;
    }
    p {
      color: ${(props) => props.theme.stnk.color.subtext};
    }
  }
  .openBtn > button {
    box-shadow: none !important;
  }
  .sc-fznAgC {
    border: none !important;
    background-color: transparent !important;
  }

  div[style="background-color: white; padding-bottom: 0px;"], .sticky-wrapper.sticky{
    background-color: ${(props) => props.theme.stnk.color.main} !important;
    color: ${(props) => props.theme.stnk.color.subtext} !important;
  }

  .wrapper, .modal-content, .row > .col-md-9 > div:nth-child(2){
    background-color: ${(props) => props.theme.stnk.color.info} !important;
    color: ${(props) => props.theme.stnk.color.subtext} !important;
    border-radius: ${(props) => props.theme.stnk.radius.big} !important;
    box-shadow: none !important;
    .frame {
      border: none !important;
    }
    .cardTitle {
      color: ${(props) => props.theme.stnk.color.text} !important;
    }
    .sc-pQQAz.kdRfcL{
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.stnk.color.border};
      border-radius: ${(props) => props.theme.stnk.radius.medium};
      color: ${(props) => props.theme.stnk.color.text} !important;
    }
    .cardFooter, section, .sc-oTmZL.hhHuUC {
      background-color: transparent !important;
      color: ${(props) => props.theme.stnk.color.subtext} !important;
    }
  }

  div.ebAblq, table.table {
    box-shadow: none;
  }


  button[type="button"], button[type="submit"] {
    border-radius: ${(props) => props.theme.stnk.radius.small};
    border: none;
    & > p {
      color: ${(props) => props.theme.stnk.color.text} !important;
    } 
    &[color="success"], &[color="primary"], &[kind="primary"] {
      color: ${(props) => props.theme.stnk.color.text} !important;
      background-color: ${(props) => props.theme.stnk.color.primary};
    }

  }
  input[type="checkbox"] {
    & + span {
      border-top-left-radius: ${(props) => props.theme.stnk.radius.small};
      border-bottom-left-radius: ${(props) => props.theme.stnk.radius.small};
      & + span {
        border-top-right-radius: ${(props) => props.theme.stnk.radius.small} !important;
        border-bottom-right-radius: ${(props) => props.theme.stnk.radius.small} !important;
      }
    }
    &:checked{ 
      & + span {
        background-color: ${(props) => props.theme.stnk.color.border};
        & + span {
          background-color: ${(props) => props.theme.stnk.color.primary};
        } 
      }
    }
    &:not(:checked){
      & + span {
        background-color: ${(props) => props.theme.stnk.color.error};
        & + span {
          background-color: ${(props) => props.theme.stnk.color.border};
        } 
      }
    }
  }

  label {
    & + {
      div {
        border: none !important;
      }
    }
    color: ${(props) => props.theme.stnk.color.text} !important;
  }


  .bzukQN div.dropdown-menu {
    background-color: ${(props) => props.theme.stnk.color.info}; 
    border-radius: ${(props) => props.theme.stnk.radius.small};
    border-top-left-radius: ${(props) => props.theme.stnk.radius.small} !important;
    border-top-right-radius: ${(props) => props.theme.stnk.radius.small} !important;
    box-shadow: none;
    border: 2px solid ${(props) => props.theme.stnk.color.border} !important;
    .dropdown-item:hover, .dropdown-item:active, .dropdown-item {
      height: 34px;
      background-color:  transparent !important;
      &:first-child{
        color:  ${(props) => props.theme.stnk.color.text} !important;
      }
      span {
        transition: all linear 0.1s;
        padding-left: 0px;
      }
    }
    .dropdown-item:hover > span{
      padding-left: 10px;
    }
  }
  .btn.btn-secondary, .bzukQN > div > button.btn.btn-secondary:hover,
  .btn.btn-secondary > span,
  .bzukQN > div > button.btn.btn-secondary:focus,
  .bzukQN > div > button.btn.btn-secondary:active {
    background-color: transparent !important;
    color: ${(props) => props.theme.stnk.color.text} !important;
    box-shadow: none !important;
  }
  button > p {
    color: ${(props) => props.theme.stnk.color.primary} !important;
  }
  .container-fluid > .row > .col-md-3 {
    border-radius: ${(props) => props.theme.stnk.radius.small};
    border-bottom-left-radius: 0;
    background-color: ${(props) => props.theme.stnk.color.info};
    ul li a {
      p {
        color: ${(props) => props.theme.stnk.color.subtext};
      }
      &.active p {
        color: ${(props) => props.theme.stnk.color.textInvert};
      }
    }
    span.count-info{
      color: ${(props) => props.theme.stnk.color.textInvert};
    }
  }
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: 'Lato';
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    line-height: 1.1;
  }

  .btn {
    font-size: 1.4rem;
    padding: 0;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  /*
   * Override
   */

  .modal {
    background: transparent;
    .modal-dialog {
      max-width: 74.5rem;
      margin: 16rem auto 3rem calc(50% - #{$left-menu-width});
      position: relative;
      z-index: 999;
    }
  }

  .modal-backdrop.show {
    opacity: 0.15;
  }


  .modal-content {
    border-radius: .2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border: none;

  }

  .modal-header {
    button {
      &.close {
        margin: 0;
        padding: 2rem;
      }
    }
  }

  .modal-body {
    .video-react {
      background: transparent;
    }
  }
  form .row {
    text-align: left;
  }

  .form-check {
    padding-left: 0;
    .form-check-label {
      padding-left: 1.25rem;
    }
  }

  .form-control:focus {
    outline: none;
    box-shadow: none;
  }

  textarea.form-control {
    height: 10.6rem;
  }

  .input-group-addon {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  /*
   * Notifications animation
   */

  .notification-enter {
    opacity: 0.01;
    top: -60px;
  }

  .notification-enter.notification-enter-active {
    opacity: 1;
    transition: all 400ms ease-in;
    top: 0;
  }

  .notification-exit {
    opacity: 1;
  }

  .notification-exit.notification-exit-active {
    opacity: 0.01;
    transition: all 400ms ease-in;
  }


  ::-webkit-scrollbar {
    width: 9px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #eee;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  /* firefox scrollbar */
  /* stylelint-disable */
  * {
    scrollbar-color: #bbb #eee;
    scrollbar-width: thin;
  }
  /* stylelint-enable */
`;

export default GlobalStyle;
