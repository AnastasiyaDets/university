<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>My Chat</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <style>
        .spacer-10{
            margin:5px;
        }

        body{
            background: url("/11.jpg");
            background-size:cover;
        }

    </style>
</head>
<body>
<div class="container">
    <div class="spacer-10"></div>
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">My Chat</div>
                <div class="panel-body">
                    <%= request.getAttribute("error") ==  null ? "" : "<p>" + request.getAttribute("error") + "</p>" %>
                    <form role="form" class="form-horizontal" action="/login" method="post">
                        <div class="form-group">
                            <label for="login" class="col-sm-4 control-label">Login</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" name="login" id="login" placeholder="Login">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-4 control-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-8">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
