import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { v4 as uuid } from "uuid";

type ParticipantInput = {
  initiative: number;
  name: string;
};

type Participant = ParticipantInput & {
  id: string;
};

type InitiativeState = Array<Participant>;

const initialState: InitiativeState = [];

export const initiativeSlice = createSlice({
  name: "initiative",
  initialState,
  reducers: {
    addParticipant: (
      state: InitiativeState,
      action: PayloadAction<ParticipantInput>
    ) => {
      state.push({ ...action.payload, id: uuid() });
    },
    modifyParticpant: (
      state: InitiativeState,
      action: PayloadAction<{ id: string; data: Participant }>
    ) => {
      return state.map((p) =>
        p.id === action.payload.id ? action.payload.data : p
      );
    },
  },
});

export const { addParticipant, modifyParticpant } = initiativeSlice.actions;

export const selectInitiative = (state: RootState) => state.initiative;

export default initiativeSlice.reducer;
