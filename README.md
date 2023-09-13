<h1 align="center">YouTube Clone Project 🎥</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-4.4.4-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Next.js-12.0.7-000000?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/Express.js-4.17.1-000000?style=for-the-badge&logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/Docker-20.10.7-2496ED?style=for-the-badge&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/FFmpeg-4.4-007ACC?style=for-the-badge&logo=ffmpeg" alt="FFmpeg">
  <img src="https://img.shields.io/badge/Firebase%20Auth-9.16.1-FFA611?style=for-the-badge&logo=firebase" alt="Firebase Auth">
  <img src="https://img.shields.io/badge/Firebase%20Functions-4.16.1-FFA611?style=for-the-badge&logo=firebase" alt="Firebase Functions">
  <img src="https://img.shields.io/badge/Firebase%20Firestore-3.11.1-FFA611?style=for-the-badge&logo=firebase" alt="Firebase Firestore">
  <img src="https://img.shields.io/badge/Google%20Cloud%20Storage-Latest-4285F4?style=for-the-badge&logo=google-cloud" alt="Google Cloud Storage">
  <img src="https://img.shields.io/badge/Google%20Cloud%20Pub%2FSub-Latest-4285F4?style=for-the-badge&logo=google-cloud" alt="Google Cloud Pub/Sub">
  <img src="https://img.shields.io/badge/Google%20Cloud%20Run-Latest-4285F4?style=for-the-badge&logo=google-cloud" alt="Google Cloud Run">
</p>
<p align="center">
  Learn Google Cloud Platform and Firebase by building a YouTube clone with an emphasis on cloud-native technologies.
</p>

## 🚀 Project Features

- 📺 List videos
- 📼 Watch a video
- 👤 Sign in/out
- 📥 Upload a video
- 🎬 Watch the transcoded video

## 🎞️ Video Chunks and Transcoding

The project efficiently streams videos by dividing them into smaller chunks. FFmpeg is used for video transcoding, optimizing video files for seamless playback.

## 🌐 Ingress and Security

Ingress is managed via Google Cloud Run and Firebase Hosting. Firebase Authentication ensures secure access control. Firebase Firestore stores video metadata, while Google Cloud Storage securely holds video files.

## ⚠️ Project Status

**Note:** This project is currently inactive due to incremental costs associated with Firebase, Google Cloud Pub/Sub, and Google Cloud Platform. Nevertheless, the project is fully functional.

## 📂 Data Storage with Google Cloud Pub/Sub

This project leverages Google Cloud Pub/Sub for efficient data storage and event-driven architecture. Video data and related information are stored securely in Pub/Sub buckets.

### How It Works

1. **Data Storage**: Video files and metadata are stored in Google Cloud Pub/Sub buckets. This ensures high availability, scalability, and durability of your data.

2. **Event-Driven**: When an event, such as video upload or user interactions, occurs, it triggers events in Pub/Sub.

3. **Subscriptions**: Subscriptions are set up to listen for specific events or changes in data. For example, when a new video is uploaded, a subscription can be configured to trigger video transcoding or metadata updates.

4. **Serverless Triggers**: Google Cloud Functions can be configured to respond to Pub/Sub events, making it possible to perform actions like video transcoding, thumbnail generation, or database updates automatically.

5. **Scalable and Cost-Effective**: Google Cloud Pub/Sub scales with your application, ensuring that you only pay for what you use. It's a cost-effective way to handle event-driven data processing.

By using Google Cloud Pub/Sub, this project achieves a robust and scalable architecture for data storage and processing, allowing for seamless video streaming and user interactions.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or create pull requests.

## 📜 License

This project is licensed under the [MIT License](LICENSE).
