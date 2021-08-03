import styled from "styled-components";
const color = {
    dark: "#CECECE",
    light: "#002F34"
}


const CategoryW = styled.div`
    &.dark{
        background-color: ${color.dark};
        color: ${color.light};    
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);

      
        .sozlar{
            color: black !important;
            font-weight: bold;
        }
    }
   

    &.light{
        background-color: ${color.light};
        color: ${color.dark};
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);
        .sozlar{
            color: white !important;
            font-weight: bold;
        }
    }
`;

export default CategoryW;