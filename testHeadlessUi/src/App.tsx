import { MyDialog } from "components/MyDialog";
import MyModal from "components/MyModal";
import MySecondModal from "components/MySecondModal";

function MyIframe(props: { src?: any; width: any; height: any; children?: any }) {
  const { src, width, height, children } = props;

  return (
    <iframe src={src} width={width} height={height} title="My Iframe">
      {children}
    </iframe>
  );
}
export default function App() {
  const handleOuterFrame = () => {
    // window.location.href = "https://example.com";
    if (window.parent.frames.length) {
      console.log(window.parent.frames.closed);
      console.log(window.parent.frames.closed);
    }
    console.log(window.parent.frames.close());
    console.log(window.parent.frames.length);
  };
  const handleInnerFrame = () => {
    console.log("object");
  };
  return (
    <div>
      <button type="button" onClick={handleOuterFrame}>
        outer button
      </button>
      <MyIframe height={200} width={500} src="http://localhost:3000/">
        <div>
          test
          <button type="button" onClick={handleInnerFrame}>
            Inner button
          </button>
        </div>
      </MyIframe>
    </div>
  );
}
