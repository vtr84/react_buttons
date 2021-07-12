import styled, {css} from 'styled-components'

const Button = styled.button`
padding: 20px;
margin: 20px;
:hover {
    border-color: red;
  }

${({index}) => !index && css`
    background: green;
    color: white;
`}

${({index}) => index === 1 && css`
    background: yellow;
`}
`

export default Button;

