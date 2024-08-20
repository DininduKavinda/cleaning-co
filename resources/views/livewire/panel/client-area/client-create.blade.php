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
                    <h4 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create Client</h4>
                </div>
                <div class="flex justify-center py-5">
                    <figure
                        class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                        <img id="imagePreview" wire:ignore id="fileInput"  class="rounded-full w-96 h-96" src="{{ asset('image.jpg') }}"
                            alt="image description">
                    </figure>
                </div>
                <div class="card-body">
                    <form wire:submit.prevent='saveData'>
                        @csrf

                        <input wire:model='form.id' hidden />
                        <div class="grid md:grid-cols-2 md:gap-6 mb-3">
                            <div class="mb-3">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                                <input type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  @error('form.name') is-invalid @enderror"
                                    id="name" wire:model="form.name" placeholder="Username" required="">
                                @if ($errors->has('form.name'))
                                    <span class="text-danger">{{ $errors->first('form.name') }}</span>
                                @endif
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6 ">
                                <div class="mb-3">
                                    <label for=""
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label>
                                    <select wire:model="form.active"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Select Option</option>
                                        <option value="0">Active</option>
                                        <option value="1">Inactive</option>
                                    </select>
                                </div>
                                <div class="">
                                    <label for=""
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIC
                                    </label>
                                    <input type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  @error('form.name') is-invalid @enderror"
                                        id="name" wire:model="form.nic" placeholder="" required="">
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                Name</label>
                            <input type="text" wire:model="form.full_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('country_name') is-invalid @enderror" />
                        </div>
                        <div class="grid md:grid-cols-3 md:gap-6 mb-3">
                            <div class="mb-3">
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" id="email" wire:model="form.email"
                                    class="bg-gray-50 border  @error('email') is-invalid @enderror border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Product brand" required="">
                                @if ($errors->has('email'))
                                    <span class="text-danger">{{ $errors->first('email') }}</span>
                                @endif
                            </div>

                            <div class="mb-3">
                                <label for=""
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User
                                    Type</label>
                                <select wire:model="form.user_type_id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Select Type</option>
                                    @foreach ($userTypes as $userType)
                                        <option value="{{ $userType->id }}">{{ $userType->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            @if (empty($this->form->id))
                                <div class="mb-3">
                                    <label for=""
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roles</label>
                                    <select wire:model="form.roles"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Select Role</option>
                                        @foreach ($roles as $role)
                                            <option value="{{ $role }}">{{ $role }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            @endif
                        </div>
                        @if (empty($this->form->id))
                            <div class="grid md:grid-cols-2 md:gap-6 mb-3">
                                <div class="mb-3">
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password" wire:model="form.password"
                                        class="bg-gray-50 border @error('password') is-invalid @enderror border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Password" required="">
                                    @if ($errors->has('password'))
                                        <span class="text-danger">{{ $errors->first('password') }}</span>
                                    @endif
                                </div>

                                <div class="mb-3">
                                    <label for="password_confirmation"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password_confirmation"
                                        wire:model.blur="form.password_confirmation"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Confirm Password" required="">
                                </div>

                            </div>
                        @endif


                        <div class="mb-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text" wire:model="form.address"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('country_name') is-invalid @enderror" />
                        </div>

                        <div class="grid md:grid-cols-2 md:gap-6 mb-3">
                            <div class="mb-3">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                <input type="text" wire:model="form.phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('country_name') is-invalid @enderror" />
                            </div>
                            <div class="mb-3">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                                <input type="text" wire:model="form.mobile"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('country_name') is-invalid @enderror" />
                            </div>
                        </div>

                        <div class="grid md:grid-cols-4 md:gap-6 mb-3">
                            <div class="mb-3">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <select wire:model.blur="form.country_id"
                                    class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('form.country_id') is-invalid @enderror">
                                    <option value="">Select Country</option>
                                    @foreach ($countries as $country)
                                        <option value="{{ $country->id }}">{{ $country->country_name }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="mb-3">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                                <select wire:model.blur="form.province_id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('form.province_id') is-invalid @enderror">
                                    <option value="">Select Province</option>
                                    @foreach ($provinces as $province)
                                        <option value="{{ $province->id }}">{{ $province->name_en }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="mb-3">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                                <select wire:model.blur="form.district_id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('form.district_id') is-invalid @enderror">
                                    <option value="">Select District</option>
                                    @foreach ($districts as $district)
                                        <option value="{{ $district->id }}">{{ $district->name_en }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="mb-3">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <select wire:model.blur="form.city_id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 @error('form.city_id') is-invalid @enderror">
                                    <option value="">Select City</option>
                                    @foreach ($cities as $city)
                                        <option value="{{ $city->id }}">{{ $city->name_en }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for=""
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                            <input wire:model="form.image" type="file"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="fileInput" accept="image/*">
                        </div>
                        <button type="submit"
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-black font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Save</button>
                        <a href="{{ route('clients') }}" wire:navigate
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-gray-200 font-medium text-center text-black  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Back</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    document.getElementById('fileInput').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function() {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = reader.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    });
</script>
