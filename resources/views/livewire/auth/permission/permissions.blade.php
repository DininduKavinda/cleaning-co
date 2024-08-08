<div class="p-4 sm:ml-64 dark:bg-gray-900">
    <div class="p-4 border-2 border-gray-200 border-line rounded-lg dark:border-gray-700 mt-14">

        <div class="container mt-2">
            <div class="row">
                <div class="col-md-12">

                    @if (session('status'))
                        <div class="alert alert-success">{{ session('status') }}</div>
                    @endif

                    <div class="card mt-3">
                        <div class="card-header px-4 py-4">

                            @can('create permission')
                                <a href="{{ route('createPermissions') }}" wire:navigate
                                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add
                                    Permission</a>
                            @endcan

                        </div>
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-6 py-3">Id</th>
                                        <th scope="col" class="px-6 py-3">Name</th>
                                        <th scope="col" class="px-6 py-3" width="40%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($permissions as $permission)
                                        <tr
                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td scope="col" class="px-6 py-3">{{ $permission->id }}</td>
                                            <td scope="col" class="px-6 py-3">{{ $permission->name }}</td>
                                            <td scope="col" class="px-6 py-3">
                                                @can('update permission')
                                                    <a href="{{ route('editPermissions', $permission->id) }}" wire:navigate
                                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                        Edit
                                                    </a>
                                                @endcan

                                                @can('delete permission')
                                                    <button wire:click.prevent="deletePermission({{ $permission->id }})"
                                                        class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                                @endcan
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
