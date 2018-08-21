import React from "react";
import { PropTypes } from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const CounterView = ({ counter }) => (
  <div>{counter}</div>
);

CounterView.propTypes = {
  counter: PropTypes.number.isRequired
};

const GET_COUNTER = gql`
  {
    counter @client
  }
`;

const Counter = () => (
  <Query query={GET_COUNTER}>
    {({ data, client }) => {
    //   const { counter } = data;
      return <CounterView {...data} />;
    }}
  </Query>
);
export default Counter;
