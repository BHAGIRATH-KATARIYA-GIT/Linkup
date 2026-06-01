import mongoose, { model, models, Schema } from "mongoose";
import { Imeeting } from "./meeting.mode";

export interface Iuser {
  _id?: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  meetings?: Array<Imeeting>;
  profile_url?: string;
  created_at?: Date;
  updated_at?: Date;
}

const userSchema = new Schema<Iuser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  meetings: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  profile_url: {
    type: String,
    default: "",
  },
});

const User = models?.User || model<Iuser>("User", userSchema);
export default User;
