import {
  ProfileLevelChart,
  ProfileLevelChartWrap,
  ProfileLevelContainer,
  ProfileLevelText,
} from "./style";

interface Props {
  level: string;
  experience: number;
  remainingExperience: number;
}

const ProfileLevel = ({ level, experience, remainingExperience }: Props) => {
  return (
    <ProfileLevelContainer>
      <ProfileLevelText>
        Lv.<strong>{level}</strong>
      </ProfileLevelText>
      <ProfileLevelChartWrap>
        <ProfileLevelChart experience={experience} />
      </ProfileLevelChartWrap>
      <ProfileLevelText>
        다음 레벨까지 {remainingExperience}% 남았습니다
      </ProfileLevelText>
    </ProfileLevelContainer>
  );
};

export default ProfileLevel;
