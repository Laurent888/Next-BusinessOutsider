// IMPORTS
import { withApollo } from "../../services/client";
import { useState } from "react";
import { GET_NEWS } from "../../services/queries";

// UI IMPORTS
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Modal,
  Backdrop,
  Fade,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Box,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useQuery } from "@apollo/react-hooks";

// COMPONENTS IMPORTS
import Hero from "../../components/hero";
import GridCard from "../../components/gridCards";
import NewsCard from "../../components/newsCard";

import { FeedItem } from "../../types/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "5px",
    },
    firstBcgImage: {
      width: "40rem",
      height: "40rem",
      position: "absolute",
      top: "30%",
      left: "-3rem",
      zIndex: -5,
      [theme.breakpoints.down("sm")]: {
        top: "10%",
      },
    },
    secondBcgImage: {
      width: "40rem",
      height: "40rem",
      position: "absolute",
      top: "50%",
      right: "-3rem",
      zIndex: -5,
      [theme.breakpoints.down("sm")]: {
        top: "30%",
        width: "30rem",
        height: "30rem",
      },
    },
  })
);

const Home: React.FC = (props) => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState({
    url: "",
    open: false,
  });

  const classes = useStyles();

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

  const handleOpen = (props?: string) => {
    let url;
    if (!props) {
      url = "";
    } else {
      url = props;
    }
    setOpen({
      url,
      open: true,
    });
  };

  const handleClose = () => {
    setOpen({
      url: "",
      open: false,
    });
  };

  const renderNews = data.getNewStories.map((item: FeedItem, index: number) => (
    <Grid key={index} item xs={12} md={6}>
      <NewsCard
        id={item.id}
        title={item.title}
        user={item.user}
        time_ago={item.time_ago}
        url={item.url}
        points={item.points}
        comments_count={item.comments_count}
        clicked={handleOpen}
      />
    </Grid>
  ));

  return (
    <>
      {/* Confirm redirect oustide Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open.open}>
          <div className={classes.paper}>
            <Box
              style={{
                padding: "1rem .5rem",
                background:
                  "linear-gradient(141deg, rgba(255, 175, 189, 0.8) 0%, rgba(255, 195, 160, 0.8) 100%)",
              }}
            >
              <Typography variant="h6" color="textPrimary">
                Redirection
              </Typography>
            </Box>
            <Box style={{ padding: "2rem" }}>
              <Typography
                variant="body1"
                style={{ marginBottom: "2rem" }}
                color="textPrimary"
              >
                You will be redirected to an external website
              </Typography>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    window.open(open.url, "_blank");
                    handleClose();
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </div>
        </Fade>
      </Modal>

      {/* Backgroumd Image */}
      <img
        className={classes.firstBcgImage}
        src="/img/wordwidewebwoman.svg"
        alt="woman sitting on earth"
      />

      <img className={classes.secondBcgImage} src="/img/chat.svg" alt="chat" />

      {/* Main Content */}
      <Hero />
      <Container maxWidth="lg" style={{ padding: "1rem" }}>
        <Pagination
          count={10}
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
          count={10}
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

export default withApollo(Home);
