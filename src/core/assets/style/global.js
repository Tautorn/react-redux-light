import { injectGlobal } from 'styled-components'

export default props => injectGlobal`
    html {
        margin: 0;
        padding: 0;
        color: ${props.primary};
    }
`
