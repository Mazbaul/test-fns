<?php

class InheritArrayObject extends ArrayObject {

    // inherits function from parent class
    public function __set($name, $val) {
        $this[$name] = $val;
    }

    public function displayAsTable() {
        $table =  '<table>';
        $table .= '<tbody>';
        $all_data = (array) $this;
        foreach ($all_data as $key => $value) {
            $table .= '<tr>';
            $table .= '<td>' . $key .' :'. '</td>';
            $table .= '<th>' . $value . '</th>';
            $table .= '</tr>';
        }
        $table .= '</tbody>';
        $table .=  '</table>';
        return $table;
    }
}

$obj = new InheritArrayObject();
$obj->Name = 'Mazbaul Alam';
$obj->Gender = 'Male';
$obj->Religion = 'Islam';
$obj->Designation = 'Senior Software Engineer';


echo $obj->displayAsTable();

?>
