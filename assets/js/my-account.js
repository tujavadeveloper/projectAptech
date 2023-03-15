const data = JSON.parse(localStorage.getItem('user'));
function updateCartUI() {
    if (data) {
        const cartWrapper = document.querySelector('.main-here');
    
        cartWrapper.innerHTML = `
        
        <div class="row main-child">
        <div class="col-lg-3 col-md-4">
            <div class="my-account-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="dashboad-tab" data-bs-toggle="tab" data-bs-target="#dashboad" type="button" role="tab" aria-controls="dashboad" aria-selected="true">Dashboard</button>
                <button class="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false"> Orders</button>
                <button class="nav-link" id="download-tab" data-bs-toggle="tab" data-bs-target="#download" type="button" role="tab" aria-controls="download" aria-selected="false">Download</button>
                <button class="nav-link" id="payment-method-tab" data-bs-toggle="tab" data-bs-target="#payment-method" type="button" role="tab" aria-controls="payment-method" aria-selected="false">Payment Method</button>
                <button class="nav-link" id="address-edit-tab" data-bs-toggle="tab" data-bs-target="#address-edit" type="button" role="tab" aria-controls="address-edit" aria-selected="false">address</button>
                <button class="nav-link" id="account-info-tab" data-bs-toggle="tab" data-bs-target="#account-info" type="button" role="tab" aria-controls="account-info" aria-selected="false">Account Details</button>
                <button class="nav-link" id="logout-here" type="button">Logout</button>
            </div>
        </div>
        <div class="col-lg-9 col-md-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                    <div class="myaccount-content">
                        <h3>Dashboard</h3>
                        <div class="welcome">
                            <p>Hello, <strong>${data.userNameRegister}</strong></p>
                        </div>
                        <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                    <div class="myaccount-content">
                        <h3>Orders</h3>
                        <div class="myaccount-table table-responsive text-center">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Order</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Aug 22, 2018</td>
                                        <td>Pending</td>
                                        <td>$3000</td>
                                        <td><a href="shop-cart.html" class="check-btn sqr-btn ">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>July 22, 2018</td>
                                        <td>Approved</td>
                                        <td>$200</td>
                                        <td><a href="shop-cart.html" class="check-btn sqr-btn ">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>June 12, 2017</td>
                                        <td>On Hold</td>
                                        <td>$990</td>
                                        <td><a href="shop-cart.html" class="check-btn sqr-btn ">View</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="download" role="tabpanel" aria-labelledby="download-tab">
                    <div class="myaccount-content">
                        <h3>Downloads</h3>
                        <div class="myaccount-table table-responsive text-center">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>Date</th>
                                        <th>Expire</th>
                                        <th>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Haven - Free Real Estate PSD Template</td>
                                        <td>Aug 22, 2018</td>
                                        <td>Yes</td>
                                        <td><a href="#/" class="check-btn sqr-btn"><i class="fa fa-cloud-download"></i> Download File</a></td>
                                    </tr>
                                    <tr>
                                        <td>HasTech - Profolio Business Template</td>
                                        <td>Sep 12, 2018</td>
                                        <td>Never</td>
                                        <td><a href="#/" class="check-btn sqr-btn"><i class="fa fa-cloud-download"></i> Download File</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="payment-method" role="tabpanel" aria-labelledby="payment-method-tab">
                    <div class="myaccount-content">
                        <h3>Payment Method</h3>
                        <p class="saved-message">You Can't Saved Your Payment Method yet.</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
                    <div class="myaccount-content">
                        <h3>Billing Address</h3>
     
                        <a href="#/" class="check-btn sqr-btn"><i class="fa fa-edit"></i> Edit Address</a>
                    </div>
                </div>
                <div class="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-info-tab">
                    <div class="myaccount-content">
                        <h3>Account Details</h3>
                        <div class="account-details-form">
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="single-input-item">
                                            <label for="first-name" class="required">First Name</label>
                                            <input type="text" id="first-name" value="${data.userNameRegister}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-input-item">
                                            <label for="last-name" class="required">Last Name</label>
                                            <input type="text" id="last-name" value="${data.userNameRegister}"> 
                                        </div>
                                    </div>
                                </div>
                                <div class="single-input-item">
                                    <label for="display-name" class="required">Display Name</label>
                                    <input type="text" id="display-name" value="${data.displayName}">
                                </div>
                                <div class="single-input-item">
                                    <label for="email" class="required">Email Addres</label>
                                    <input type="email" id="email" value="${data.email}">
                                </div>
                                <fieldset>
                                    <legend>Password change</legend>
                                    <div class="single-input-item">
                                        <label for="current-pwd" class="required">Current Password</label>
                                        <input type="password" id="current-pwd" value="${data.passwordRegister}">
                                    </div>
                               
                                </fieldset>
                                <div class="single-input-item">
                                    <button class="check-btn sqr-btn" id="save">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        `
        function submit() {
            const email = document.querySelector('#email');
            const firstName = document.querySelector('#first-name');
            const displayName = document.querySelector('#display-name');
            const currentPwd = document.querySelector('#current-pwd');
        
            if(email.value.length > 0 &&
                displayName.value.length > 0 &&
                currentPwd.value.length > 0) {
                const item = {
                    email: email.value,
                    displayName: displayName.value,
                    userNameRegister: firstName.value,
                    passwordRegister:currentPwd.value,
                }
                localStorage.setItem('user', JSON.stringify(item))
                alert('Cập nhật thông tin thành công')
                }
        }
        
        
        function logoutF() {
            const user = JSON.parse(localStorage.getItem('user'));
        
            if (user) {
                localStorage.removeItem('user');
        
                window.location = 'index.html'
            }
        }
        const button = document.querySelector('#save');
        const logout = document.querySelector('#logout-here');
        button.addEventListener('click', submit);
        logout.addEventListener('click', logoutF);
    } else {
        window.location = 'index.html'
    }

 
}

function loading() {
    const getData = JSON.parse(localStorage.getItem('user'));

    if (getData) {
        window.location = 'my-account.html'
    } else {
        window.location = 'account-login.html'
    }
  }
    



updateCartUI();
