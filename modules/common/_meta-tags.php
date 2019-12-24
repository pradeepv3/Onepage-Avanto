
<!-- SEO Meta Tags -->
<?php 
    $protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0 ? 'https://' : 'http://';
    $pageUrl = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
?>
<title>Free Single page Portfolio Page - Avanto</title>
<meta name="description" content="Free Portfolio website template" />
<meta name="keywords" content="Free single page, free portfolio page, Free HTML portfolio page" />
<meta name="author" content="Avanto" />

<meta property="og:title" content="Free Single page Portfolio Page">
<meta property="og:description" content="Free Single page Portfolio Page">
<meta property="og:image" content="">
<meta property="og:url" content="<?php echo $pageUrl; ?>">
<meta name="twitter:card" content="summary_large_image">