export default class AbstractResource {
    constructor() {
        //this.baseURL = `http://localhost:8080/MantenimientoTPI-web/webresources/`;
        this.baseURL = '[{"idMarca":1,"nombreMarca":"Dell","descripcion":"Empresa de tecnologia","email":"dell-corporatio@outlook.com","telefono":"2212323","website":null,"direccion":"USA"},{"idMarca":2,"nombreMarca":"HP","descripcion":"Empresa de tecnologia","email":"hp@corporation.com","telefono":"2311234","website":"","direccion":"CHINA"},{"idMarca":3,"nombreMarca":"ASUS","descripcion":"Empresa de tecnologia","email":null,"telefono":"1234631","website":null,"direccion":"USA"},{"idMarca":4,"nombreMarca":"TOSHIBA","descripcion":"Empresa de tecnologia","email":null,"telefono":"8751234","website":null,"direccion":"JAPON"},{"idMarca":8,"nombreMarca":"asd","descripcion":"asdas","email":"asd","telefono":"asda","website":"adsas","direccion":"adsasd"}]';
    }

    /*

        Entity() {
            return this.entity;
        }
    */

    count(entity){
        return fetch(`${this.baseURL}${entity}/count`,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (request) {
            // Convertir a JSON
            return request.json();
        }).then(function (data) {
            // data es un objeto JSON
            console.log(data);
            return data;

        });
    }
    findAll(entity) {
        return fetch(this.baseURL + entity,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (request) {
            // Convertir a JSON
            return request.json();
        }).then(function (data) {
            // data es un objeto JSON
            console.log(data);
            return data;

        });
    }
    findById(entity, id){
        return fetch(`${this.baseURL}${entity}/${id}`,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (request) {
            // Convertir a JSON
            return request.json();
        }).then(function (data) {
            // data es un objeto JSON
            console.log(data);
            return data;

        });
    }

    create(entity, json) {
        return fetch(this.baseURL + entity,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    edit(entity, json) {
        return fetch(this.baseURL + entity,
            {
                method: 'put',
                headers: {
                    'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }

        findByRange(first, pagesize)
        {

            let url = this.baseURL + "?pagesize=" + pagesize + "&first=" + first;

            fetch(url).then(function (respuesta) {

                return respuesta.json();


            });

        }
}