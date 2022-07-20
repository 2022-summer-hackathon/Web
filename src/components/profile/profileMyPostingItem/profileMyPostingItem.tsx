import { ProfileMyFeed } from "../../../interfaces/profile/profile.type";
import {
  ProfileMyPostingHeaderWrap,
  ProfileMyPostingHeart,
  ProfileMyPostingItemContainer,
  ProfileMyPostingItemName,
  ProfileMyPostingItemStar,
} from "./style";
import { FaHeart } from "react-icons/fa";

interface Props {
  myPostingData: ProfileMyFeed;
}

const ProfileMyPosting = ({ myPostingData }: Props) => {
  return (
    <ProfileMyPostingItemContainer>
      <ProfileMyPostingHeaderWrap>
        <ProfileMyPostingItemName>
          {myPostingData.movie}
        </ProfileMyPostingItemName>
        <ProfileMyPostingItemStar>
          ⭐{myPostingData.star}
        </ProfileMyPostingItemStar>
      </ProfileMyPostingHeaderWrap>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          columnGap: "5px",
        }}
      >
        <ProfileMyPostingHeart>
          <FaHeart />
        </ProfileMyPostingHeart>
        {myPostingData.likeCount}명이 리뷰에 공감합니다
      </div>
    </ProfileMyPostingItemContainer>
  );
};

export default ProfileMyPosting;
