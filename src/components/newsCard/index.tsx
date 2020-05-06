import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";

import { FeedItem } from "../../types/types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "rgba(250,250,250,.95)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface INewsCardProps {
  id?: number;
  title: string;
  user?: string | null;
  url?: string;
  time_ago: string;
  points?: number | null;
  comments_count: number;
  clicked?: (url?: string) => void;
}

const NewsCard: React.FC<INewsCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Chip
            size="small"
            color="primary"
            label={props.points}
            icon={<ThumbUpIcon />}
          />
        }
        title={`by ${props.user}`}
        subheader={props.time_ago}
        style={{
          background:
            "linear-gradient(141deg, rgba(255,175,189,0.3) 0%, rgba(255,195,160,0.3) 100%)",
        }}
      />
      <CardContent>
        <Typography variant="subtitle1">{props.title}</Typography>
      </CardContent>
      <CardActions>
        <Link href="/[id]" as={`/${props.id}`}>
          <a
            style={{
              marginLeft: "5px",
              marginRight: "auto",
              textDecoration: "none",
            }}
          >
            <Typography
              style={{ textTransform: "capitalize", fontSize: "14px" }}
              color="textSecondary"
            >
              {`${props.comments_count} comment${
                props.comments_count > 0 ? "s" : ""
              }`}
            </Typography>
          </a>
        </Link>

        {props.clicked && (
          <Button
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowRightOutlinedIcon />}
            onClick={() => {
              props.clicked && props.clicked(props.url);
            }}
          >
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default NewsCard;
