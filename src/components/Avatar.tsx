import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
  surname: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, name, surname }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center space-x-4 p-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={src} alt={alt} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl">{name}</div>
        <div className="text-5xl">{surname}</div>
      </div>
    </div>
  );
};

export default Avatar;
