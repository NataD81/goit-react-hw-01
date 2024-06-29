import s from "./Profile.module.css";

const Profile = ({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img className={s.img} src={image} alt="User avatar" />{" "}
        <p className={s.profileInfoName}>{name}</p>
        <p className={s.profileInfoTag}>@{tag}</p>{" "}
        <p className={s.profileInfoTag}>{location}</p>
      </div>
      <ul className={s.profileStats}>
        <li className={s.profileStatsList}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={s.profileStatsList}>
          <span>Views</span> <span>{views}</span>
        </li>

        <li className={s.profileStatsList}>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
