$(document).ready(function() {
    // Function to get the greeting based on the time of day
    function getGreeting() {
        const now = new Date();
        const hours = now.getHours();
        
        let greeting;
        
        if (hours >= 0 && hours < 12) {
            greeting = 'Good Morning';
        } else if (hours >= 12 && hours < 18) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Good Evening';
        }

        return greeting;
    }

    // Function to update the time display
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        $('#current-time').text(timeString);
    }

    // Set greeting on page load
    const greeting = getGreeting();
    $('#greeting').text(greeting);

    // Update time every minute
    updateTime();
    setInterval(updateTime, 60000);
});


     $(document).ready(function() {
        // Handle the start terminal button click
        $('#start-terminal-btn').click(function() {
            $('#interactive-terminal-container').toggleClass('hidden'); // Show/Hide terminal
            $(this).hide(); // Hide the button
        });

        // Initialize the terminal here if necessary
        $('#terminal').terminal({
            // Your terminal options
        });
    });


    $(document).ready(function() {
        const canvas = document.getElementById('line-canvas');
        const ctx = canvas.getContext('2d');
    
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    
        function drawLine(startX, startY, endX, endY) {
            const duration = 500; // Duration in milliseconds
            const startTime = Date.now();
    
            function animate() {
                const elapsedTime = Date.now() - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentX = startX + (endX - startX) * progress;
                const currentY = startY + (endY - startY) * progress;
    
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous lines
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(currentX, currentY);
                ctx
    
    
        $(window).on('resize', resizeCanvas);
        resizeCanvas(); // Initial canvas size
            }}});

            
    



      


