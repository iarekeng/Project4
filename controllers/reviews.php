<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/review.php';

if($_REQUEST['action'] === 'index'){
    echo 'hi';
}
else if ($_REQUEST['action'] === 'create'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_review = new Review(null, $body_object->name, $body_object->rating, $body_object->description);
  $all_reviews = Reviews::create($new_review);
  echo json_encode($all_reviews);
} else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $updated_review = new Review($_REQUEST['id'], $body_object->name, $body_object->rating, $body_object->description);
    $all_reviews = Reviews::update($updated_review);
    echo json_encode($all_reviews);
} else if ($_REQUEST['action'] === 'delete'){
    $all_reviews = Reviews::delete($_REQUEST['id']);
    echo json_encode($all_reviews);
}
?>
