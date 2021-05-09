export type ThemeDefinition = {
    color: string,
    hover: string,
    text: string
  }
  
  export type Theme =
    "link"
    | "main"
    | "panel"
    | "button"
    |"icon";
  
  export const themes: { [key in Theme]: ThemeDefinition } = {
    link: {
      color: '#2FA6FD',
      hover: '#92b3ff',
      text: '#fff'
    },
    main: {
      color: '#575757',
      hover: '#416c77',
      text: '#fff'
    },
    panel: {
      color: '#6d6d6d',
      hover: '#9e9d9d',
      text: '#fff'
    },
    button: {
      color: '#cdb426',
      hover: '#e5cb2b',
      text: '#fff'
    },
    icon: {
      color: '#fff',
      hover: '#333',
      text:''
    }
  };
  