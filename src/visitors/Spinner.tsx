import "./spinner.css";

export default function Spinner() {
  return (
    <>
      <div className="overlay-text">Cold start. May take a minute...</div>
      <div className="spinner" />
    </>
  );
}
