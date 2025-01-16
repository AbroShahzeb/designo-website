import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from "../../../../../assets/svgAssetComponents";

export const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-primary-peach">
      <div className="hover:text-secondary-light-peach transition-all">
        <IconFacebook />
      </div>
      <div className="hover:text-secondary-light-peach transition-all">
        <IconYoutube />
      </div>
      <div className="hover:text-secondary-light-peach transition-all">
        <IconTwitter />
      </div>
      <div className="hover:text-secondary-light-peach transition-all">
        <IconPinterest />
      </div>
      <div className="hover:text-secondary-light-peach transition-all">
        <IconInstagram />
      </div>
    </div>
  );
};
