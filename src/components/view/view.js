import { useState } from "react";

import {
  appDetailsSections,
  apps,
  isLibrary,
  isPreview,
  isRepository,
  isTechStack,
} from "../../constants/constants";

import {
  AppBox,
  ViewWrapper,
  StyledBox,
  StyledShadowBox,
  StyledTitle,
  StyledDescription,
  StyledSidebar,
  StyledMain,
  StyledApp,
  SidebarWrapper,
  StyledAppTitle,
  StyledAppDescription,
  StyledAppSection,
  StyledTechStack,
} from "./view.styles";
import { Box, Chip, Typography } from "@mui/material";
import SmallView from "./small-view";

const View = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [currCategoryId, setCurrCategoryId] = useState(null);
  const handleCategoryHover = (Category) => {
    if (currCategoryId !== Category) {
      setHoveredCategory(Category);
    }
    if (!Category) {
      setHoveredCategory(null);
    }
  };
  const handleCategoryClick = (Category) => {
    if (currCategoryId !== Category) {
      setClickedCategory(Category);
      setCurrCategoryId(Category);
      setHoveredCategory(Category);
    } else if (!hoveredApp) {
      setClickedCategory(null);
      setCurrCategoryId(null);
      setHoveredCategory(null);
    } else {
      setHoveredCategory(null);
      setCurrCategoryId(null);
    }
  };
  const [hoveredApp, setHoveredApp] = useState(null);
  const handleAppHover = (App) => {
    setHoveredApp(App);
    if (!App) {
      setHoveredApp(null);
    }
  };
  const handleReset = () => {
    if (!hoveredApp && !hoveredCategory) {
      handleCategoryClick(null);
    }
  };

  const openInNewTab = (url) => {
    window.open(url);
  };

  return (
    <>
      <SmallView />
      <ViewWrapper
        onClick={handleReset}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <AppBox>
          {apps.map((item) => {
            const width =
              clickedCategory === item.id
                ? `calc(100% * ${apps.length})`
                : hoveredCategory === item.id
                ? `calc(200% / ${apps.length})`
                : `calc((100% - (100% / ${apps.length})) / (${apps.length} - 1))`;
            return (
              <StyledBox
                key={item.id}
                imageUrl={item.imageUrl}
                style={{ width }}
                onMouseEnter={() => handleCategoryHover(item.id)}
                onMouseLeave={() => handleCategoryHover(null)}
                onClick={() => handleCategoryClick(item.id)}
              >
                <StyledShadowBox clicked={clickedCategory === item.id}>
                  {!clickedCategory && (
                    <StyledTitle clicked={clickedCategory}>
                      {!clickedCategory && item.label}
                    </StyledTitle>
                  )}
                  {clickedCategory === item.id && (
                    <StyledDescription>
                      <SidebarWrapper>
                        <StyledSidebar clickedApp={true}>
                          {item.label}
                        </StyledSidebar>
                      </SidebarWrapper>
                      <StyledMain>
                        {item.apps.map((app) => (
                          <StyledApp
                            key={app.id}
                            sx={{
                              minWidth: { xs: "80%", md: "30vw" },
                              maxWidth: { xs: "80%", md: "30vw" },
                            }}
                            onMouseEnter={() => handleAppHover(app.id)}
                            onMouseLeave={() => handleAppHover(null)}
                          >
                            <StyledAppTitle>{app.title}</StyledAppTitle>
                            <StyledAppDescription>
                              {appDetailsSections.map((section) => (
                                <Box sx={{ flex: { xs: 12, md: 4 } }}>
                                  <StyledAppSection
                                    section={section.title}
                                    demoUrl={!!app.demoUrl}
                                    repoUrl={!!app.repoUrl}
                                    onClick={() =>
                                      section.title === isPreview &&
                                      !!app.demoUrl
                                        ? openInNewTab(app.demoUrl)
                                        : section.title === isRepository &&
                                          !!app.repoUrl
                                        ? openInNewTab(app.repoUrl)
                                        : null
                                    }
                                  >
                                    <Typography
                                      pr={1}
                                      sx={{ paddingTop: "3px" }}
                                    >
                                      {section.icon}
                                    </Typography>
                                    <Box>
                                      <Typography>{section.title}</Typography>
                                      {section.title === isTechStack && (
                                        <StyledTechStack>
                                          {app.techStack.map((stack, idx) => (
                                            <Typography
                                              key={idx}
                                              variant="caption"
                                            >
                                              <Chip
                                                sx={{ color: "#fff", m: "2px" }}
                                                label={stack}
                                                variant="outlined"
                                                color="primary"
                                              />
                                            </Typography>
                                          ))}
                                        </StyledTechStack>
                                      )}
                                      {section.title === isLibrary && (
                                        <StyledTechStack>
                                          {app.library.map((stack, idx) => (
                                            <Typography
                                              key={idx}
                                              variant="caption"
                                            >
                                              <Chip
                                                sx={{ color: "#fff", m: "2px" }}
                                                label={stack}
                                                variant="outlined"
                                                color="secondary"
                                              />
                                            </Typography>
                                          ))}
                                        </StyledTechStack>
                                      )}
                                    </Box>
                                  </StyledAppSection>
                                </Box>
                              ))}
                            </StyledAppDescription>
                          </StyledApp>
                        ))}
                      </StyledMain>
                    </StyledDescription>
                  )}
                  {!!clickedCategory && clickedCategory !== item.id && (
                    <SidebarWrapper>
                      <StyledSidebar>{item.label}</StyledSidebar>
                    </SidebarWrapper>
                  )}
                </StyledShadowBox>
              </StyledBox>
            );
          })}
        </AppBox>
      </ViewWrapper>
    </>
  );
};

export default View;
