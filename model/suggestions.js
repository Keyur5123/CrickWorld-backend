import mongoose from "mongoose";

const SuggestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    suggestions: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Users_Suggestions", SuggestionSchema);