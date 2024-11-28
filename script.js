const imageUpload = document.getElementById('imageUpload');

// Display a loading message
const loadingMessage = document.createElement('p');
loadingMessage.textContent = 'Loading models, please wait...';
loadingMessage.style.fontSize = '16px';
loadingMessage.style.color = '#333';
loadingMessage.style.fontWeight = 'bold';
document.body.append(loadingMessage);

// Load models
Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
])
  .then(() => {
    loadingMessage.textContent = 'Models loaded successfully!';
    start();
  })
  .catch(error => {
    loadingMessage.textContent = 'Error loading models. Please try again.';
    console.error(error);
  });

async function start() {
  const container = document.createElement('div');
  container.style.position = 'relative';
  document.body.append(container);

  const labeledFaceDescriptors = await loadLabeledImages();
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);

  let image, canvas;

  imageUpload.addEventListener('change', async () => {
    try {
      if (image) image.remove();
      if (canvas) canvas.remove();

      image = await faceapi.bufferToImage(imageUpload.files[0]);
      container.append(image);

      canvas = faceapi.createCanvasFromMedia(image);
      container.append(canvas);

      const displaySize = { width: image.width, height: image.height };
      faceapi.matchDimensions(canvas, displaySize);

      const detections = await faceapi
        .detectAllFaces(image)
        .withFaceLandmarks()
        .withFaceDescriptors();

      if (!detections.length) {
        alert('No faces detected. Please try another image.');
        return;
      }

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));

      results.forEach((result, i) => {
        const box = resizedDetections[i].detection.box;
        const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
        drawBox.draw(canvas);
      });
    } catch (error) {
      console.error('Error processing the image:', error);
      alert('An error occurred. Please try again.');
    }
  });
}

function loadLabeledImages() {
  const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark','Gaurav','Tejas Sir'];

  return Promise.all(
    labels.map(async label => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {
        try {
          const img = await faceapi.fetchImage(`labeled_images/${label}/${i}.jpg`);
          const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
          descriptions.push(detections.descriptor);
        } catch (error) {
          console.error(`Error loading image for ${label}:`, error);
        }
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}
