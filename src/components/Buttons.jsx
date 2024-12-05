import css from "./Buttons.module.css";
function Buttons({ onButtonClick }) {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={css.btnContainers}>
      {buttons.map((btn) => (
        <button
          key={btn}
          className={css.btn}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
