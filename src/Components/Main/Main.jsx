import MainSlider from "./MainSlider";
import List from "./ItemsList/List";
import ThemeModes from "../Shared/ThemeModes";

const Main = () => {
  return (
    <ThemeModes>
      <MainSlider />
      <List></List>
    </ThemeModes>

  );
};

export default Main;
