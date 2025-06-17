// Simulate embed content
document.getElementById('web-embed-target').innerHTML += `
  <p><strong>Embedded content loaded successfully!</strong></p>
`;

// Modal trigger
document.getElementById('show-modal-btn').addEventListener('click', () => {
  document.getElementById('web-modal').style.display = 'block';
});

