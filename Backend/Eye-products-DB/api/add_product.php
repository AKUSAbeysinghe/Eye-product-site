<?php
// add_product.php
header('Content-Type: application/json');
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

try {
    $category_id     = (int)$_POST['category_id'];
    $sub_category_id = (int)$_POST['sub_category_id'];
    $name            = trim($_POST['name']);
    $price           = (float)$_POST['price'];
    $description     = trim($_POST['description'] ?? '');
    $stock           = (int)($_POST['stock'] ?? 0);
    $popular         = isset($_POST['popular']) && $_POST['popular'] === 'true' ? 1 : 0;

    // Image Upload
    $image_url = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $upload_dir = '../uploads/products/';
        if (!is_dir($upload_dir)) mkdir($upload_dir, 0755, true);

        $file_ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
        $new_file_name = uniqid('prod_') . '.' . $file_ext;
        $target_file = $upload_dir . $new_file_name;

        $allowed_types = ['jpg', 'jpeg', 'png', 'webp'];
        if (in_array($file_ext, $allowed_types)) {
            if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
                $image_url = 'uploads/products/' . $new_file_name;
            }
        }
    }

    $stmt = $pdo->prepare("
        INSERT INTO products 
        (category_id, sub_category_id, name, description, price, image_url, popular, stock, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active')
    ");

    $stmt->execute([$category_id, $sub_category_id, $name, $description, $price, $image_url, $popular, $stock]);

    echo json_encode([
        'success' => true,
        'message' => 'Product added successfully',
        'id' => $pdo->lastInsertId()
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to add product: ' . $e->getMessage()
    ]);
}
?>