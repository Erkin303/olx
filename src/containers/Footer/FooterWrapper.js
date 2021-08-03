import styled from "styled-components";
const color = {
    dark: "#002F34",
    light: "#CECECE"
}


const FooterWrapper = styled.header`
    &.light{
        background-color: ${color.dark};
        .dfg{
        color: ${color.light};
    }
    }
   

    &.dark{
        background-color: ${color.light};
        .dfg{
        color: ${color.dark};
    }
    }
   
`;
export default FooterWrapper;