import React, {Component} from 'react';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import { connect } from 'react-redux';
import { getTrips, getTrip } from "../../../actions/tripActions";
import  noimage from '../../../assets/no-photo.png'
class CompareTripComponent extends Component {
  componentDidMount() {
    this.props.getTrips();
  }
  viewTrip = (id) => {
    this.props.getTrip(id);
  };
  render() {
    const { trips, trip } = this.props.trip;
   
    return (
      <div>
        <MDBDropdown>
          <MDBDropdownToggle caret color="default">
            {trip.title ? trip.title : "Select Trip"}
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            {this.props.trip1 &&
              trips.map((t) => (
                <MDBDropdownItem>
                  <span onClick={() => this.viewTrip(t._id)}>{t.title}</span>
                </MDBDropdownItem>
              ))}
          </MDBDropdownMenu>
        </MDBDropdown>

        <div style={{ textAlign: "left" }}>
          {trip.title && this.props.trip1 && (
            <MDBContainer>
              <img
  src={trip.image ? trip.image : noimage}
className="img-fluid"
style={{width:'100%'}}

                alt=""
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
                <h1>{trip.title}</h1>
              </div>
              <MDBRow style={{ paddingTop: "25px" }}>
                <MDBCol size="4">
                  <h5>Description:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5 style={{wordBreak:'break-all'}}>{trip.desc}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Destination:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip.designation}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Departure:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>
                    {new Date(trip.departureDate).toLocaleDateString("sq-AL", {
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
                  <h5>{trip.numberOfDays}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Number Of People:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip.numberOfPeople}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Trip Type:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip.tripType}</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="4">
                  <h5>Price:</h5>
                </MDBCol>
                <MDBCol size="8">
                  <h5>{trip.price}</h5>
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

export default connect(mapStateToProps, { getTrips, getTrip })(CompareTripComponent);
