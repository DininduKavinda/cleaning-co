
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    @if (session()->has('message'))
                        <div class="alert alert-success">
                            {{ session('message') }}
                        </div>
                    @endif

                    @if ($errors->any())
                        <ul class="alert alert-warning">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    @endif
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update {{$user->name}} </h2>
                    <div class="card">
                        <div class="card-body">
                            <form wire:submit.prevent="saveData">

                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="name">Name</label>
                                    <input type="text" wire:model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  @error('name') is-invalid @enderror" />
                                    @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Email</label>
                                    <input type="text" wire:model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  @error('email') is-invalid @enderror" />
                                </div>

                                <div class="mb-3" hidden>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="password">Password</label>
                                    <input type="text" wire:model="form.password" readonly hidden
                                        class="form-control" />
                                    @error('password')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="roles">Roles</label>
                                    <select wire:model="form.roles" multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" multiple>
                                        @foreach ($roles as $role)
                                            <option value="{{ $role }}">
                                                {{ $role }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @error('roles')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <button type="submit"
                                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Update</button>
                                    <a href="{{ route('users') }}"
                                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-gray-200 font-medium text-center text-black  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Cancel</a>     </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

