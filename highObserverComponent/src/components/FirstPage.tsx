import SecondPage from "./SecondPage";

export default function FirstPage() {
  return (
    <div data-click-param="First Page Param" data-click-log="First Page Log">
      FirstPage
      <button type="button">Fist Page Button</button>
      <SecondPage />
    </div>
  );
}
