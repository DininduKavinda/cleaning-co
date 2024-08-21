/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/**/*.blade.php",
        "./resources/**/**/**/*.blade.php",
        "./resources/**/**/**/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./vendor/masmerise/livewire-toaster/resources/views/*.blade.php"
    ],
    theme: {
        extend: {
            fontFamily: {
                'body': [
                    'Rubik'
                ],
                'sans': [
                    'Rubik'
                ]
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

