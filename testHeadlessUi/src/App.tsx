import { MyDialog } from "components/MyDialog";
import MyModal from "components/MyModal";
import MySecondModal from "components/MySecondModal";

export default function App() {
  return (
    <div>
      app
      <section>section1</section>
      <section>
        section2
        {/* <MyDialog /> */}
        <MyModal />
        <MySecondModal />
      </section>
      <section>section3</section>
    </div>
  );
}
