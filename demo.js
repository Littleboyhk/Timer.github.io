document.addEventListener('DOMContentLoaded', (event) => {
    const localVideo = document.getElementById('localVideo');
    const remoteVideo = document.getElementById('remoteVideo');
    const skipButton = document.getElementById('skipButton');
    const sendMessageButton = document.getElementById('sendMessageButton');
    const messageInput = document.getElementById('messageInput');
    const strangerMessages = document.getElementById('stranger-messages');

    // Function to start local video
    function startLocalVideo() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                localVideo.srcObject = stream;
                // You would also need to send this stream to the remote peer
            })
            .catch(error => {
                console.error('Error accessing media devices.', error);
            });
    }

    // Placeholder function for WebRTC signaling
    function setupWebRTC() {
        // This function should include the WebRTC setup, including peer connection and signaling
    }

    // Function to handle skip button click
    function handleSkip() {
        console.log('Skip button clicked');
        // Logic to disconnect the current guest and wait for a new one
        // For now, just clear the remote video
        remoteVideo.srcObject = null;
    }

    // Function to handle sending messages
    function handleSendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            strangerMessages.appendChild(messageElement);
            messageInput.value = '';
            // Logic to send the message to the remote peer
        }
    }

    // Event listeners for skip and send message buttons
    skipButton.addEventListener('click', handleSkip);
    sendMessageButton.addEventListener('click', handleSendMessage);

    // Start local video and setup WebRTC on page load
    startLocalVideo();
    setupWebRTC();
});
