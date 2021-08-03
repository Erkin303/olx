import styled from "styled-components";
const color = {
    dark: "#F2F4F5",
    light: "#00343a"
}


const CategoryW = styled.div`
    &.dark{
        background-color: ${color.dark};
        color: ${color.light};
       
    }
   

    &.light{
        background-color: ${color.light};
        color: ${color.dark};
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);

        
    }
   
`;
export default CategoryW;