import React from "react";
import Card from "../components/core/Card";
import Search from "../components/core/Search";
import Pagination from "../components/core/Pagination";
import Table from "../components/core/Table";
import passengersService from "../api/passengers";

class Passengers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        page: 1,
        query: "",
        size: 10,
      },
      passengers: [],
    };

    this.onQueryChange = this.onQueryChange.bind(this);
  }

  getPassengers() {
    passengersService.getPassengers(this.state.params).then((res) => {
      this.setState({
        passengers: res.data.data,
      });
    });
  }

  onQueryChange(newQuery) {
    this.setState({ params: { ...this.state.params, query: newQuery } });
    this.getPassengers();
  }

  componentDidMount() {
    this.getPassengers();
  }

  render() {
    const passengers = this.state.passengers;
    const query = this.state.params.query;
    return (
      <div>
        <Card>
          {passengers.length > 0 && (
            <>
              <Search value={query} onChange={this.onQueryChange} />
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
              <Pagination page="123" />
            </>
          )}
        </Card>
      </div>
    );
  }
}

export default Passengers;
