import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  let a;
  
  if(localStorage.token){
    a = [<Nav.Link onClick={()=>{delete localStorage.token;window.location.href = "http://localhost:3000"}}>Logout</Nav.Link>]
  } else {
    
    a = [<Nav.Link href="/login">Login</Nav.Link>,
    <Nav.Link href="/register">register</Nav.Link>]
  }
  console.log(localStorage)


  return (
    <>
   <Navbar bg="dark" variant="dark" expand="lg" className="stiky-top">
   <Container>
     <Navbar.Brand  href="/">𝓂ℴ𝓃ℯ𝓎𝒷ℴℴ𝓀</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav>
         <Nav.Link href="/">Home</Nav.Link>
         {a}
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 </>
  );
}

export default Header;