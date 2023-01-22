import "./InitiativeRow.css";

interface InitiativeRowProps {
  id: string;
  name: string;
  initiative: number;
}

const InitiativeRow: React.FC<InitiativeRowProps> = (props) => {
  const { name, id, initiative } = props;
  return (
    <div className={"row"}>
      <div className={"text"}>{name}</div>
      <div className={"text"}>{initiative}</div>
    </div>
  );
};

export default InitiativeRow;
