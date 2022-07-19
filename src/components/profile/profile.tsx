import { useGetUser } from "../../queries/profile/profile.query";
import ProfileLevel from "./profileLevel/profileLevel";
import {
  ProfileContainer,
  ProfileImg,
  ProfileImgWrap,
  ProfileName,
} from "./style";

const Profile = () => {
  const { data, isLoading } = useGetUser();

  return (
    <ProfileContainer>
      {isLoading ? (
        <>로딩중</>
      ) : (
        <>
          <ProfileImgWrap>
            <ProfileImg />
          </ProfileImgWrap>
          <ProfileName>{data?.data?.auth?.name}</ProfileName>
          <ProfileLevel
            level={String(data?.data?.level)}
            experience={data?.data?.exp!}
            remainingExperience={4}
          />
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
