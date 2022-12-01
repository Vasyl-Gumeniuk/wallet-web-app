import sprite from '../../images/icons/sprite-all-icons.svg';
import { LoaderIcon } from './ButtonLoader.styled';

const ButtonLoaderIcon = () => {
  return (
    <LoaderIcon>
      <use href={sprite + '#icon-loader'}></use>
    </LoaderIcon>
  );
};
export default ButtonLoaderIcon;
