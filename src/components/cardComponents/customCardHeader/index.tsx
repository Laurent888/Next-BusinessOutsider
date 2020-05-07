// IMPORTS
import React from "react";

// UI IMPORTS
import CardHeader from "@material-ui/core/CardHeader";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Chip from "@material-ui/core/Chip";

interface CustomCardHeaderProps {
  user?: string | null;
  time_ago: string;
  points?: number | null;
}

const CustomCardHeader: React.FC<CustomCardHeaderProps> = (props) => {
  return (
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
  );
};

export default CustomCardHeader;
