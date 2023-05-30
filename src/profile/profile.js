import LOGO_URL from "../assets/logo-address.js";
import {
  Image,
  ProfilePage,
  AboutMeContent,
  AboutMePage,
  AboutMeBox,
  MovingLogo,
  AsarLogo,
  JobTitle,
  AboutMe,
  SkillDev,
} from "./profile.styles.js";

const Profile = () => {
  return (
    <ProfilePage>
      <AboutMePage>
        <MovingLogo />
        <AboutMeBox>
          <AsarLogo />
          <AboutMeContent>
            <JobTitle>
              <i className="bi bi-terminal fs-6"></i>{" "}
              <i className="bi bi-code-square fs-5" /> Frontend Developer
            </JobTitle>
            <AboutMe>
              Hi, I'm Mohammad. With expertise in JavaScript, React, and Redux,
              I create visually stunning web applications. I welcome feedback
              and collaboration to deliver exceptional digital experiences.{" "}
              <a
                href="mailto:asar.web.development@gmail.com"
                style={{ color: "lightgreen" }}
              >
                Let's work together
              </a>{" "}
              to create something amazing!
            </AboutMe>
          </AboutMeContent>
          <SkillDev>
            {LOGO_URL.map((address, idx) => (
              <Image
                key={idx}
                alt={address.alt}
                src={address.url}
                style={{
                  height: "max(6vh, 4vw)",
                  width: "max(6vh, 4vw)",
                  padding: "max(0.8vh, 0.8vw)",
                  animationDelay: `${address.delay}`,
                }}
              />
            ))}
          </SkillDev>
        </AboutMeBox>
      </AboutMePage>
    </ProfilePage>
  );
};

export default Profile;
