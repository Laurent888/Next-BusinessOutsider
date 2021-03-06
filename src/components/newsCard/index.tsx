// IMPORTS
import React from "react";
import Link from "next/link";

// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// COMPONENTS IMPORTS
import CustomCardHeader from "../cardComponents/customCardHeader";

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
      <CustomCardHeader
        points={props.points}
        user={props.user}
        time_ago={props.time_ago}
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
