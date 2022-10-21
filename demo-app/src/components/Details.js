import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            // const userbirth = logindata.map((el, k) => {
            //     return el.date === todayDate
            // });

            // if (userbirth) {
            //     setTimeout(() => {
            //         console.log("ok");
            //         handleShow();
            //     }, 3000)
            // }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1>Please Proceed with the Application Form and book your Slot For interview</h1>


{/* function HorizontalExample() {
  return ( */}
    <Form>
      <Form.Group as={Row} className="mb-3 col-lg-6" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 col-lg-6" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="name" placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 col-lg-6" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone Number
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Number" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 col-lg-6" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          College name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="name" placeholder="College Name" />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          Please select your current year at college
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="year"
              label="First Year"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="year"
              label="Second Year"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="year"
              label="Third Year"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="year"
              label="Fourth Year"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
          </Col>
        </Form.Group>
      </fieldset>
      {/* <Form.Group as={Row} className="mb-3 col-lg-6" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group> */}

      <Form.Group as={Row} className="mb-3 col-lg-6">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">SUBMIT</Button>
        </Col>
      </Form.Group>
    </Form>
  {/* ); */}
{/* } */}

{/* export default HorizontalExample; */}
                        {/* <h1>{logindata[0].name}</h1> */}
                        {/* <Button onClick={userlogout}>LogOut</Button> */}

                {/* {
                    logindata[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }    */}
                     
                    </>
            }
        </>
    )
}

export default Details





















