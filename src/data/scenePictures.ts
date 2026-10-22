// Real illustrations for picture cards whose emoji can't show the full scene.
// Keyed by the card's literal emoji + prompt so curriculum strings stay untouched.
import sandcastle from "@/assets/l7/sandcastle.jpg";
import relaxing from "@/assets/l7/relaxing.jpg";
import swimming from "@/assets/l7/swimming.jpg";
import fruits from "@/assets/l7/fruits.jpg";
import shopping from "@/assets/l7/shopping.jpg";
import help from "@/assets/l7/help.jpg";
import family from "@/assets/l7/family.jpg";
import astronaut from "@/assets/l7/astronaut.jpg";
import climbing from "@/assets/l7/climbing.jpg";
import notebookNear from "@/assets/l7/notebook-near.jpg";
import classmatesFar from "@/assets/l7/classmates-far.jpg";
import playgroundFar from "@/assets/l7/playground-far.jpg";

const SCENES: Record<string, string> = {
  "👧🏰🏖️|What is she doing?": sandcastle,
  "👨😎🏖️|Is he swimming?": relaxing,
  "👦🏊👧|Who is he swimming with?": swimming,
  "👩🍎🍌|What is she doing?": fruits,
  "👨🛒👦|Who is he shopping with?": shopping,
  "👵🙋 👷|What is she doing?": help,
  "👧📚 👦🎮 👨📺|What did they do yesterday?": family,
  "🧑‍🚀🔭🪐|What does she do in space?": astronaut,
  "👨🧗⛰️|What does he do in the mountains?": climbing,
  "📓|It is next to you. What is it? Use THIS.": notebookNear,
  "👦👧👧👦|They are over there, far from you. Who are those?": classmatesFar,
  "🏫🛝|It is over there, far from you. What is that?": playgroundFar,
};

export const scenePicture = (emoji: string, prompt: string) => SCENES[`${emoji}|${prompt}`];
