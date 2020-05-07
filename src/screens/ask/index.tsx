// IMPORTS
import { withApollo } from "../../services/client";
import React, { useState } from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useQuery } from "@apollo/react-hooks";
import { GET_ASKNEWS } from "../../services/queries";

// COMPONEntS IMPORTS
import GridCard from "../../components/gridCards";
import NewsCard from "../../components/newsCard";
import HeroAsk from "../../components/hero/heroAsk";

// TYPE IMPORTS
import { FeedItem } from "../../types/types";

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
        id={item.id}
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
    <>
      {/* Backgroumd Image */}
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

      <img
        src="/img/chat.svg"
        alt="chat"
        style={{
          width: "40rem",
          height: "40rem",
          position: "absolute",
          top: "50%",
          right: "-3rem",
          zIndex: -5,
        }}
      />
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
    </>
  );
};

export default withApollo(AskPage);
