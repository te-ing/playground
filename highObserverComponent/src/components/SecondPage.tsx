export default function SecondPage() {
  return (
    <div data-click-param="Second Page Param" data-click-log="Second Page Log">
      SecondPage
      <button type="button" data-click="secondEvent">
        Second Page Button
      </button>
    </div>
  );
}
