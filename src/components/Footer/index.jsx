import React from "react";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-black bg-body-tertiary">
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn rippleColor="dark" color="link" floating size="lg" className="text-black m-1" href="#" role="button">
            <FaTwitter />
          </MDBBtn>

          <MDBBtn rippleColor="dark" color="link" floating size="lg" className="text-black m-1" href="#" role="button">
            <FaInstagram />
          </MDBBtn>

          <MDBBtn rippleColor="dark" color="link" floating size="lg" className="text-black m-1" href="#" role="button">
            <FaLinkedin />
          </MDBBtn>

          <MDBBtn rippleColor="dark" color="link" floating size="lg" className="text-black m-1" href="#" role="button">
            <FaGithub />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center text-black p-3 bg-body-tertiary">
        © 2024 Copyright:
        <a className="text-black" href="https://mdbootstrap.com/">
          MYR.com
        </a>
      </div>
    </MDBFooter>
  );
}