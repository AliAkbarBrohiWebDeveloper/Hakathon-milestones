
// Get the button and the skills section from the document
const resultButton = document.getElementById('development-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('Skills') as HTMLElement;

// Add an event listener to toggle the display of the skills section
resultButton.addEventListener('click', () => {
    // Check the current display style and toggle it
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});

