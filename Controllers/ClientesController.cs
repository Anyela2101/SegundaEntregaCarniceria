using System.Collections.Generic;
using System.Linq;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Carniceria.Models;
using static Carniceria.Models.ClientesModel;


namespace Carniceria.Controllers
{
     [Route("api/[controller]")]
    [ApiController]
    public class ClientesController: ControllerBase
    {
        private readonly ClientesService _clientesservice;
        public IConfiguration Configuration {get;}

        public ClientesController(IConfiguration configuration){
            Configuration=configuration;
            string ConnectionStrings = Configuration["ConnectionStrings:DefaultConnection"];
            _clientesservice =new ClientesService(ConnectionStrings);
        }

        [HttpPost]
        public ActionResult<ClientesViewModel> Post(ClientesInputModel clientesInput){
            Clientes clientes = Mapear(clientesInput);
            var response = _clientesservice.Guardar(clientes);
            if(response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Clientes);
        }

        private Clientes Mapear(ClientesInputModel clientesInput){
            var clientes=new Clientes{
                identificacion=clientesInput.identificacion,
                nombres = clientesInput.nombres,
                apellidos = clientesInput.apellidos,
                direccion = clientesInput.direccion,
                telefono = clientesInput.telefono,
                email = clientesInput.email
            };
            return clientes;
        }

         [HttpGet]
        public IEnumerable <ClientesViewModel> Gets(){
            var clientes = _clientesservice.ConsultarTodos().Select(p=>new ClientesViewModel(p));
            return clientes;
        }
    }
}