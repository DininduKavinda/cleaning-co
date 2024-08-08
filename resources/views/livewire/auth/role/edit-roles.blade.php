<div class="p-4 sm:ml-64 dark:bg-gray-900">
    <div class="p-4 border-2 border-gray-200 border-line rounded-lg dark:border-gray-700 mt-14">
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
                            <h4>Edit Role
                                <a href="{{ url('roles') }}" class="btn btn-danger float-end">Back</a>
                            </h4>
                        </div>
                        <div class="card-body">
                            <form wire:submit="saveData">
                                @csrf

                                <div class="mb-3">
                                    <label for="">Role Name</label>
                                    <input type="text" wire:model="form.name"
                                        class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
