// IMPORTS
import React from "react";

// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// TYPES IMPORTS
import { IComment } from "../../types/types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

interface ComponentCardProps {
  data: IComment;
}

const CommentCard: React.FC<ComponentCardProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.time_ago}
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          by {data.user}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </CardContent>
    </Card>
  );
};

export default CommentCard;
