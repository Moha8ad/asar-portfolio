import styled, { keyframes } from "styled-components";
import Logo from "../assets/asar-logo-lg-wt.png";

export const Image = (props) => {
  const { alt, ...otherProps } = props;

  return <img alt={alt} {...otherProps} />;
};

const breakpoints = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const device = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`,
};

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const fadeInRight = keyframes`
    0% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
`;

export const fadeInLeft = keyframes`
    0% {
        -webkit-transform: translateX(-50px);
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
`;

export const rollInRight = keyframes`
    0% {
        -webkit-transform: translateX(0px) rotate(720deg);
        transform: translateX(0px) rotate(720deg);
    }
    100% {
        -webkit-transform: translateX(0) rotate(0deg);
        transform: translateX(0) rotate(0deg)
    }
`;

export const AsarLogo = styled.div`
  -webkit-animation: ${fadeInRight} 0.6s 0.4s
    cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeInRight} 0.6s 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  background-image: url(${Logo});
  background-size: 150px auto;
  background-repeat: no-repeat;
  min-height: 50px;
  max-height: 50px;
`;

export const JobTitle = styled.div`
  color: #e1a5ff;
  padding: max(3vh, 2vw) 0 max(1.5vh, 1.5vw);
  font-size: 1.5rem;

  -webkit-animation: ${fadeInLeft} 0.7s 0.7s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${fadeInLeft} 0.7s 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media only screen and ${device.sm} {
    font-size: max(3.5vh, min(3vw, 1.6rem));
  }
`;

export const AboutMe = styled.div`
  color: #e3f0f5;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  -webkit-animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  padding-bottom: max(3vh, 2vw);

  @media only screen and ${device.sm} {
    font-size: max(2.5vh, min(2vw, 1.2rem));
  }
`;

export const SkillDev = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  * {
    animation: ${rollInRight} 2s ease-out both;
  }
`;

export const AboutMeBox = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 15px 1px rgba(255, 255, 255, 0.2);

  width: max(20vh, 80vw);
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;

  padding: max(3vh, 3vw) max(4vh, 4vw);

  background: linear-gradient(
    rgba(0, 0, 0, 0.5) 5%,
    rgba(0, 0, 0, 0.95) 50%,
    rgba(0, 0, 0, 0.5) 95%
  );

  font-family: "Quicksand", "Open Sans Condensed", Georgia, Times,
    "Times New Roman", serif;

  -webkit-animation: ${fadeIn} 0.6s 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${fadeIn} 0.6s 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media only screen and ${device.sm} {
    width: max(60vh, 60vw);
  }
`;

export const MovingLogo = styled.span`
  background-position: -100px;
  width: 100%;
  min-height: 100vh;

  background-image: url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png),
    url(https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg),
    url(https://restfulapi.net/wp-content/uploads/rest.png),
    url(https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg),
    url(https://nodejs.org/static/images/logo.svg),
    url(https://styled-components.com/logo.png),
    url(https://static.requarks.io/logo/firebase.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg);

  padding: max(0.8vh, 0.8vw);
  background-size: max(4vh, 2vw) max(4vh, 2vw);
  background-repeat: no-repeat;
  position: absolute;
`;

function parallax(e) {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let logo1 = `${8 - (mouseX - w) * 0.03}% ${17 - (mouseY - h) * 0.03}%`;
  let logo2 = `${90 - (mouseX - w) * -0.015}% ${19 - (mouseY - h) * -0.01}%`;
  let logo3 = `${6 - (mouseX - w) * 0.008}% ${35 - (mouseY - h) * 0.06}%`;
  let logo4 = `${9 - (mouseX - w) * 0.01}% ${55 - (mouseY - h) * -0.06}%`;
  let logo5 = `${10 - (mouseX - w) * 0.06}% ${70 - (mouseY - h) * -0.03}%`;
  let logo6 = `${7 - (mouseX - w) * 0.007}% ${80 - (mouseY - h) * -0.03}%`;
  let logo7 = `${89 - (mouseX - w) * 0.008}% ${5 - (mouseY - h) * 0.05}%`;
  let logo8 = `${94 - (mouseX - w) * -0.05}% ${40 - (mouseY - h) * -0.04}%`;
  let logo9 = `${2 - (mouseX - w) * 0.07}% ${2 - (mouseY - h) * 0.13}%`;
  let logo10 = `${92 - (mouseX - w) * -0.06}% ${78 - (mouseY - h) * -0.08}%`;
  let logo11 = `${86 - (mouseX - w) * 0.008}% ${70 - (mouseY - h) * -0.09}%`;
  let logo12 = `${89 - (mouseX - w) * 0.005}% ${55 - (mouseY - h) * 0.04}%`;
  let x = `${logo12}, ${logo11}, ${logo10}, ${logo9}, ${logo8}, ${logo7}, ${logo6}, ${logo5}, ${logo4}, ${logo3}, ${logo2}, ${logo1}`;

  if (document.querySelector(MovingLogo)) {
    document.querySelector(MovingLogo).style.backgroundPosition = x;
  }
}
document.addEventListener("mousemove", parallax);

export const AboutMeContent = styled.div``;

export const AboutMePage = styled.div`
  position: -webkit-sticky;
  position: sticky;
  background: linear-gradient(#000 0%, #04136e 80%);
  padding: max(4vh, 4vw) 0;
  min-height: 100vh;

  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and ${device.sm} {
    position: sticky;
    top: 0;
  }

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */

  user-select: none;
  cursor: default;
`;

export const ProfilePage = styled.div`
  font-size: 12px;
  color: white;
`;
