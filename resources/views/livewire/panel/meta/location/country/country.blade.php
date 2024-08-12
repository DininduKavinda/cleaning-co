<div>
    @can('view location')
        <a href="{{ route('location.country.create') }}" wire:navigate
            class="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add
            Country</a>
    @endcan
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Country
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Iso Code
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Phone Code
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($countries as $country)
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $country['country_name'] }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $country['iso_code'] ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $country['phone_code'] ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="{{ route('location.country.update', $country['id']) }}" wire:navigate
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            @can('delete location')
                                <button wire:click.prevent="deleteData({{ $country['id'] }})"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                            @endcan
                        </td>
                    </tr>
                @endforeach

                @if (empty($countries))
                    <tr>
                        <td colspan="5" class="px-6 py-4 text-center">
                            No data available.
                        </td>
                    </tr>
                @endif
            </tbody>
        </table>
    </div>
</div>
