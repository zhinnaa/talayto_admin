import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "../App.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: estedad;
 background-color: #161d31;
}
`;
export const Headers = styled.div`
  display: flex;
  direction: rtl;
  margin-top: 1em;
  width: 74%;
`;
export const HeaderText = styled.div`
  color: var(--yellow);
  font-size: 1.2rem;
  margin-right: 0.9em;
  margin-top: 0.1em;
`;

export const HeaderIcon = styled(AiOutlineAppstoreAdd)`
  font-size: 2rem;
  color: var(--yellow);
`;

export const Container = styled.div`
  background: -webkit-linear-gradient(to top, #696969, #7d7d7d, yellow);
  margin-top: 2em;
`;

export const Wrapper = styled.div`
  width: 70%;
  background-color: #283046;
  /* height: ${props => (props.hasImages ? "1100px" : "600px")}; */
  height: 700px;
  margin-left: 4em;
  border-radius: 1em;

`;
export const StepperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1.5rem 1.5rem;
  margin-top: 2em;
  direction: rtl;
`;

export const ButtonStep = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #283046;
  border: none;
  padding: 1em 2em;
`;

export const StepNum = styled.span`
  width: 50px;
  background-color: ${(props) => (props.active ? "#7267e3" : "gray")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin: 0.25em 6.5em;
  border-radius: 0.35rem;

  color: #dcdcdc;
  &.active {
    background-color: #c7990a;
  }
`;

export const StepSpan = styled.span`
  display: flex;
  color: white;
  flex-direction: column;
  margin-top: 0.1em;
`;

export const StepTitle = styled.span`
  color: var(--text);
  font-size: 1rem;
  padding-right: 1em;
`;

export const StepSubtitle = styled.span`
  font-size: 0.9rem;
  margin-right: 0.5em;
`;

export const FillLeft = styled(AiOutlineLeft)`
  color: white;
  margin-top: 1.15em;
  margin-right: 2em;
`;
export const ContentHeader = styled.span`
  display: flex;
  color: white;
  flex-direction: column;
  margin-top: 1em;
  margin-left: 53em;
`;

export const ContentTitle = styled.span`
  color: var(--text);
  font-size: 1.1rem;
  margin-right: 1em;
`;

export const ContentSubtitle = styled.span`
  font-size: 0.95rem;
`;

export const Novalidate = styled.div`
  direction: rtl;
  margin-top: 1em;
  ${(props) =>
    props.$isFirst &&
    `
display:flex;
flex-direction: row;
`}
`;

export const RowForm = styled.div`
  display: flex;
margin-top: 1em;
  ${(props) =>
    props.$isA &&
    `
margin-right: 3em;
width:30%;
margin-top:1em;
flex-direction: column;

`}
  ${(props) =>
    props.$isAa &&
    `

margin-top:.2em;


`}
  ${(props) =>
    props.$isDiv &&
    `
display:flex;
justify-content: space-between;
`}
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1.5em;
  margin-bottom: 1em;

  ${(props) =>
    props.$isPic &&
    `
width:52%;

`}
  ${(props) =>
    props.$isDiv &&
    `
margin-top:5em;

`}
${(props) =>
    props.$isDivss &&`
    margin-top:5.3em;
`}
${(props) =>
    props.$isDivs &&`
    margin-top:1.3em;
    width:40%;
`}

${(props) =>
    props.$isInstallment &&
    `
display:flex;
justify-content:center;
flex-direction: row;
margin-top:1.5em;
width:53px;


`}
${(props) =>
    props.$isSecond &&
    `
display:flex;
flex-direction: row;
width:60%;
margin-right:2.5em;

]
`}

`;

export const FormLabel = styled.label`
  color: #dcdcdc;
  font-size: 1.1rem;

  ${(props) =>
    props.$isInstallment &&
    `
margin-left:.5em;
margin-top:.8rem;
`}
  ${(props) =>
    props.$isSecond &&
    `
margin-left:.5em;
width:490px;

`}
  ${(props) =>
    props.$isDivsLeft &&
    `
margin-right:25%;

`}
  ${(props) =>
    props.$isSeconds &&
    `
margin-right:3.8em;
width:490px;

`}
`;

export const FormInput = styled.input`
  margin-top: 0.5em;
  width: 90%;
  height: 2.4em;
  border: none;
  background-color: #283046;
  border: 1px solid #dcdcdc;
  border-color: #404656;
  border-radius: 0.4em;
  padding-right: 0.8em;
  color: white;

  &:focus {
    outline: none;
    border-color: #7367f0;
  }
  ${(props) =>
    props.$isInstallment &&
    `
width:20px;

`}
  ${(props) =>
    props.$isDivss &&
    `
height:4.2em;

`}
  ${(props) =>
    props.$isDivs &&
    `
width:69%;

`}
  ${(props) =>
    props.$isSecond &&
    `
width:98%;

`}
  ${(props) =>
    props.$isSeconds &&
    `
width:98%;

`}
  ${(props) =>
    props.$isDivsLeft &&
    `
width:66%;
margin-right:25%;
`}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const PreButton = styled.button`
  width: 120px;
  height: 3em;
  background-color: #7267e3;
  border: 1px solid;
  border-radius: 0.4em;
  margin-right: 4em;
  margin-top: 16%;
  display: flex;
  justify-content:space-evenly;
 
`;

export const PreIcon = styled(AiOutlineArrowRight)`
  color: white;

  margin-top: 1em;
`;
export const PreSpan = styled.div`
  color: #dcdc;
  font-size: .9rem;
  margin-top: .9em;
 
`;

export const NextButton = styled.button`
  width: 120px;
  height: 3em;
  border: 1px solid;
  border-radius: 0.4em;
  margin-left: 2em;
  margin-top: 5em;
  z-index: 200;
  margin-top: 16%;
  display: flex;
  justify-content:space-evenly;
`;

export const NextIcon = styled(AiOutlineArrowLeft)`
  color: white;
  margin-right: 0.5em;
  margin-top: 1em;
`;
export const NextSpan = styled.div`
  color: #dcdc;
  margin-top: .6em;
`;
export const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.div`
  color: white;
  margin-top: 2.5em;
  margin-right: 2em;
  font-size: 1rem;
`;
