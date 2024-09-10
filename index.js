import { writeToFile } from "belajar-nodejs/write";

writeToFile(
  "info.log",
  `${new Date().toISOString()} : password harus lebih dari 3 karakter`
);
