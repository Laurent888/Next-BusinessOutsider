// IMPORTS
import { withApollo } from "../../services/client";
import React from "react";
import { useRouter, NextRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_SINGLEPOST } from "../../services/queries";

// UI IMPORTS
import { Container, CircularProgress } from "@material-ui/core";

// COMPONENTS IMPORTS
import SingleNews from "../../components/singleNews";
import SingleNewsHero from "../../components/hero/singleNewsHero";

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

  const singleNewsData = {
    user: data.getSingleStory.user,
    points: data.getSingleStory.points,
    time_ago: data.getSingleStory.time_ago,
    title: data.getSingleStory.title,
    comments: data.getSingleStory.comments,
    domain: data.getSingleStory.domain || "",
  };

  return (
    <>
      <SingleNewsHero />
      <Container
        maxWidth="lg"
        style={{
          paddingTop: "2rem",
          marginTop: "-20rem",
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: "5px",
        }}
      >
        <SingleNews singleNews={singleNewsData} />
      </Container>
    </>
  );
};

export default withApollo(PostDetails);
