import React, { ReactNode } from 'react';
import Subtitle from './Subtitle';
import Parag from './Parag';

interface SubSectionProps {
  title: string;
  children: string | ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  id?: string;
  number?: string;
}

function Subsection({ title, children, titleClassName, contentClassName, id, number }: SubSectionProps)
{
    return (
        <div className='flex flex-col gap-[4px]'>
            <Subtitle id={id}>{title}</Subtitle>
            <Parag>{children}</Parag>
        </div>
    );
}

export default Subsection;