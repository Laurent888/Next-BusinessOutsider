import { withApollo } from "../src/services/client";
import { useState } from "react";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Hero from "../src/components/hero";
import GridCard from "../src/components/gridCards";
import NewsCard from "../src/components/newsCard";

import { FeedItem } from "../src/types/types";

const Home: React.FC = (props) => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_NEWS, { variables: { page } });

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

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const renderNews = data.getNewStories.map((item: FeedItem, index: number) => (
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

  return (
    <>
      <img
        src="/img/wordwidewebwoman.svg"
        alt="woman sitting on earth"
        style={{
          width: "40rem",
          height: "40rem",
          position: "absolute",
          top: "30%",
          left: "-3rem",
          zIndex: -5,
        }}
      />
      <Hero />
      <Container maxWidth="lg" style={{ padding: "1rem" }}>
        <Pagination
          count={12}
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
          count={12}
          page={page}
          onChange={handleChange}
          color="standard"
          size="large"
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Container>
    </>
  );
};

const GET_NEWS = gql`
  query($page: Int!) {
    getNewStories(page: $page) {
      title
      user
      url
      time_ago
      points
      comments_count
    }
  }
`;

export default withApollo(Home);
