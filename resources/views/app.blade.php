<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Cleaning Company') }}</title>

    <link rel="icon" href="{{ asset('theme/assets/images/favicon.png') }}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('theme/assets/images/favicon.png') }}" type="image/x-icon">
    <!-- Google font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link
        href="{{ asset('css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900;6..12,1000&amp;display=swap') }}"
        rel="stylesheet">
    <!-- Flag icon css -->
    <link rel="stylesheet" href="{{ asset('theme/assets/css/vendors/flag-icon.css') }}">
    <!-- iconly-icon-->
    <link rel="stylesheet" href="{{ asset('theme/assets/css/iconly-icon.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/assets/css/bulk-style.css') }}">
    <!-- iconly-icon-->
    <link rel="stylesheet" href="{{ asset('theme/assets/css/themify.css') }}">
    <!--fontawesome-->
    <link rel="stylesheet" href="{{ asset('theme/assets/css/fontawesome-min.css') }}">
    <!-- Whether Icon css-->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('theme/assets/css/vendors/weather-icons/weather-icons.min.css') }}">
    <!-- App css -->
    <link rel="stylesheet" href="{{ asset('theme/assets/css/style.css') }}">
    <link id="color" rel="stylesheet" href="{{ asset('theme/assets/css/color-1.css') }}" media="screen">
    <!-- Whether Icon css-->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('theme/assets/css/vendors/weather-icons/weather-icons.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/assets/css/vendors/scrollbar.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/assets/css/vendors/slick.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/assets/css/vendors/slick-theme.css') }}">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body>
    <div class="tap-top"><i class="iconly-Arrow-Up icli"></i></div>
    <!-- loader-->
    <div class="loader-wrapper">
        <div class="loader"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
        @inertia
    </div>
    <!-- jquery-->
    <script src="{{asset('theme/assets/js/vendors/jquery/jquery.min.js')}}"></script>
    <!-- bootstrap js-->
    <script src="{{asset('theme/assets/js/vendors/bootstrap/dist/js/bootstrap.bundle.min.js')}}" defer=""></script>
    <script src="{{asset('theme/assets/js/vendors/bootstrap/dist/js/popper.min.js')}}" defer=""></script>
    <!--fontawesome-->
    <script src="{{asset('theme/assets/js/vendors/font-awesome/fontawesome-min.js')}}"></script>
    <!-- feather-->
    <script src="{{asset('theme/assets/js/vendors/feather-icon/feather.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/vendors/feather-icon/custom-script.js')}}"></script>

    <!-- height_equal-->
    <script src="{{asset('theme/assets/js/height-equal.js')}}"></script>
    <!-- config-->
    <script src="{{asset('theme/assets/js/config.js')}}"></script>
    <!-- apex-->
    {{-- <script src="{{asset('theme/assets/js/chart/apex-chart/apex-chart.js')}}"></script>
    <script src="{{asset('theme/assets/js/chart/apex-chart/stock-prices.js')}}"></script> --}}
    <!-- scrollbar-->
    {{-- <script src="{{asset('theme/assets/js/scrollbar/simplebar.js')}}"></script>
    <script src="{{asset('theme/assets/js/scrollbar/custom.js')}}"></script> --}}
    <!-- slick-->
    <script src="{{asset('theme/assets/js/slick/slick.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/slick/slick.js')}}"></script>
    <!-- theme_customizer-->
    <script src="{{asset('theme/assets/js/theme-customizer/customizer.js')}}"></script>
    <!-- tilt-->
    <script src="{{asset('theme/assets/js/animation/tilt/tilt.jquery.js')}}"></script>
    <!-- page_tilt-->
    <script src="{{asset('theme/assets/js/animation/tilt/tilt-custom.js')}}"></script>
    <!-- dashboard_1-->
    {{-- <script src="{{asset('theme/assets/js/dashboard/dashboard_1.js')}}"></script> --}}
    <!-- custom script -->
    <script src="{{asset('theme/assets/js/script.js')}}"></script>
</body>

</html>
