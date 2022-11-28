import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <h2>Photo Marketplace</h2>
        <p>Find the perfect photos for any project</p>
        <InputGroup className="mb-3 banner_input_field">
          <FormControl
            placeholder="Search Photos, Vectors, Video and More..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="input"
          />
          <Button type="submit" variant="primary" id="button-addon2" className="input_button">
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default Banner;
