document.addEventListener('DOMContentLoaded', () => {
    // --- Helper function to display form messages ---
    function showMessage(elementId, message, isSuccess = true) {
        const messageElement = document.getElementById(elementId);
        messageElement.textContent = message;
        // Simple success/error styling (rely mostly on the default success look)
        if (isSuccess) {
            messageElement.style.backgroundColor = '#e8f5e9'; // Light Green
            messageElement.style.color = '#388e3c'; // Dark Green
        } else {
            messageElement.style.backgroundColor = '#ffebee'; // Light Red
            messageElement.style.color = '#c62828'; // Dark Red
        }
        messageElement.classList.add('show');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 5000);
    }

    // --- FORM 1: Quick Savings Estimate (Hero Section) ---
    const quickEstimateForm = document.getElementById('quickEstimateForm');
    if (quickEstimateForm) {
        quickEstimateForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop default form submission
            
            // In a real application, you would send this data to a backend server (e.g., using fetch)
            const email = this.elements.email.value;
            const phone = this.elements.phone.value;

            // Simulating a successful submission response
            this.reset(); // Clear the form fields
            showMessage(
                'estimateMessage',
                `Thank you, ${email}! Your estimate is being calculated. A specialist will call you soon at ${phone}.`,
                true
            );
        });
    }

    // --- FORM 2: Full Energy Audit Request (Services Section) ---
    const fullAuditForm = document.getElementById('fullAuditForm');
    if (fullAuditForm) {
        fullAuditForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = this.elements.name.value;
            const city = this.elements.city.value;

            // Simulating a successful submission response
            this.reset();
            showMessage(
                'auditMessage',
                `Excellent, ${name}! Your Full AI Audit request in ${city} has been received. We will contact you within 24 hours to schedule the sensor installation.`,
                true
            );
        });
    }

    // --- FORM 3: Partner with Us (Footer) ---
    const partnerForm = document.getElementById('partnerForm');
    if (partnerForm) {
        partnerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const organization = this.elements.organization.value;
            const partnerType = this.elements.partnerType.value;

            // Simulating a successful submission response
            this.reset();
            showMessage(
                'partnerMessage',
                `Thank you, ${organization}! Your ${partnerType} partnership inquiry is under review. We will reach out shortly.`,
                true
            );
        });
    }

});