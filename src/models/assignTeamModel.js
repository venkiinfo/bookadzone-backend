const mongoose = require("mongoose");

const assignTeamSchema = new mongoose.Schema(
  {
    employee: { type: String, required: true },
    campaign: { type: String, required: true },
    status: { type: String, enum: ["assigned", "in_progress", "completed"], default: "assigned" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ASSIGNTEAM", assignTeamSchema);
