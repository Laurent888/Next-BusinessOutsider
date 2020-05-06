import React from "react";
import {
  Typography,
  createStyles,
  makeStyles,
  Card,
  Grid,
  CardContent,
  CardActions,
} from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import CustomCardHeader from "../cardComponents/customCardHeader";
import CommentCard from "./CommentCard";

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      width: "100%",
      marginBottom: "1rem",
    },
    newsMain: {
      width: "100%",
      padding: "1rem",
    },
  })
);

interface SingleNewsProps {
  singleNews: {
    user?: string | null;
    time_ago: string;
    points?: number | null;
    title: string;
    domain: string;
    comments: [any];
  };
}

const SingleNews: React.FC<SingleNewsProps> = ({ singleNews }) => {
  const classes = useStyles();

  const renderComments = singleNews.comments.map((item, index) => {
    return (
      <Grid item xs={12} key={index}>
        <CommentCard data={item} />
      </Grid>
    );
  });

  return (
    <>
      <Card className={classes.main}>
        <CustomCardHeader
          points={singleNews.points}
          user={singleNews.user}
          time_ago={singleNews.time_ago}
        />
        <CardContent>
          <Typography variant="body1">{singleNews.title}</Typography>
        </CardContent>
        {singleNews.domain !== "" && (
          <Typography
            color="textSecondary"
            style={{ textAlign: "end", padding: "0 1rem" }}
          >
            <span style={{ fontSize: "15px" }}>From: </span> {singleNews.domain}
          </Typography>
        )}
      </Card>
      <div
        style={{
          width: "100%",
          padding: "0.5rem 1rem",
          backgroundColor: "#eee",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <QuestionAnswerIcon style={{ marginRight: "1rem", color: "#666" }} />
        <Typography variant="h6" color="primary">
          Comment section
        </Typography>
      </div>

      <Grid container spacing={3}>
        {renderComments}
      </Grid>
    </>
  );
};

export default SingleNews;
