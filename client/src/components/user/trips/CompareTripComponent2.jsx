import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import { connect } from "react-redux";
import { getTrips, getTrip2 } from "../../../actions/tripActions";
import  noimage from '../../../assets/no-photo.png'

class CompareTripComponent2 extends Component {
  componentDidMount() {
    this.props.getTrips();
  }
  viewTrip = (id) => {
    this.props.getTrip2(id);
  };
  render() {
    const { trips, trip2 } = this.props.trip;

    return (
      <div>
        <MDBDropdown>
          <MDBDropdownToggle caret color="default">
            {trip2.title ? trip2.title : "Select Trip"}
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            {this.props.trip2 &&
              trips.map((t) => (
                <MDBDropdownItem>
                  <span onClick={() => this.viewTrip(t._id)}>{t.title}</span>
                </MDBDropdownItem>
              ))}
          </MDBDropdownMenu>
        </MDBDropdown>

        <div style={{ textAlign: "left" }}>
          {trip2.title && this.props.trip2 && (
            <MDBContainer>
              <img
  src={trip2.image ? trip2.image : noimage}
                className="img-fluid"
                alt=""
                style={{width:'100%'}}
              />

              <div
                style={{
                  backgroundColor: "#E5E5E5",
                  padding: "20px",
                  textAlign: "center",
                  borderBottom: "1px solid black",
                  borderTop: "1px solid black",
                }}
              >
                <h1>{trip2.title}</h1>
              </div>
              <MDBRow style={{ paddingTop: "25px" }}>
                <MDBCol size="4">
                  <h5>Description:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5 style={{wordBreak:'break-all'}}>{trip2.desc}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Destination:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip2.designation}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Departure:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>
                    {new Date(trip2.departureDate).toLocaleDateString("sq-AL", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Number Of Days:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip2.numberOfDays}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Number Of People:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip2.numberOfPeople}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Trip Type:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip2.tripType}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Price:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip2.price}</h5>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trip: state.trip,
});

export default connect(mapStateToProps, { getTrips, getTrip2 })(
  CompareTripComponent2
);
