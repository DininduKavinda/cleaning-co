<div class="p-4 sm:ml-64 dark:bg-gray-900">
    <div class="p-4 border-2 border-gray-200 border-line rounded-lg dark:border-gray-700 mt-14">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    @if (session('status'))
                        <div class="alert alert-success">{{ session('status') }}</div>
                    @endif

                    <div class="card">
                        <div class="card-header ">
                            <h4 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Role: {{ $role->name }}</h4>
                        </div>
                        <div class="card-body">
                            <form wire:submit.prevent="saveData">
                                <div class="mb-3">
                                    @error('permission')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror

                                    <div class="row">
                                        @php
                                            $currentGroup = null;
                                        @endphp

                                        @foreach ($permissions as $permission)
                                            @php
                                                $split = explode(' ', $permission->name, 2)[1];
                                                $splits = explode(' ', $permission->name, 2)[0];
                                            @endphp

                                            @if ($currentGroup !== $split)
                                                @if ($currentGroup !== null)
                                    </div>
                                    @endif

                                    <div class="mb-4">
                                        <h5 class="text-lg font-semibold uppercase">{{ $split }} Permissions</h5>
                                        <div class="flex flex-wrap">
                                            @endif

                                            <div class="w-full md:w-1/4 p-2">
                                                <div
                                                    class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                                                    <label class="flex items-center">
                                                        <input type="checkbox" wire:model="form.permission"
                                                            value="{{ $permission->name }}" class="mr-2">
                                                        {{ $splits }}
                                                    </label>
                                                </div>
                                            </div>

                                            @php
                                                $currentGroup = $split;
                                            @endphp
                                            @endforeach

                                            @if ($currentGroup !== null)
                                        </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <button type="submit"
                                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Update</button>
                                    <a href="{{ route('roles') }}" wire:navigate
                                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-gray-200 font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Cancel</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
