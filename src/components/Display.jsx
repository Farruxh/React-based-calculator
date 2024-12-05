import css from "./Display.module.css";

function Display({ calVal }) {
  return (
    <>
      <input className={css.display} type="text" value={calVal} readOnly />
    </>
  );
}
export default Display;
