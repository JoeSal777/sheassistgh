import styled from 'styled-components';


// This is CSS for the cart button using 'styled-components'
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1em;
background: transparent;
border: 0.05rem solid var(--gemeraldRed);
border-color: ${props => props.Navbarcart ? "var(--mainWhite)" : "var(--gemeraldRed)"};
color: ${props => props.Navbarcart ? "var(--mainWhite)" : "var(--gemeraldRed)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: ${props => props.Navbarcart ? "var(--mainWhite)" : "var(--gemeraldRed)"};
    color: ${props => props.Navbarcart ? "var(--gemeraldBlack)" : "var(--mainWhite)"};
}
&:focus {
    outline: none;
}
`;