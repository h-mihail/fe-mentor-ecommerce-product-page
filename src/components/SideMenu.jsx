import closeIcon from "/src/assets/icon-close.svg";

export const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={`absolute top-0 left-0 h-svh w-svw bg-backdrop`} />
      )}
      <div
        className={`absolute top-0 h-svh w-[250px] p-6 bg-white transition-transform ${
          !isOpen && "translate-x-[-250px]"
        }`}
      >
        <img src={closeIcon} onClick={onClose} />
        <div className="flex flex-col font-bold text-black text-lg gap-4 mt-14">
          <a>Collections</a>
          <a>Men</a>
          <a>Women</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </>
  );
};
