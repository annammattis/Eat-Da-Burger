function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
    console.log(arr);
  }

  return arr.toString();
}

var vals = printQuestionMarks(5);

var table = 'names'
var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += 5;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

