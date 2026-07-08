<?php
// get_products.php
header('Content-Type: application/json');
include 'config.php';

$category_id = isset($_GET['category_id']) ? (int)$_GET['category_id'] : 0;

try {
    $sql = "SELECT p.*, 
                   c.name as category_name, 
                   s.name as sub_category_name 
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            LEFT JOIN subcategories s ON p.sub_category_id = s.id
            WHERE p.status = 'active'";

    $params = [];
    if ($category_id > 0) {
        $sql .= " AND p.category_id = ?";
        $params[] = $category_id;
    }

    $sql .= " ORDER BY p.popular DESC, p.name ASC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $products
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to fetch products'
    ]);
}
?>