<div>
    @can('view location')
        <a href="{{ route('location.province.create') }}" wire:navigate
            class="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add
            Province</a>
    @endcan
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name English
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name Sinhala
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Country
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($provinces['data'] as $province)
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $province['name_en'] }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $province['name_si'] ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $province['country_id'] ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            @can('update location')
                                <a href="{{ route('location.province.update', $province['id']) }}" wire:navigate
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            @endcan
                            @can('delete location')
                                <button wire:click.prevent="deleteData({{ $province['id'] }})"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                            @endcan
                        </td>
                    </tr>
                @endforeach

                @if (empty($provinces))
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
