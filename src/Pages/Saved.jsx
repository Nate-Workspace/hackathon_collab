import SavedEvents from "../components/Saved/SavedEvents";
import SavedProducts from "../components/Saved/SavedProducts";
import SavedServices from "../components/Saved/SavedServices";


function Saved() {
  return (
    <div className="flex-col gap-0">
      <SavedEvents />
      <SavedServices />
      <SavedProducts />
      
    </div>
  );
}

export default Saved;
