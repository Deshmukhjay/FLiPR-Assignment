tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#232536',
                secondary: '#FFD050',
                purple: '#592EA9',
                'dark-grey': '#4C4C4C',
                'medium-grey': '#6D6E76',
                'light-grey': '#F4F4F4',
                lavender: '#F4F0F8',
                'fate-yellow':'#FBF6EA',
                'light-yellow': '#FFD050',
            },
            fontFamily: {
                'sen': ['Sen', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
}
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});
