import ProfileLevel from "./profileLevel/profileLevel";
import {
  ProfileContainer,
  ProfileImg,
  ProfileImgWrap,
  ProfileName,
} from "./style";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImgWrap>
        <ProfileImg />
      </ProfileImgWrap>
      <ProfileName>김종윤</ProfileName>
      <ProfileLevel level="1" experience={70} remainingExperience={4} />
    </ProfileContainer>
  );
};

export default Profile;
