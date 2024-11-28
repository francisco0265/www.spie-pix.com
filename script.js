const registerBtn = document.querySelector('.register-btn');
const registrationForm = document.querySelector('.registration-form');
const uploadMusicBtn = document.querySelector('.upload-music-btn');
const musicUploadForm = document.querySelector('.music-upload-form');
const jsVerification = document.getElementById('js-verification');

registerBtn.addEventListener('click', () => {
  registrationForm.style.display = 'block';
  musicUploadForm.style.display = 'none';
  jsVerification.textContent = 'JavaScript is working!';
});

uploadMusicBtn.addEventListener('click', () => {
  musicUploadForm.style.display = 'block';
  registrationForm.style.display = 'none';
  jsVerification.textContent = 'JavaScript is working!';
});