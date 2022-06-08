import style from "./style/HeartButton.module.css";

export default function HeartButton() {
  return (
    <div className={style.container}>
      <div className={style.square}>Touch-Me!</div>
    </div>
  );
}
