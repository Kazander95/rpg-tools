import { useAppDispatch, useAppSelector } from "./hooks";
import "./index.css";
import "./button.css";
import InitiativeTable from "./Initiative/InitiativeTable";
import {
  addParticipant,
  selectInitiative,
} from "./Initiative/models/initiativeReducer";
import { v4 as uuid } from "uuid";

function App() {
  const dispatch = useAppDispatch();
  const initiative = useAppSelector(selectInitiative);

  return (
    <div className="p-4">
      <button
        className={"btn-pill"}
        onClick={() =>
          dispatch(
            addParticipant({ id: uuid(), name: "Gunderson", initiative: 14 })
          )
        }
      >
        +
      </button>

      {initiative.map((p) => (
        <p>
          {p.name}-{p.initiative}-{p.id}
        </p>
      ))}
      <InitiativeTable />
    </div>
  );
}

export default App;
