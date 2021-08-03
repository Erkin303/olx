import styled from "styled-components";
const color = {
    dark: "#F2F4F5",
    light: "#215a61"
}


const CategoryW = styled.div`
    &.dark{
        background-color: ${color.dark};
        color: ${color.light};    
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);

    }
   

    &.light{
        background-color: ${color.light};
        color: ${color.dark};
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);
        .tovarName{
            color: black;
            font-weight: bold;
        }
        .narxik{
            color: black;
            font-weight: bold;

        }

        
    }
   
`;
export default CategoryW;