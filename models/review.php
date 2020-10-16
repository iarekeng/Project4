<?php

$dbconn = null;
if(getenv('DATABASE_URL')){
	$connectionConfig = parse_url(getenv('DATABASE_URL'));
	$host = $connectionConfig['host'];
	$user = $connectionConfig['user'];
	$password = $connectionConfig['pass'];
	$port = $connectionConfig['port'];
	$dbname = trim($connectionConfig['path'],'/');
	$dbconn = pg_connect(
		"host=".$host." ".
		"user=".$user." ".
		"password=".$password." ".
		"port=".$port." ".
		"dbname=".$dbname
	);
} else {
	$dbconn = pg_connect("host=localhost dbname=reviews");
}

class Review {
    public $id;
    public $name;
    public $rating;
    public $description;
    public function __construct($id, $name, $rating, $description) {
        $this->id = $id;
        $this->name = $name;
        $this->rating = $rating;
        $this->description = $description;
    }
}

class Reviews {
  static function create($review){
    $query = "INSERT INTO reviews (name, rating, description) VALUES ($1, $2, $3)";
    $query_params = array($review->name, $review->rating, $review->description);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function update($updated_review){
    $query = "UPDATE reviews SET name = $1, rating = $2, description = $3 WHERE id = $3";
    $query_params = array($updated_review->name, $updated_review->rating, $updated_review->description, $updated_review->id);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function delete($id){
    $query = "DELETE FROM reviews WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);
    return self::all();
  }
    static function all(){
        $reviews = array();
        $results = pg_query("SELECT * FROM reviews ORDER BY id ASC");
        $row_object = pg_fetch_object($results);
        while($row_object !== false){

            $new_review = new Review(
                intval($row_object->id),
                $row_object->name,
                intval($row_object->rating),
                $row_object->description
            );
            $reviews[] = $new_review;
            $row_object = pg_fetch_object($results);
        }
        return $reviews;
    }
}


?>
