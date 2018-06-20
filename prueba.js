dataSet = '[{"idMarca":1,"nombreMarca":"Dell","descripcion":"Empresa de tecnologia","email":"dell-corporatio@outlook.com","telefono":"2212323","website":null,"direccion":"USA"}]';
// let   myRecords = JSON.parse($records.text());

$(document).ready(function() {
    $('#tabla').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": 'http://localhost:3000/datos.json'
    } );
} );