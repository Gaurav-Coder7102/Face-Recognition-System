Employee Face Recognition Application:

This project demonstrates a Face Recognition Application that matches an uploaded image of an employee with pre-stored employee images. It uses FaceAPI.js for face detection and recognition, and a simple web-based interface for interaction.

Features
    • Upload an image for recognition. 
    • Matches the uploaded image with a database of employee images. 
    • Displays whether a match was found or not. 
    • Simple and interactive user interface. 
    • Powered by FaceAPI.js, a lightweight and flexible JavaScript library for face detection and recognition. 

Project Structure
face-recognition-app/
├── models/                  # Pre-trained models for FaceAPI.js
├── js/
│   └── app.js               # Main JavaScript file for the application logic
├── index.html               # Main HTML file for the UI
├── package.json             # Node.js package metadata
├── README.md                # Project documentation
└── styles.css               # (Optional) Styles for UI customization

Requirements
Prerequisites:
    1. Node.js installed on your system. 
    2. A simple HTTP server to serve the app (e.g., http-server). 
Dependencies:
    • FaceAPI.js (CDN used for this project). 
    • Pre-trained models for face detection and recognition. 
    • http-server (or similar) to serve the project locally. 

Getting Started
1. Clone the Repository:
git clone <repository-url>
cd face-recognition-app
2. Install Dependencies:
Install http-server as a development dependency:
npm install http-server --save-dev
3. Download Pre-trained Models:
Ensure the following pre-trained models are available in the models/ folder:
    • ssd_mobilenetv1_model-shard1 
    • face_landmark_68_model-shard1 
    • face_recognition_model-shard1 
    • (Include all required .json and .bin files for these models.) 
You can download these models from the FaceAPI.js GitHub repository.
4. Run the Project:
Start a local HTTP server to serve the app:
npx http-server -p 3000
Visit http://localhost:3000 in your browser to view the app.

Usage
    1. Open the app in your browser: http://localhost:3000. 
    2. Upload an image using the file input field. 
    3. The app will match the uploaded image with pre-stored employee images. 
    4. If a match is found, the employee's name will be displayed. Otherwise, it will indicate "No match found." 

File Details
index.html
The main HTML file contains:
    • A file input for uploading images. 
    • A div element for displaying results. 
    • Links to load FaceAPI.js and the app's JavaScript file. 
app.js
Contains the JavaScript logic:
    • Loading pre-trained FaceAPI.js models. 
    • Handling the image upload event. 
    • Detecting faces and comparing descriptors for recognition. 
models
Pre-trained models required for face detection and recognition. The MODEL_URL in the JavaScript references this folder.
package.json
Contains metadata and scripts for running the app locally using http-server.

Example Output
When you upload an image:
    1. The app will display the uploaded image. 
    2. If a match is found, it will show the name of the matched employee: 
       Matched with Employee: John Doe
    3. If no match is found, it will display: 
       No match found

Troubleshooting
    • Issue: faceapi is not defined. Solution: Ensure the FaceAPI.js CDN link is included in index.html.
    • Issue: Models are not loading. Solution: Verify the models/ folder contains all necessary model files (.bin and .json) and the MODEL_URL path is correct in app.js.
    • Issue: File upload doesn't trigger any response. Solution: Check if the app.js file is linked correctly in index.html and ensure no JavaScript errors are in the console.

Future Enhancements
    • Add support for more advanced models (e.g., age detection, emotion detection). 
    • Enhance the UI with custom CSS. 
    • Store employee images and data in a database for better scalability. 
    • Integrate this app into a backend service for large-scale deployments. 


