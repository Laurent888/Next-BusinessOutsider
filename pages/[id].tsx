import { withApollo } from "../src/services/client";
import React from "react";
import { useRouter, NextRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, CircularProgress } from "@material-ui/core";

const PostDetails: React.FC = (props) => {
  const router: NextRouter = useRouter();

  if (!router.query.id) return <p>Error...</p>;
  const queryId: string = router.query.id as string;

  const id = parseInt(queryId);
  const { loading, error, data } = useQuery(GET_SINGLEPOST, {
    variables: {
      id,
    },
  });

  if (loading)
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <CircularProgress />
      </div>
    );

  if (error) return <p>Error...</p>;

  console.log(data);

  return (
    <Container maxWidth="lg">
      <h2></h2>
    </Container>
  );
};

const GET_SINGLEPOST = gql`
  query($id: Int) {
    getSingleStory(id: $id) {
      id
      points
      user
      time
      domain
      url
      title
      comments_count
      comments {
        user
        time_ago
        content
      }
    }
  }
`;

export default withApollo(PostDetails);
