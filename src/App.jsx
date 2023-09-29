import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import  Button  from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";






const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <Heading as="h1">The wild Oasis</Heading>
      <Heading as="h2">The wild Oasis</Heading>
      <Button onClick={() => alert("check in")}>Check In</Button>
      <Button onClick={() => alert("check out")}>Check In</Button>
      <Heading as="h3">Form</Heading>
      <Input type="number" placeholder="Number of guests" />
      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
</>
  );
}

export default App;
