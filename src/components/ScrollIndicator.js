import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useTheme } from 'next-themes';
import { IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const { theme } = useTheme();

  const handleScroll = () => {

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const percent = Math.round((scrollTop / (fullHeight - windowHeight)) * 100);
    setScrollPercent(percent);
  };

  const handleArrowUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPercent === 100) {
      setShowSnackbar(true);
    }
  }, [scrollPercent]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackbar(false);
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${scrollPercent}%`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full h-2">
        <motion.div
          className="h-full relative dark:bg-primaryDark  "
          variants={progressVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: theme === 'dark' ? '#4a5568' : 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB 100%)',
          }}
        >
          {scrollPercent !== 0 && (
            <span className="absolute text-white -top-1 left-1/2 transform -translate-x-1/2 text-xs font-medium">
              {scrollPercent}%
            </span>
          )}
        </motion.div>
      </div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          You ve reached the bottom of the page!
        </Alert>
      </Snackbar>
      <div>
      hi iam here
        <IconButton onClick={handleArrowUpClick}>
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ScrollIndicator;
