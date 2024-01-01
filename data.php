<?php


if (isset($_POST["action"])) {
    if ($_POST["action"] == "insert") {
        $nama = $_POST["nama"];
        $status = $_POST["status"];
        $jumlah = $_POST["jumlah"];
        $ucapan = $_POST["ucapan"];
        $txt = "$nama|$status|$jumlah|$ucapan";
        file_put_contents('data.txt', $txt . PHP_EOL, FILE_APPEND | LOCK_EX);
    }
}


$data = file('data.txt'); # This is your text file.
$row = count($data);
$limit_page = 5;
$total_page = ceil($row / $limit_page);

if (isset($_POST['page_no'])) {
    $page = $_POST['page_no'];
} else {
    $page = $total_page;
}

$paginationHtml = "";

if ($row > 0) {
    $paginationHtml .= '<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button id="prev" onclick="prev()" class="btn me-md-2" type="button">Prev</button>
    <button id="next" onclick="next()" class="btn me-md-2" type="button">Next</button>
  </div>';

    for ($i = (($page * $limit_page) - $limit_page); $i <= (($limit_page * $page) - 1); $i++) {
        if ($i >= $data) {
            break;
        } else {
            if ($data[$i] != '') {
                $exp = explode('|', $data[$i]);

                if ($exp[1] == 'hadir') {
                    $paginationHtml .= '<div class="card  mt-3">';
                    $paginationHtml .= '<div class="card-header">';
                    $paginationHtml .= $exp[0];
                    $paginationHtml .= ' <span><i class="bi bi-check-circle-fill"></i></span></div>';
                    $paginationHtml .= '<div class="card-body"><p class="card-text">';
                    $paginationHtml .= $exp[3];
                    $paginationHtml .= '</p></div>';
                    $paginationHtml .= '</div>';
                } else {
                    $paginationHtml .= '<div class="card  mt-3">';
                    $paginationHtml .= '<div class="card-header">';
                    $paginationHtml .= $exp[0];
                    $paginationHtml .= ' <span><i class="bi bi-x-circle-fill"></i></span></div>';
                    $paginationHtml .= '<div class="card-body"><p class="card-text">';
                    $paginationHtml .= $exp[3];
                    $paginationHtml .= '</p></div>';
                    $paginationHtml .= '</div>';
                }

            }
        }
    }

    $jsonData = array(
        "html"	=> $paginationHtml,	
        "page"	=> $page,	
        "totalpage"	=> $total_page,	
    );
    echo json_encode($jsonData); 
}
?>