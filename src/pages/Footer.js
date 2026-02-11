import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  Divider,
  // useTheme
} from "@mui/material";

import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Phone,
  LocationOn,
  WhatsApp
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionStack = motion(Stack);
const MotionBox = motion(Box);

export default function Footer() {

  // const theme = useTheme();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Enter your email");
      return;
    }

    setMessage("Subscribed successfully");
    setEmail("");

    setTimeout(() => setMessage(""), 3000);
  };

  const categories = [
    "Movies",
    "Drama Series",
    "Sports",
    "Comedy Shows",
    "Documentaries"
  ];

  return (
    <Box sx={{ mt: 12 }}>

      {/* Main background */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg,#020617 0%,#0f172a 50%,#020617 100%)",
          color: "#fff",
          pt: 8,
          pb: 4,
          position: "relative",
          overflow: "hidden"
        }}
      >

        {/* subtle glow */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            background: "#25D366",
            opacity: 0.08,
            filter: "blur(120px)",
            top: -100,
            right: -100
          }}
        />

        <Container maxWidth="lg">

          <Grid container spacing={6} alignItems="flex-start">

            {/* BRAND AREA */}
            <Grid item xs={12} md={5}>

              <MotionStack
                spacing={3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >

                <Box
                  component="img"
                  src="../img/C-logo.PNG"
                    sx={{
    height: { xs: '30px', md: '40px' }, // Responsive height
    width: '20',                      // Maintain aspect ratio
    display: 'block',
    margin: { xs: '0 auto', md: '0' },  // Center on mobile, left align on desktop
  }}
                />

                <Typography
                  sx={{
                    fontSize: "1rem",
                    opacity: 0.7,
                    maxWidth: 400,
                    lineHeight: 1.6
                  }}
                >
                  CreativeMindz is your ultimate destination for movies,
                  series, and corporate entertainment anytime, anywhere.
                </Typography>


                {/* Social icons */}
                <Stack direction="row" spacing={1}>

                  {[Facebook, Instagram, Twitter, YouTube].map(
                    (Icon, index) => (

                      <IconButton
                        key={index}
                        component={motion.button}
                        whileHover={{ scale: 1.15 }}
                        sx={{
                          background: "rgba(255,255,255,0.05)",
                          color: "#fff",
                          width: 44,
                          height: 44,
                          "&:hover": {
                            background: "#25D366"
                          }
                        }}
                      >
                        <Icon />
                      </IconButton>

                    )
                  )}

                </Stack>

              </MotionStack>

            </Grid>



            {/* CATEGORIES */}
            <Grid item xs={12} sm={6} md={3}>

              <MotionStack
                spacing={2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >

                <Typography fontWeight="bold" fontSize={18}>
                  Browse
                </Typography>

                {categories.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      opacity: 0.7,
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": {
                        opacity: 1,
                        color: "#25D366"
                      }
                    }}
                  >
                    {item}
                  </Typography>
                ))}

              </MotionStack>

            </Grid>



            {/* CONTACT + NEWSLETTER */}
            <Grid item xs={12} sm={6} md={4}>

              <MotionStack
                spacing={3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >

                <Typography fontWeight="bold" fontSize={18}>
                  Stay Connected
                </Typography>


                {/* contact */}
                <Stack spacing={1}>

                  <Stack direction="row" spacing={1}>
                    <Phone fontSize="small" />
                    <Typography sx={{ opacity: 0.7 }}>
                      +27 781275164
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <LocationOn fontSize="small" />
                    <Typography sx={{ opacity: 0.7 }}>
                      South Africa
                    </Typography>
                  </Stack>

                </Stack>


                {/* newsletter */}
                <Box
                  component="form"
                  onSubmit={handleSubscribe}
                  sx={{
                    display: "flex",
                    gap: 1,
                    mt: 1
                  }}
                >

                  <TextField
                    size="small"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 2,
                      input: { color: "#fff" }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "#25D366",
                      px: 3,
                      fontWeight: "bold",
                      "&:hover": {
                        background: "#1ebe5d"
                      }
                    }}
                  >
                    Join
                  </Button>

                </Box>

                {message && (
                  <Typography
                    variant="caption"
                    color="#25D366"
                  >
                    {message}
                  </Typography>
                )}

              </MotionStack>

            </Grid>

          </Grid>



          {/* bottom */}
          <Divider sx={{ my: 5, borderColor: "rgba(255,255,255,0.1)" }} />

          <Typography
            align="center"
            sx={{ opacity: 0.6 }}
          >
            © {new Date().getFullYear()} CreativeMindz Production
          </Typography>


        </Container>

      </Box>



      {/* WhatsApp floating */}
      <MotionBox
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24
        }}
      >

        <IconButton
          href="https://wa.me/27781275164"
          target="_blank"
          sx={{
            width: 60,
            height: 60,
            background: "#25D366",
            color: "#fff",
            "&:hover": {
              background: "#1ebe5d"
            }
          }}
        >
          <WhatsApp sx={{ fontSize: 32 }} />
        </IconButton>

      </MotionBox>

    </Box>
  );
}
