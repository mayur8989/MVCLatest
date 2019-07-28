function GetAll() {

    $.ajax({
        url: "http://localhost:51227/api/Values/Get",
        type: 'GET',
        datatype: 'JSON',
        success: function (data) {
            tbl(data);
        },
        error: function () {
            alert(Error);
        }
    })
}

function tbl(emp) {
    var result = '<table class="greyGridTable"><th>Id</th><th>Name</th><th>City</th><th>Phone</th><th>Email</th><th>Actions</th>';
    $.each(emp, function (index, employee) {
        result += "<tr><td>" + employee.EmployeeID + "</td><td>" + employee.Name + "</td><td>" + employee.City + "</td><td>" + employee.Email + "</td><td>" + employee.Phone + "</td><td><button onclick='Getbyid(" + employee.EmployeeID + ")'>update</button><button onclick='Delete(" + employee.EmployeeID + ")'>delete</button></td></tr>";
    })
    result += "</table>";
    $("#tblData").html(result);
}


function Insert() {
    var nm = $("#txtName").val();
    var ct = $("#txtCity").val();
    var em = $("#txtEmail").val();
    var pn = $("#txtPhone").val();

    $("#btnUpdate").hide();
    $("#btnInsert").show();
    var result = {
        Name: nm,
        City: ct,
        Email: em, 
        Phone: pn
    }

    //alert(result);

    $.ajax({
        type: 'POST',
        data: JSON.stringify(result),
        url: 'http://localhost:51227/api/Values/Post',
        contentType: "application/json",
        success: function () {
            GetAll();
            $("#cform")[0].reset();
            alert("Record added successfully.");
        }
    });

}

function Getbyid(id) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:51227/api/Values/Get/' + id,
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            $("#btnUpdate").show();
            $("#btnInsert").hide();
            $("#txtName").val(data.Name);
            $("#txtPhone").val(data.Phone);
            $("#txtCity").val(data.City);
            $("#txtEmail").val(data.Email);
            $("#EmployeeID").val(data.EmployeeID);
        }
    });
}

function Update() {
    var nm = $("#txtName").val();
    var pn = $("#txtPhone").val();
    var ct = $("#txtCity").val();
    var em = $("#txtEmail").val();
    var id = $("#EmployeeID").val();

    var result = {
        EmployeeID: id,
        Name: nm,
        City: ct,
        Email: em,
        Phone: pn
    }

    $.ajax({
        type: 'POST',
        data: JSON.stringify(result),
        url: 'http://localhost:51227/api/Values/Update',
        contentType: "application/json",
        success: function () {
            $("#cform")[0].reset();
            $("#btnUpdate").hide();
            $("#btnInsert").show();
            GetAll();
            alert('update record successfully.')
        }
    });
}

function Delete(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:51227/api/Values/Delete/' + id,
        contentType: "application/json",
        success: function () {
            GetAll();
            alert("Delete record successfully.");
        }
    });
}
