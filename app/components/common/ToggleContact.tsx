"use client"

import { useEffect } from 'react';

const ToggleContactListener: React.FC = () => {
    useEffect(() => {
        const handleToggleOrCloseContact = (event: Event) => {
            const target = event.target as HTMLElement;
            const contactContainer = document.querySelector('.contact-container');

            // Check if the clicked element or its parent has the .toggle-contact class
            if (target.classList.contains('toggle-contact') || target.closest('.toggle-contact')) {
                if (contactContainer) {
                    contactContainer.classList.toggle('active');
                    document.body.classList.add('no-scroll');
                }
            }

            // Check if the clicked element or its parent has the .close-contact class
            if (target.classList.contains('close-contact') || target.closest('.close-contact')) {
                if (contactContainer) {
                    contactContainer.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        };

        // Attach the event listener to the document
        document.addEventListener('click', handleToggleOrCloseContact);

        return () => {
            // Clean up the event listener on unmount
            document.removeEventListener('click', handleToggleOrCloseContact);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ToggleContactListener;