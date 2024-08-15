<div>
    @can('view client')
        <a href="{{ route('client.create') }}" wire:navigate
            class="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add
            Clients</a>
    @endcan
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Full name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        mobile
                    </th>
                    <th scope="col" class="px-6 py-3">
                        phone
                    </th>
                    <th scope="col" class="px-6 py-3">
                        address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        city
                    </th>
                    <th scope="col" class="px-6 py-3">
                        district
                    </th>
                    <th scope="col" class="px-6 py-3">
                        country
                    </th>
                    <th scope="col" class="px-6 py-3">
                        active
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($clients as $client)
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $client['id' ?? 'N/A'] }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $client['full_name'] ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $client['mobile'] ?? 'N/A' }}
                        </td>
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $client['phone' ?? 'N/A'] }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $client['address'] ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $client->city->name_en ?? 'N/A' }}
                        </td>
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $client->district->name_en ?? 'N/A' }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $client->country->country_name ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4">
                            <div >
                                @if ($client['active'] == 0)
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-tooltip-target="tooltip-right"
                                        class="size-6">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                @else
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-tooltip-target="tooltip-right"
                                        class="size-6">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                @endif
                                <div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                   {{ $client['active'] == 0 ? 'Active' : 'Inactive'}}
                                </div>
                                <div>
                        </td>

                        <td class="px-6 py-4 text-right">
                            <a href="{{ route('client.update', $client['id']) }}" wire:navigate
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            @can('delete location')
                                <button wire:click.prevent="deleteData({{ $client['id'] }})"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                            @endcan
                        </td>
                    </tr>
                @endforeach

                @if (empty($clients))
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
