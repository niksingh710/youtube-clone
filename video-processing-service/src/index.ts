import express from "express";
import ffmpeg from "fluent-ffmpeg";
import {
  convertVideo,
  deleteProcessedVideo,
  deleteRawVideo,
  downloadRawVideo,
  setupDirectories,
  uploadProcessedVideo,
} from "./storage";

setupDirectories();

const app = express();
app.use(express.json());

app.post("/process-video", async (req, res) => {
  let data;
  try {
    const message = Buffer.from(req.body.message.data, "base64").toString(
      "utf8",
    );
    data = JSON.parse(message);
    if (!data.name) {
      throw new Error("Invalid message paylod reeived");
    }
  } catch (err) {
    console.log("Error: ", err);
    res.status(400).send("Invalid message payload received");
    return;
  }
  const inputFileName = data.name;
  const outputFileName = `processed-${inputFileName}`;
  await downloadRawVideo(inputFileName);

  try {
    await convertVideo(inputFileName, outputFileName);
  } catch (err) {
    Promise.all([
      deleteRawVideo(inputFileName),
      deleteProcessedVideo(outputFileName),
    ]);
    console.log(err);
    return res
      .status(500)
      .send("Internal Server Error: Video Processing Failed");
  }

  await uploadProcessedVideo(outputFileName);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
