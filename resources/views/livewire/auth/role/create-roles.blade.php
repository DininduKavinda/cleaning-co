
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">

                    @if ($errors->any())
                        <ul class="alert alert-warning">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    @endif

                    <div class="card">
                        <div class="card-header">
                            <h4 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create Role

                            </h4>
                        </div>
                        <div class="card-body">
                            <form wire:submit.prevent='saveData'>
                                @csrf
                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="">Role Name</label>
                                    <input type="text" wire:model="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  @error('name') is-invalid @enderror"
                                    />
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Save</button>
                                    <a href="{{ route('roles') }}" wire:navigate class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-gray-200 font-medium text-center text-black  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Back</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

