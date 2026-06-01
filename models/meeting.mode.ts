import mongoose, { models, Schema, model } from "mongoose";
import { Iuser } from "./user.mode";
export interface Imeeting {
  _id?: mongoose.Types.ObjectId;
  host_id?: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  password: string;
  invited_users: Array<Iuser>;
  status: "COMPLETED" | "UPCOMING" | "MISS";
  start_time: Date;
  end_time: Date;
  seats: number;
  created_at?: Date;
  updated_at?: Date;
}

const meetingSchema = new Schema<Imeeting>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  invited_users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  status: {
    type: String,
    enum: ["COMPLETED", "UPCOMING", "MISS"],
  },
  start_time: {
    type: Date,
  },
  end_time: {
    type: Date,
  },
  seats: {
    type: Number,
    default: 1,
  },
});

const Meeting = models?.Meeting || model<Imeeting>("Meeting", meetingSchema);
export default Meeting;
