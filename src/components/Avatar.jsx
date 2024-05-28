import avatarIcon from "/src/assets/image-avatar.png";

export const Avatar = () => {
  return (
    <a>
      <img
        className="w-8 md:w-12 border-2 rounded-full border-transparent hover:border-orange"
        src={avatarIcon}
      />
    </a>
  );
};
