import React from "react";
import Card from "../components/core/Card";
import Table from "../components/core/Table";
import passengersService from "../api/passengers";

class Passengers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passengers: [],
    };
  }

  componentDidMount() {
    passengersService.getPassengers().then((res) => {
      this.setState({
        passengers: res.data.data,
      });
    });
  }

  render() {
    const passengers = this.state.passengers;
    return (
      <div>
        <Card>
          {passengers.length > 0 && (
            <Table
              cols={[
                {
                  key: "name",
                  value: "Passenger",
                },
                { key: "trips", value: "Trips" },
              ]}
              rows={passengers}
            />
          )}
        </Card>
      </div>
    );
  }
}

export default Passengers;
