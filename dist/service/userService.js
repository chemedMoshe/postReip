"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cratenewUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const cratenewUser = (userModel) => {
    const newUser = new userModel_1.default(userModel);
    return newUser.save();
};
exports.cratenewUser = cratenewUser;
