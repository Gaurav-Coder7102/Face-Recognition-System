<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Employee Face Recognition Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: Consolas, monospace;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            overflow: auto;
        }
        ul {
            margin: 10px 0;
            padding: 0 20px;
        }
    </style>
</head>
<body>
    <h1>Employee Face Recognition Application</h1>
    <p>
        This project demonstrates a <strong>Face Recognition Application</strong> that matches an uploaded image of an employee with pre-stored employee images. 
        It uses <strong>FaceAPI.js</strong> for face detection and recognition, and a simple web-based interface for interaction.
    </p>

    <h2>Features</h2>
    <ul>
        <li>Upload an image for recognition.</li>
        <li>Matches the uploaded image with a database of employee images.</li>
        <li>Displays whether a match was found or not.</li>
        <li>Simple and interactive user interface.</li>
        <li>Powered by <strong>FaceAPI.js</strong>, a lightweight and flexible JavaScript library.</li>
    </ul>

    <h2>Project Structure</h2>
    <pre>
face-recognition-app/
├── models/                  # Pre-trained models for FaceAPI.js
├── js/
│   └── app.js               # Main JavaScript file for the application logic
├── index.html               # Main HTML file for the UI
├── package.json             # Node.js package metadata
├── README.md                # Project documentation
└── styles.css               # (Optional) Styles for UI customization
    </pre>

    <h2>Requirements</h2>
    <h3>Prerequisites:</h3>
    <ul>
        <li><strong>Node.js</strong> installed on your system.</li>
        <li>A simple HTTP server to serve the app (e.g., <code>http-server</code>).</li>
    </ul>
    <h3>Dependencies:</h3>
    <ul>
        <li><a href="https://github.com/justadudewhohacks/face-api.js">FaceAPI.js</a> (CDN used for this project).</li>
        <li>Pre-trained models for face detection and recognition.</li>
        <li><code>http-server</code> (or similar) to serve the project locally.</li>
    </ul>

    <h2>Getting Started</h2>
    <h3>1. Clone the Repository:</h3>
    <pre>
git clone &lt;repository-url&gt;
cd face-recognition-app
    </pre>

    <h3>2. Install Dependencies:</h3>
    <p>Install <code>http-server</code> as a development dependency:</p>
    <pre>
npm install http-server --save-dev
    </pre>

    <h3>3. Download Pre-trained Models:</h3>
    <p>
        Ensure the following pre-trained models are available in the <code>models/</code> folder:
    </p>
    <ul>
        <li><code>ssd_mobilenetv1_model-shard1</code></li>
        <li><code>face_landmark_68_model-shard1</code></li>
        <li><code>face_recognition_model-shard1</code></li>
        <li>Include all required <code>.json</code> and <code>.bin</code> files.</li>
    </ul>

    <h3>4. Run the Project:</h3>
    <p>Start a local HTTP server to serve the app:</p>
    <pre>
npx http-server -p 3000
    </pre>
    <p>Visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to view the app.</p>

    <h2>Usage</h2>
    <ol>
        <li>Open the app in your browser: <code>http://localhost:3000</code>.</li>
        <li>Upload an image using the file input field.</li>
        <li>The app will match the uploaded image with pre-stored employee images.</li>
        <li>If a match is found, the employee's name will be displayed. Otherwise, it will indicate "No match found."</li>
    </ol>

    <h2>Example Output</h2>
    <p>When you upload an image:</p>
    <ul>
        <li>The app will display the uploaded image.</li>
        <li>If a match is found, it will show the name of the matched employee:</li>
        <pre>Matched with Employee: John Doe</pre>
        <li>If no match is found, it will display:</li>
        <pre>No match found</pre>
    </ul>

    <h2>Troubleshooting</h2>
    <ul>
        <li>
            <strong>Issue:</strong> <code>faceapi is not defined.</code><br>
            <strong>Solution:</strong> Ensure the FaceAPI.js CDN link is included in <code>index.html</code>.
        </li>
        <li>
            <strong>Issue:</strong> Models are not loading.<br>
            <strong>Solution:</strong> Verify the <code>models/</code> folder contains all necessary model files 
            (<code>.bin</code> and <code>.json</code>) and the <code>MODEL_URL</code> path is correct in <code>app.js</code>.
        </li>
    </ul>

    <h2>Future Enhancements</h2>
    <ul>
        <li>Add support for more advanced models (e.g., age detection, emotion detection).</li>
        <li>Enhance the UI with custom CSS.</li>
        <li>Store employee images and data in a database for better scalability.</li>
        <li>Integrate this app into a backend service for large-scale deployments.</li>
    </ul>

    <h2>License</h2>
    <p>This project is licensed under the <strong>MIT License</strong>.</p>
</body>
</html>
