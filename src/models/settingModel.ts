import mongoose, { Document, Schema } from "mongoose";

export interface ISetting extends Document {
    email: string;
    password: string;
    role: "super-admin" | "admin";
    status: "active" | "inactive";
    isDeleted: boolean;
}

const settingSchema: Schema<ISetting> = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["super-admin", "admin"], default: "super-admin" },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Setting = mongoose.model<ISetting>("settings", settingSchema);

export default Setting;
