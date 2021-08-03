import styled from "styled-components";
const color = {
    dark: "#F2F4F5",
    light: "#215a61"
}


const CategoryW = styled.div`

    .tovarName{
            color: black;
        }

    &.dark{
        background-color: ${color.dark};
        color: ${color.light};    
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);
        .narxiPrice{
            color: yellow;
            font-weight: bold;
            text-shadow: 1px 1px gray;
        }
        .mainwords{
            color: black;
            font-weight: bold;
        }
       
    }
   

    &.light{
        background-color: ${color.light};
        color: ${color.dark};
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.733);
        .narxiPrice{
            color: yellow;
            font-weight: bold;
            text-shadow: 1px 1px gray;
        }
        .mainwords{
            color: white;
            font-weight: bold;
        }
    }
`;
export default CategoryW;