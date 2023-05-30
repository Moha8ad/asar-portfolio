import React from "react";
import { StyledAppSection, StyledTechStack } from "./view.styles";
import {
  appDetailsSections,
  apps,
  isLibrary,
  isPreview,
  isRepository,
  isTechStack,
} from "../../constants/constants";
import { Box, Chip, Typography } from "@mui/material";

const SmallView = () => {
  const openInNewTab = (url) => {
    window.open(url);
  };
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "none" },
        flexDirection: "column",
        background: "#04136e",
        color: "#fff",
        padding: "10px",
      }}
    >
      {apps.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            border: "1px solid orange",
            borderRadius: "20px",
            backgroundImage: `url(${item.imageUrl})`,
            backgroundColor: "#ccc",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              width: "100%",
              height: "100%",
              background: `rgba(0, 0, 0, 0.8)`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <Typography variant="h4" color="orange">
                {item.label}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              {item.apps.map((app) => (
                <Box
                  key={app.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "20px",
                  }}
                >
                  <Typography variant="h5" color="orange" pb={1}>
                    {app.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {appDetailsSections.map((section) => (
                      <StyledAppSection
                        section={section.title}
                        demoUrl={!!app.demoUrl}
                        repoUrl={!!app.repoUrl}
                        onClick={() =>
                          section.title === isPreview && !!app.demoUrl
                            ? openInNewTab(app.demoUrl)
                            : section.title === isRepository && !!app.repoUrl
                            ? openInNewTab(app.repoUrl)
                            : null
                        }
                      >
                        <Typography pr={1}>{section.icon}</Typography>
                        <Box>
                          {section.title}
                          {section.title === isTechStack && (
                            <StyledTechStack>
                              {app.techStack.map((stack, idx) => (
                                <Typography key={idx} variant="caption">
                                  <Chip
                                    sx={{ color: "#fff", m: "2px" }}
                                    label={stack}
                                    variant="outlined"
                                    color="warning"
                                  />{" "}
                                </Typography>
                              ))}
                            </StyledTechStack>
                          )}
                          {section.title === isLibrary && (
                            <StyledTechStack>
                              {app.library.map((stack, idx) => (
                                <Typography key={idx} variant="caption">
                                  <Chip
                                    sx={{ color: "#fff", m: "2px" }}
                                    label={stack}
                                    variant="outlined"
                                    color="warning"
                                  />
                                </Typography>
                              ))}
                            </StyledTechStack>
                          )}
                        </Box>
                      </StyledAppSection>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SmallView;
