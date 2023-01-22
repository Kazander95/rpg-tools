import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addParticipant,
  selectInitiative,
} from "../../models/initiativeReducer";
import "./InitiativeTable.css";
import TextInput from "../../../common/components/TextInput";
import NumberInput from "../../../common/components/NumberInput";
import Button from "../../../common/components/Button";
import InitiativeRow from "../InitiativeRow";

const InitiativeTable: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const InitiativeTable = useAppSelector(selectInitiative);

  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState<number>(0);

  const onAdd = () => {
    dispatch(
      addParticipant({
        name,
        initiative: initiative || 0,
      })
    );
  };

  const isAddDisabled = !name.length;

  return (
    <div className={"container"}>
      <h1 className={"header"}>Initiative</h1>
      <div className={"control-row"}>
        <TextInput value={name} onChange={setName} placeholder={"Name"} />
        <NumberInput
          value={initiative || 0}
          onChange={setInitiative}
          placeholder={"Initiative"}
          className={"w-14"}
        />
        <Button onClick={onAdd} disabled={isAddDisabled}>
          +
        </Button>
      </div>
      {[...InitiativeTable]
        .sort((a, b) => b.initiative - a.initiative)
        .map((p) => (
          <InitiativeRow
            key={p.id}
            id={p.id}
            name={p.name}
            initiative={p.initiative}
          />
        ))}
    </div>
  );
};

export default InitiativeTable;
