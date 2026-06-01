import mongoose, { models, Schema } from "mongoose";
import { model } from "mongoose";

export interface Irecording {
  id: mongoose.Types.ObjectId;
  meeting_id: mongoose.Types.ObjectId;
  durarion: number;
  file_url: string;
}

const recordingSchema = new mongoose.Schema<Irecording>({
  meeting_id: {
    type: Schema.Types.ObjectId,
    ref: "Meeting",
  },
  durarion: {
    type: Number,
  },
  file_url: {
    type: String,
  },
});

const Recording =
  models?.Recording || model<Irecording>("Recording", recordingSchema);

export default Recording;
