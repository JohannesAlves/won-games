import "@testing-library/jest-dom";
import "jest-styled-components";
import dotenv from "dotenv";
require("jest-fetch-mock").enableMocks();

dotenv.config({
    path: ".env.development",
});
