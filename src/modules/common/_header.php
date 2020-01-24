<!DOCTYPE Html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php include 'modules/common/_meta-tags.php'?>
    <?php include 'modules/common/_head-scripts.php'?>
</head>

<body class="" data-spy="scroll" data-target=".navbar-nav">
    <div class="container-wrapper">
        <header class="m-header-wrapper fixed-top">
            <div class="container">
                <div class="navbar navbar-light navbar-expand-lg">
                    <a href="index.php" class="navbar-brand">Avanto</a>

                    <!-- hamburger menu bar vissible for mobile device -->
                    <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar">
                        <span class="hamburger"></span>
                    </button>
                    <!-- Menu Module  -->
                    <?php include 'modules/common/_menu.php';?>

                </div>
            </div>
        </header>