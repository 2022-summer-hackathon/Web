import { LoaderContainer, LoaderItem } from "./style";

interface Props {
  isAbsolute: boolean;
}

const Loader = ({ isAbsolute }: Props) => {
  return (
    <LoaderContainer isAbsolute={isAbsolute}>
      <LoaderItem />
    </LoaderContainer>
  );
};

export default Loader;
