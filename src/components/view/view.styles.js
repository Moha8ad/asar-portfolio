import { styled } from "styled-components";
import { Box } from "@mui/material";
import { isPreview, isRepository } from "../../constants/constants";

export const ViewWrapper = styled(Box)`
  justify-content: center;
  min-height: 100vh;
  max-height: 100vh;
  padding: 10vh 10vw;
  background: #04136e;
`;

export const AppBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max(20vh, 90vw);
  min-height: 80vh;
  max-height: 80vh;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 1px rgba(255, 255, 255, 0.2);
`;

export const StyledBox = styled(Box)`
  position: relative;
  min-height: 80vh;
  max-height: 80vh;
  color: #fff;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-color: #ccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;
  &:first-child {
    border-radius: 20px 0 0 20px;
  }
  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`;

export const StyledShadowBox = styled(Box)`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;
  opacity: ${({ clicked }) => (clicked ? 1 : 0)};
  background: ${({ clicked }) =>
    clicked ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)"};
  backdrop-filter: blur(${({ clicked }) => (clicked ? "7px" : "1px")});
  -webkit-backdrop-filter: blur(${({ clicked }) => (clicked ? "7px" : "1px")});

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(${({ clicked }) => (clicked ? "7px" : "1px")});
    -webkit-backdrop-filter: blur(
      ${({ clicked }) => (clicked ? "7px" : "1px")}
    );
  }
`;

export const SmDevicesStyledShadowBox = styled(Box)`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur("7px");
  -webkit-backdrop-filter: blur("7px");
`;

export const StyledTitle = styled(Box)`
  border-right: ${({ clicked }) => !clicked && `4px solid orange`};
  border-left: ${({ clicked }) => !clicked && `4px solid orange`};
  border-radius: 1vw 0 1vw;
  padding: max(1vh, 1vw);
  font-family: righteous;
  font-size: max(5vh, min(5vw, 4rem));
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    color: orange;
    border: none;
  }
`;

export const StyledDescription = styled(Box)`
  min-width: 75vw;
  min-height: 80vh;
  display: grid;
  grid-template-columns: max(6vh, 6vw) 1fr;
  padding: max(1vh, 1vw);
`;

export const SidebarWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max(6vh, 6vw);
  min-height: 76vh;
`;

export const StyledSidebar = styled(Box)`
  height: max(6vh, 6vw);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: righteous;
  font-size: max(5vh, min(5vw, 4rem));
  color: ${({ clickedApp }) => (clickedApp ? "orange" : "#fff")};
  cursor: default;
  transform: rotate(-90deg);
  transition: color 0.3s;
  &:hover {
    color: orange;
  }
`;

export const StyledMain = styled(Box)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-height: 76vh;
  min-height: 76vh;
  max-width: 100%;
  overflow: scroll;
  gap: max(1vh, 1vw) max(2vh, 2vw);
  padding: max(2vh, 2vw);
`;

export const StyledApp = styled(Box)`
  display: flex;
  flex-flow: column wrap;
  min-height: 68vh;
  max-height: 68vh;
  font-family: righteous;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: max(2vh, 2vw) max(3vh, 3vw);
  gap: 30px max(2vh, 2vw);
  transition: all 0.3s ease-out;
  box-shadow: 0px 0px 15px 2px rgba(255, 155, 255, 0.5);
  cursor: default;
  &:hover {
    box-shadow: 0px 0px 15px 2px rgba(255, 155, 0, 0.5);
    color: orange;
  }
`;

export const StyledAppTitle = styled(Box)`
  font-size: max(4vh, min(4vw, 1.5rem));
`;

export const StyledAppDescription = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px max(2vh, 2vw);
  fontsize: max(5vh, min(5vw, 2rem));
  color: #ccc;
`;

export const StyledAppSection = styled(Box)`
  display: flex;
  width: fit-content;
  padding-bottom: 5px;

  &:hover {
    color: ${({ section, demoUrl, repoUrl }) =>
      section === isPreview && demoUrl
        ? "orange"
        : section === isRepository && repoUrl
        ? "orange"
        : section === isPreview || section === isRepository
        ? "gray"
        : "#fff"};
    cursor: ${({ section, demoUrl, repoUrl }) =>
      section === isPreview && demoUrl
        ? "pointer"
        : section === isRepository && repoUrl
        ? "pointer"
        : section === isPreview || section === isRepository
        ? "not-allowed"
        : "default"};
  }
`;

export const StyledTechStack = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  padding-top: 5px;
`;
