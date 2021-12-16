import GuitarChordControl from "./GuitarChordControl";
import GuitarChordPreview from "./GuitarChordPreview";

function Widget(opts = {}) {
  return {
    name: "guitarChords",
    GuitarChordControl,
    GuitarChordPreview,
    ...opts,
  };
}

export const NetlifyCmsWidgetGuitarChords = {
  Widget,
  GuitarChordControl,
  GuitarChordPreview,
};
export default NetlifyCmsWidgetGuitarChords;
