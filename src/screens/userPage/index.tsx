import React from "react";
import { useRouter } from "next/router";
import { withApollo } from "../../services/client";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { removeToken } from "../../utils/utils";

const UserPage = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) {
    if (error.graphQLErrors[0].message === "Authentication error") {
      removeToken(router.push("/signin"));
    }

    return <p>error</p>;
  }

  return (
    <div>
      <h2>AUTHENTICATED</h2>
    </div>
  );
};

const GET_ME = gql`
  query {
    getMe {
      id
      name
      email
    }
  }
`;

export default withApollo(UserPage);
