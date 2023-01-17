import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Participant {
  id: string;
  name: string;
  initiative: number;
}

type InitiativeState = Array<Participant>;

const initialState: InitiativeState = [];

export const initiativeSlice = createSlice({
  name: "initiative",
  initialState,
  reducers: {
    addParticipant: (
      state: InitiativeState,
      action: PayloadAction<Participant>
    ) => {
      state.push(action.payload);
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
