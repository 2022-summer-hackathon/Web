import { useGetUser } from "../../queries/profile/profile.query";
import ProfileLevel from "./profileLevel/profileLevel";
import ProfileMyPosting from "./profileMyPostingItem/profileMyPostingItem";
import {
  ProfileContainer,
  ProfileImg,
  ProfileImgWrap,
  ProfileMyPostingWrap,
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
            <ProfileImg
              src={"http://dodam.b1nd.com/static/media/profile.9a3a77b0.svg"}
            />
          </ProfileImgWrap>
          <ProfileName>{data?.data?.userData?.auth?.name}</ProfileName>
          <ProfileLevel
            level={String(data?.data?.userData?.level)}
            experience={data?.data?.userData?.exp!}
            remainingExperience={data?.data.remainExp!}
          />
          <ProfileMyPostingWrap>
            {data?.data.userData.posting.map((item) => (
              <ProfileMyPosting myPostingData={item} />
            ))}
          </ProfileMyPostingWrap>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
