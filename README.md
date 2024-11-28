# Face Recognition Application

This project is a simple face recognition application built using **Node.js**, **HTML**, **JavaScript**, and **FaceAPI.js** with pre-trained models. It identifies and matches faces in images uploaded by the user and compares them to stored images.

---

## 🌟 Features

- **Face Detection**: Detects faces from images using the `ssd_mobilenetv1` model.
- **Face Recognition**: Matches the detected faces with stored images in a folder.
- **Landmark Detection**: Identifies facial landmarks using pre-trained models.
- **Accuracy**: High accuracy in recognizing faces due to pre-trained models.
- **Client-Side Execution**: Runs entirely in the browser, without backend processing.

---

## 🛠️ Technologies Used

### **Frontend**:
- **HTML5, CSS3**: For building the user interface.
- **JavaScript (Node.js)**: For implementing client-side logic.
- **FaceAPI.js**: For face detection, recognition, and landmark analysis.

### **Pre-Trained Models**:
- `ssd_mobilenetv1`: For face detection.
- `face_landmark_68`: For facial landmark detection.
- `face_recognition`: For face recognition and matching.

---

## 🚀 How to Run the Project

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/Gaurav-Coder7102/Face-Recognition-System.git
cd Face-Recognition-System

### **Step 2: Install Dependencies**
Install the required dependencies for running the project:
```bash
npm install -g http-server
```

### **Step 3: Start the Server**
To start the server and run the project locally:
```bash
http-server -p 3000
```

### **Step 4: Access the Application**
Once the server is running, open your browser and go to:
```
http://localhost:3000
```
You should be able to upload an image for face recognition and see the results on the page.

---

## ⚡ How the Application Works

1. **Upload Image**: The user selects an image from their device using the file input field.
2. **Face Detection**: The application uses the `ssd_mobilenetv1` model from FaceAPI.js to detect faces in the uploaded image.
3. **Face Recognition**: The detected faces are compared against a set of pre-registered faces stored in the `models` folder.
4. **Output**: The result of the recognition is displayed on the screen, showing whether a match was found or not.

---

## 📁 Project Structure

The project is organized as follows:

```
Face-Recognition-System/
├── models/                  # Contains pre-trained models for face recognition
├── public/                  # Public folder for static files
│   ├── index.html           # Main HTML page
│   └── css/                 # CSS files for styling
│   └── js/                  # JavaScript files
├── package.json             # Project dependencies and configuration
└── README.md                # Project documentation
```

---

## 📝 Notes

- Ensure that the `models` folder contains the necessary pre-trained models such as `ssd_mobilenetv1`, `face_landmark_68`, and `face_recognition`.
- This project uses **FaceAPI.js**, which runs entirely in the browser and does not require any server-side backend for processing images.

---

## 💬 Let's Connect

- LinkedIn: [Gaurav Kadam](https://www.linkedin.com/in/gaurav-kadam-023495247)
- Email: kadamgauravsanjay@gmail.com

---

## 🛠️ Support

If you face any issues or have questions regarding the project, feel free to open an issue on GitHub or reach out via email.

---

[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Gaurav-Coder7102/Face-Recognition-System)
```

---

### Key Changes:

1. **Clarity in instructions**: I've made the steps clear under the "How to Run the Project" section.
2. **Proper Markdown formatting**: The steps for cloning the repository, installing dependencies, and running the server are now clearly structured.
3. **Project Structure section**: Included a section describing the organization of files within the project for easier navigation.
4. **Final details**: Provided "Let's Connect" and "Support" sections for contact information and troubleshooting.

This should give users a complete understanding of how to use and contribute to your project! Let me know if you need any further adjustments.
