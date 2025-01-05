document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const exampleButtons = document.querySelectorAll('.example-button');
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const responseArea = document.getElementById('response-area');
    const moonEmoji = '🌑'; // Dark mode
    const sunEmoji = '🔆';    // Light mode


    // Function to toggle dark mode
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        document.querySelectorAll('header, textarea, button, footer, select, .response-option, .example-button')
            .forEach(element => element.classList.toggle('dark-mode'));
         // Update toggle text
        darkModeToggle.textContent = body.classList.contains('dark-mode') ? sunEmoji : moonEmoji;
        // Save mode preference to localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    };

    // Check for saved mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        toggleDarkMode();
        darkModeToggle.textContent = sunEmoji; // set to sun
    } else {
      darkModeToggle.textContent = moonEmoji; // Set initial state to moon
    }
     //Event listener for dark mode toggle button
    darkModeToggle.addEventListener('click', toggleDarkMode);


    // Example buttons logic
    exampleButtons.forEach(button => {
        button.addEventListener('click', () => {
            textInput.value = button.dataset.example;
        });
    });


    generateBtn.addEventListener('click', async () => {
        const inputText = textInput.value.trim();
        if (!inputText) {
            responseArea.innerHTML = '<p>Please enter a message to generate a response.</p>';
            return;
        }
        try {
            responseArea.innerHTML = '<p>Generating response...</p>';
            const rizzLevel = document.getElementById('rizz-level').value;
            const response = await fetch("https://instantrizz.com/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: inputText,
                    rizzLevel: rizzLevel,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.response) {
                responseArea.innerHTML = ''; // Clear loading text
                const responses = Array.isArray(data.response) ? data.response : [data.response];
                responses.forEach(response => {
                    const responseOption = document.createElement('div');
                    responseOption.classList.add('response-option');
                    if (body.classList.contains('dark-mode')) {
                        responseOption.classList.add('dark-mode');
                    }

                    const responseText = document.createElement('p');
                    responseText.textContent = response;
                    responseOption.appendChild(responseText);

                    const copyButton = document.createElement('button');
                    copyButton.textContent = 'Copy';
                    if (body.classList.contains('dark-mode')) {
                        copyButton.classList.add('dark-mode');
                    }

                    copyButton.addEventListener('click', () => {
                        navigator.clipboard.writeText(response);
                        copyButton.textContent = 'Copied!';
                        setTimeout(() => {
                            copyButton.textContent = 'Copy';
                        }, 2000);
                    });
                    responseOption.appendChild(copyButton);
                    responseArea.appendChild(responseOption);
                });
            } else {
                responseArea.innerHTML = '<p>Failed to generate a response.</p>';
            }

        } catch (error) {
            console.error("Failed to fetch response:", error);
            responseArea.innerHTML = `<p>Error generating response: ${error.message}</p>`;
        }
    });
});
