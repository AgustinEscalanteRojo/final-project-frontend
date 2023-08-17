import { FC, memo } from 'react';
import type { Props } from './types';
import { CustomImg } from './styles'; 

const Image: FC<Props> = ({ src, alt, variant = 'default' }) => { 
  return <CustomImg $variant={variant} src={src} alt={alt} />; 
};

export default memo(Image);
