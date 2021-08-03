import styled from "styled-components";
const color = {
    dark: "black",
    light: "#cecece"
}


const HeaderWrapper = styled.header`
    &.dark{
        background-color: ${color.dark};
        span{
        color: ${color.light};
    }
    }
   

    &.dark{
        background-color: ${color.light};
        span{
        color: ${color.dark};
    }
    }
   
`;
export default HeaderWrapper;