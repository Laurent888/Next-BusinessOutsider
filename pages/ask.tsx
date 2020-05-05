import { withApollo } from "../src/services/client";
import React, { useState } from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import GridCard from "../src/components/gridCards";
import NewsCard from "../src/components/newsCard";
import HeroAsk from "../src/components/heroAsk";

import { FeedItem } from "../src/types/types";

const AskPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_ASKNEWS, {
    variables: { page },
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

  const renderNews = data.getAskStories.map((item: FeedItem, index: number) => (
    <Grid key={index} item xs={12} md={6}>
      <NewsCard
        title={item.title}
        user={item.user}
        time_ago={item.time_ago}
        url={item.url}
        points={item.points}
        comments_count={item.comments_count}
      />
    </Grid>
  ));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg">
      <HeroAsk />
      <Pagination
        count={2}
        page={page}
        onChange={handleChange}
        color="standard"
        size="large"
        style={{
          marginTop: "1rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <GridCard>{renderNews}</GridCard>
      <Pagination
        count={2}
        page={page}
        onChange={handleChange}
        color="standard"
        size="large"
        style={{
          marginTop: "1rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </Container>
  );
};

const GET_ASKNEWS = gql`
  query($page: Int!) {
    getAskStories(page: $page) {
      title
      user
      url
      time_ago
      points
      comments_count
    }
  }
`;

export default withApollo(AskPage);
